import { http, HttpResponse } from 'msw';

import { AUTH_LOGIN } from '../features/auth/api/endpoints';
import type { LoginFormValues } from '../features/auth/types';

const LOGIN_URL = import.meta.env.VITE_API_AUTH_BASE_URL + AUTH_LOGIN;

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
];
