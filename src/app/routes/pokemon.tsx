import type { RouteObject } from 'react-router-dom';

import { PokemonList } from '../../features/pokemon/pages/PokemonList';

export const pokemonRoutes: RouteObject[] = [
  {
    path: '/',
    element: <PokemonList />,
  },
];
