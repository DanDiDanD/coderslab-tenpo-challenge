import { pokemonClient } from '../../../lib/apiClient';
import type { ApiListResponse } from '../../../types';
import type { PokemonCard } from '../types';

import { POKEMON_CARDS_ENDPOINT } from './endpoints';

export const getPokemonCards = async () => {
  const { data } = await pokemonClient.get<ApiListResponse<PokemonCard>>(
    POKEMON_CARDS_ENDPOINT,
  );
  return data;
};
