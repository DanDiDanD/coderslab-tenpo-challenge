import { jwtDecode } from 'jwt-decode';

export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('accessToken');
  if (!token) return false;

  try {
    const decoded: { exp: number } = jwtDecode(token);
    return decoded.exp * 1000 > Date.now();
  } catch {
    return false;
  }
};
