import { useMutation } from '@tanstack/react-query';

import { login } from './api';

type LoginInput = { email: string; password: string };
type LoginResponse = { access_token: string; refresh_token: string };

export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginInput>({
    mutationKey: ['login'],
    mutationFn: (vars) => login(vars.email, vars.password),
  });
};
