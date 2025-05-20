import type { RouteObject } from 'react-router-dom';

import { authRoutes } from './auth';
import { pokemonRoutes } from './pokemon';

export const routes: RouteObject[] = [...authRoutes, ...pokemonRoutes];
