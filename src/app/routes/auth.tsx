import type { RouteObject } from 'react-router-dom';

import { Login } from '../../features/auth/pages/Login';

import { AuthGuard } from './AuthGuard';

export const authRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <AuthGuard redirectTo="/" inverse />,
    children: [{ index: true, element: <Login /> }],
  },
];
