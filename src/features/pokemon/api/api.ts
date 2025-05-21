import { PAGE_SIZE } from '../../../config';
import { pokemonClient } from '../../../lib/apiClient';
import type { ApiListResponse } from '../../../types';
import type { PokemonTCGCard } from '../types';

import { POKEMON_CARDS_ENDPOINT } from './endpoints';

export const getPokemonCards = async (page = 1) => {
  const { data } = await pokemonClient.get<ApiListResponse<PokemonTCGCard>>(
    POKEMON_CARDS_ENDPOINT(PAGE_SIZE, page),
  );
  return data;
};
