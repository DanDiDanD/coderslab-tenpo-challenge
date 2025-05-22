import { http, HttpResponse } from 'msw';

import { AUTH_LOGIN } from '../features/auth/api/endpoints';
import type { LoginFormValues } from '../features/auth/types';

import page1 from './fixtures/cards-page-1.json';
import page2 from './fixtures/cards-page-2.json';

const LOGIN_URL = import.meta.env.VITE_API_AUTH_BASE_URL + AUTH_LOGIN;
const POKEMON_URL = import.meta.env.VITE_API_POKEMON_BASE_URL + 'cards';

const MAP = {
  1: page1,
  2: page2,
} as const;

export const handlers = [
  http.post(LOGIN_URL, async ({ request }) => {
    const { email, password } = (await request.json()) as LoginFormValues;

    const isValid = email === 'john@mail.com' && password === 'changeme';

    if (isValid) {
      return HttpResponse.json(
        {
          access_token: 'abc.def.ghi',
          refresh_token: 'jkl.mno.pqr',
        },
        { status: 200 },
      );
    }

    return HttpResponse.json(
      { message: 'Invalid credentials' },
      { status: 401 },
    );
  }),
  http.get(POKEMON_URL, ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') ?? '1');

    const body = MAP[page as 1 | 2];
    if (body) {
      return HttpResponse.json(body, { status: 200 });
    }
  }),
];
