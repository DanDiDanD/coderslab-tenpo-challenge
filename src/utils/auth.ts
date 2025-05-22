import { jwtDecode } from 'jwt-decode';

import { authClient } from '../lib/apiClient';

export const saveTokens = (accessToken: string, refreshToken: string) => {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};

export const clearTokens = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

export const hasAnyToken = (): boolean => {
  return !!localStorage.getItem('accessToken');
};

const isTokenValid = (token: string): boolean => {
  try {
    const decoded: { exp: number } = jwtDecode(token);
    return decoded.exp * 1000 > Date.now();
  } catch {
    return false;
  }
};

export const isAuthenticated = async (): Promise<boolean> => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  if (accessToken && isTokenValid(accessToken)) {
    return true;
  }

  if (refreshToken && isTokenValid(refreshToken)) {
    try {
      const { data } = await authClient.post('/refresh-token', {
        refreshToken,
      });

      saveTokens(data.access_token, data.refresh_token);
      return true;
    } catch {
      clearTokens();
      return false;
    }
  }

  clearTokens();
  return false;
};
