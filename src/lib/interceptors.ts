import type {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from 'axios';

import { clearTokens, saveTokens } from '../utils/auth';

type CustomAxiosRequestConfig = {
  _retry?: boolean;
} & InternalAxiosRequestConfig;

export const onRequest = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

export const onResponseError = async (
  error: AxiosError,
  instance: AxiosInstance,
  authClient: AxiosInstance,
) => {
  const originalRequest = error.config as CustomAxiosRequestConfig;

  if (error.response?.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;

    try {
      const refreshToken = localStorage.getItem('refreshToken');
      const response = await authClient.post('/refresh-token', {
        refreshToken,
      });

      const { access_token: accessToken, refresh_token: newRefreshToken } =
        response.data;

      saveTokens(accessToken, newRefreshToken);

      instance.defaults.headers.common['Authorization'] =
        `Bearer ${accessToken}`;
      originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;

      return instance(originalRequest);
    } catch (refreshError) {
      clearTokens();
      return Promise.reject(refreshError);
    }
  }

  return Promise.reject(error);
};

export const attachAuthInterceptors = (
  instance: AxiosInstance,
  authClient: AxiosInstance,
) => {
  instance.interceptors.request.use(onRequest, (error) =>
    Promise.reject(error),
  );

  instance.interceptors.response.use(
    (response) => response,
    (error) => onResponseError(error, instance, authClient),
  );
};
