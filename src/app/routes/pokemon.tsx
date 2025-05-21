import type { RouteObject } from 'react-router-dom';

import { PokemonTCG } from '../../features/pokemon/pages/PokemonTCG';

import { AuthGuard } from './AuthGuard';

export const pokemonRoutes: RouteObject[] = [
  {
    path: '/',
    element: <AuthGuard redirectTo="/login" />,
    children: [{ index: true, element: <PokemonTCG /> }],
  },
];
