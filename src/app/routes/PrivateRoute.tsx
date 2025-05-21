import { Navigate, Outlet } from 'react-router-dom';

import { isAuthenticated } from '../../utils/auth';

export const PrivateRoute = () => {
  const isAuth = isAuthenticated();

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};
