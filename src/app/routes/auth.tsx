import type { RouteObject } from 'react-router-dom';

import { Login } from '../../features/auth/pages/Login';
import { AuthLayout } from '../../layout';

import { AuthGuard } from './AuthGuard';

export const authRoutes: RouteObject[] = [
  {
    path: '/login',
    element: (
      <AuthGuard redirectTo="/" inverse>
        <AuthLayout />
      </AuthGuard>
    ),
    children: [{ index: true, element: <Login /> }],
  },
];
