import type { RouteObject } from 'react-router-dom';

import { Login } from '../../features/auth/pages/Login';

export const authRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
];
