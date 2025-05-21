import { useMutation } from '@tanstack/react-query';

import type { LoginFormValues, LoginResponse } from '../types';

import { login } from './api';

export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginFormValues>({
    mutationKey: ['login'],
    mutationFn: ({ email, password }) => login({ email, password }),
  });
};
