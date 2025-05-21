import type { RouteObject } from 'react-router-dom';

import { PokemonCardList } from '../../features/pokemon/pages/PokemonCardList';

import { AuthGuard } from './AuthGuard';

export const pokemonRoutes: RouteObject[] = [
  {
    path: '/',
    element: <AuthGuard redirectTo="/login" />,
    children: [{ index: true, element: <PokemonCardList /> }],
  },
];
