import { useQuery } from '@tanstack/react-query';

import apiClient from './apiClient';

export interface PokemonCard {
  id: string;
  name: string;
  images: {
    small: string;
    large: string;
  };
}

interface ApiResponse {
  data: PokemonCard[];
}

const CARDS_ENDPOINT = '/cards?pageSize=5';

const fetchData = async (url: string) => {
  const { data } = await apiClient.get<ApiResponse>(url);
  return data;
};

export function usePokemonCards() {
  return useQuery<PokemonCard[]>({
    queryKey: ['pokemon-cards'],
    queryFn: async () => fetchData(CARDS_ENDPOINT).then((res) => res.data),
    staleTime: 1000 * 60 * 5,
  });
}
