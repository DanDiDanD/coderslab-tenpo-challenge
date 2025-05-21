import type { RouteObject } from 'react-router-dom';

import { PokemonList } from '../../features/pokemon/pages/PokemonList';

import { PrivateRoute } from './PrivateRoute';

export const pokemonRoutes: RouteObject[] = [
  {
    path: '/',
    element: <PrivateRoute />,
    children: [{ index: true, element: <PokemonList /> }],
  },
];
