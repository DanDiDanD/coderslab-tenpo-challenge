import { useQuery } from '@tanstack/react-query';

import type { PokemonCard } from '../types';
import type { ApiListResponse } from '../../../types';

import { getPokemonCards } from './api';

export function usePokemonCards() {
  return useQuery<ApiListResponse<PokemonCard>, Error>({
    queryKey: ['pokemon-cards'],
    queryFn: getPokemonCards,
    staleTime: 1000 * 60 * 5,
  });
}
