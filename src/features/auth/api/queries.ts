import { useMutation } from '@tanstack/react-query';

import type { LoginInput, LoginResponse } from '../types';

import { login } from './api';

export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginInput>({
    mutationKey: ['login'],
    mutationFn: ({ email, password }) => login({ email, password }),
  });
};
