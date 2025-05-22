import { type RouteObject } from 'react-router-dom';

import { authRoutes } from './auth';
import { pokemonRoutes } from './pokemon';
import { NotFound } from './NotFound';

export const routes: RouteObject[] = [
  ...authRoutes,
  ...pokemonRoutes,
  {
    path: '*',
    element: <NotFound />,
  },
];
