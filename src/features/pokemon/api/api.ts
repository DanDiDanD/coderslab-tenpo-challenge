import { pokemonClient } from '../../../lib/apiClient';
import type { ApiListResponse } from '../../../types';
import type { PokemonTCGCard } from '../types';

import { POKEMON_CARDS_ENDPOINT } from './endpoints';

export const getPokemonCards = async (page = 1, pageSize: number) => {
  const { data } = await pokemonClient.get<ApiListResponse<PokemonTCGCard>>(
    POKEMON_CARDS_ENDPOINT(pageSize, page),
  );
  return data;
};
