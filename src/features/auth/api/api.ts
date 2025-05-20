import { authClient } from '../../../lib/apiClient';

import { AUTH_LOGIN, AUTH_REFRESH_TOKEN } from './endpoint';

export async function login(email: string, password: string) {
  const { data } = await authClient.post(AUTH_LOGIN, { email, password });
  localStorage.setItem('accessToken', data.access_token);
  localStorage.setItem('refreshToken', data.refresh_token);
  return data;
}

export async function refreshAccessToken() {
  const refreshToken = localStorage.getItem('refreshToken');
  if (!refreshToken) throw new Error('No refresh token');

  const { data } = await authClient.post(AUTH_REFRESH_TOKEN, { refreshToken });

  localStorage.setItem('accessToken', data.access_token);
  localStorage.setItem('refreshToken', data.refresh_token);
  return data.access_token;
}
