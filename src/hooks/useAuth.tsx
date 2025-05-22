import { useEffect, useState } from 'react';

import { hasAnyToken, isAuthenticated } from '../utils/auth';

interface AuthState {
  isAuth: boolean;
  isLoading: boolean;
}

export const useAuth = (inverse = false): AuthState => {
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

  return { isAuth, isLoading };
};
