import { Navigate, Outlet } from 'react-router-dom';

import { isAuthenticated } from '../../utils/auth';

export const PublicWithRedirectRoute = () => {
  const isAuth = isAuthenticated();

  return isAuth ? <Navigate to="/" replace /> : <Outlet />;
};
