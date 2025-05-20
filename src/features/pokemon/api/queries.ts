import { useQuery } from '@tanstack/react-query';

import type { PokemonCard } from '../types';
import { fetchData } from '../../../lib/fetcher';

import { POKEMON_CARDS_ENDPOINT } from './endpoint';

export function usePokemonCards() {
  return useQuery<PokemonCard[]>({
    queryKey: ['pokemon-cards'],
    queryFn: async () =>
      fetchData<PokemonCard>(POKEMON_CARDS_ENDPOINT).then((res) => res.data),
    staleTime: 1000 * 60 * 5,
  });
}
