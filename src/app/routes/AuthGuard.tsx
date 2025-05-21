import { Navigate, Outlet } from 'react-router-dom';

import { isAuthenticated } from '../../utils/auth';

interface AuthGuardProps {
  redirectTo: string;
  inverse?: boolean;
}

export const AuthGuard = ({ redirectTo, inverse = false }: AuthGuardProps) => {
  const isAuth = isAuthenticated();
  const shouldRender = inverse ? !isAuth : isAuth;

  return shouldRender ? <Outlet /> : <Navigate to={redirectTo} replace />;
};
