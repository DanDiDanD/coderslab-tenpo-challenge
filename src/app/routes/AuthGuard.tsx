import { useEffect, useState, type ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { hasAnyToken, isAuthenticated } from '../../utils/auth';

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
    children
  ) : (
    <Navigate to={redirectTo} replace state={{ from: location }} />
  );
};
