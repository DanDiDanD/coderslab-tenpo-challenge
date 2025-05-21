import type { RouteObject } from 'react-router-dom';

import { Login } from '../../features/auth/pages/Login';

import { PublicWithRedirectRoute } from './PublicWithRedirectRoute';

export const authRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <PublicWithRedirectRoute />,
    children: [{ index: true, element: <Login /> }],
  },
];
