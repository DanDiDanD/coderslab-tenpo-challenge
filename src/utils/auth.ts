export const isAuthenticated = (): boolean =>
  Boolean(localStorage.getItem('accessToken'));
