import { useQuery } from '@tanstack/react-query';

import type { PokemonTCGCard } from '../types';
import type { ApiListResponse } from '../../../types';

import { getPokemonCards } from './api';

export const usePokemonCards = () => {
  return useQuery<ApiListResponse<PokemonTCGCard>, Error>({
    queryKey: ['pokemon-cards'],
    queryFn: getPokemonCards,
    staleTime: 1000 * 60 * 5,
  });
};
