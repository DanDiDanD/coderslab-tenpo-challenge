import axios, { type AxiosInstance } from 'axios';

import { attachAuthInterceptors } from './interceptors';

const createApiClient = (baseURL?: string): AxiosInstance => {
  const instance = axios.create({ baseURL });
  return instance;
};

export const authClient = createApiClient(
  import.meta.env.VITE_API_AUTH_BASE_URL,
);
export const pokemonClient = createApiClient(
  import.meta.env.VITE_API_POKEMON_BASE_URL,
);

attachAuthInterceptors(pokemonClient, authClient);
