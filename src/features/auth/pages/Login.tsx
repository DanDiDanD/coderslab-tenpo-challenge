import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { useLogin } from '../api/queries';
import { ErrorMessage } from '../components';
import { loginSchema } from '../schemas/loginSchema';
import type { LoginFormValues } from '../types';
import { Button, Image, Input } from '../../../components';

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
    <>
      <title>Iniciar sesión</title>
      <meta
        name="description"
        content="Página de inicio de sesión para acceder a la aplicación de Pokémon Cards con autenticación segura."
      />

      <div className="flex justify-center mb-5">
        <Image
          src="/assets/pokemon-logo.svg"
          alt="El Juego de Cartas Coleccionables Pokémon"
          className="h-25 text-center"
        />
      </div>

      <h1 className="text-2xl font-semibold text-center mb-3">
        Inicia sesión en tu cuenta del Club de Entrenadores Pokémon
      </h1>

      <ErrorMessage isError={isError} error={error} />

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          id="email"
          placeholder="example@email.com"
          {...register('email')}
          error={formErrors.email}
        />

        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          {...register('password')}
          error={formErrors.password}
        />

        <Button
          type="submit"
          className="w-full hover:bg-primary/90 text-white rounded py-2 font-semibold"
          isLoading={isPending}
          loadingText="Iniciando sesión..."
        >
          Iniciar sesión
        </Button>
      </form>
    </>
  );
};
