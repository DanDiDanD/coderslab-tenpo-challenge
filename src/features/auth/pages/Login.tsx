import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { useLogin } from '../api/queries';
import { ErrorMessage } from '../components';
import { loginSchema } from '../schemas/loginSchema';
import type { LoginFormValues } from '../types';
import { Button, Input } from '../../../components';

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<LoginFormValues>({ resolver: yupResolver(loginSchema) });

  const { mutate, isPending, isError, error } = useLogin();

  const onSubmit = (data: LoginFormValues) =>
    mutate(data, {
      onSuccess: () => navigate('/', { replace: true }),
    });

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-6">
        <h1 className="text-2xl font-semibold text-center">Iniciar sesión</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Correo"
            id="email"
            placeholder="example@email.com"
            {...register('email')}
            error={formErrors.email}
          />

          <Input
            label="Contraseña"
            id="password"
            type="password"
            placeholder="••••••••"
            {...register('password')}
            error={formErrors.password}
          />

          <Button
            type="submit"
            className="w-full"
            isLoading={isPending}
            loadingText="Iniciando sesión..."
          >
            Ingresar
          </Button>
        </form>

        <ErrorMessage isError={isError} error={error} />
      </div>
    </div>
  );
};
