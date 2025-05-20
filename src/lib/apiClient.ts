import axios, { type AxiosInstance } from 'axios';

const createApiClient = (baseURL?: string): AxiosInstance => {
  const instance = axios.create({ baseURL });

  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const refreshToken = localStorage.getItem('refreshToken');
          const response = await axios.post('/refresh-token', { refreshToken });
          const { accessToken, refreshToken: newRefreshToken } = response.data;

          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', newRefreshToken);

          instance.defaults.headers.common['Authorization'] =
            `Bearer ${accessToken}`;
          originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;

          return instance(originalRequest);
        } catch (refreshError) {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(error);
    },
  );

  return instance;
};

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await axios.post('/refresh-token', { refreshToken });
        const { accessToken, refreshToken: newRefreshToken } = response.data;

        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', newRefreshToken);

        apiClient.defaults.headers.common['Authorization'] =
          `Bearer ${accessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;

        return apiClient(originalRequest);
      } catch (refreshError) {
        // Handle refresh token error (e.g., redirect to login)
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        // Redirect to login or perform other actions
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export const authClient = createApiClient(
  import.meta.env.VITE_API_AUTH_BASE_URL,
);
export const pokemonClient = createApiClient(
  import.meta.env.VITE_API_POKEMON_BASE_URL,
);
