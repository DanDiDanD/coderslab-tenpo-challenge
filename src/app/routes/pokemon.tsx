import type { RouteObject } from 'react-router-dom';

import { PokemonList } from '../../features/pokemon/pages/PokemonList';

import { AuthGuard } from './AuthGuard';

export const pokemonRoutes: RouteObject[] = [
  {
    path: '/',
    element: <AuthGuard redirectTo="/login" />,
    children: [{ index: true, element: <PokemonList /> }],
  },
];
