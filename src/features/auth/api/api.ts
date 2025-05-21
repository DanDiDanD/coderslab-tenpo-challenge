import { authClient } from '../../../lib/apiClient';
import type { LoginInput } from '../types';

import { AUTH_LOGIN, AUTH_REFRESH_TOKEN } from './endpoints';

export const login = async (user: LoginInput) => {
  const { data } = await authClient.post(AUTH_LOGIN, user);
  localStorage.setItem('accessToken', data.access_token);
  localStorage.setItem('refreshToken', data.refresh_token);
  return data;
};

export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  if (!refreshToken) throw new Error('No refresh token');

  const { data } = await authClient.post(AUTH_REFRESH_TOKEN, { refreshToken });

  localStorage.setItem('accessToken', data.access_token);
  localStorage.setItem('refreshToken', data.refresh_token);
  return data.access_token;
};
