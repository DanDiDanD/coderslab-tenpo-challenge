import { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { hasAnyToken, isAuthenticated } from '../../utils/auth';

interface AuthGuardProps {
  redirectTo: string;
  inverse?: boolean;
}

export const AuthGuard = ({ redirectTo, inverse = false }: AuthGuardProps) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    (async () => {
      if (inverse) {
        setIsAuth(hasAnyToken());
      } else {
        const result = await isAuthenticated();
        setIsAuth(result);
      }
      setIsLoading(false);
    })();
  }, [inverse]);

  if (isLoading) return null;

  const shouldRender = inverse ? !isAuth : isAuth;

  return shouldRender ? (
    <Outlet />
  ) : (
    <Navigate to={redirectTo} replace state={{ from: location }} />
  );
};
