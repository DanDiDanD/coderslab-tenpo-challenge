import { type ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from '../../hooks';

interface AuthGuardProps {
  redirectTo: string;
  inverse?: boolean;
  children: ReactNode;
}

export const AuthGuard = ({
  redirectTo,
  inverse = false,
  children,
}: AuthGuardProps) => {
  const location = useLocation();
  const { isAuth, isLoading } = useAuth(inverse);

  if (isLoading) return null;

  const shouldRender = inverse ? !isAuth : isAuth;

  return shouldRender ? (
    children
  ) : (
    <Navigate to={redirectTo} replace state={{ from: location }} />
  );
};
