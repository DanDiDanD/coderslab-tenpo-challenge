import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { useLogin } from '../api/queries';
import { ErrorMessage } from '../components';
import { loginSchema } from '../schemas/loginSchema';
import type { LoginFormValues } from '../types';

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
    <div style={styles.container}>
      <h1 style={styles.title}>Login</h1>

      <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
        <input
          {...register('email')}
          style={styles.input}
          type="email"
          placeholder="you@example.com"
        />
        {formErrors.email && (
          <span style={styles.error}>{formErrors.email.message}</span>
        )}

        <input
          {...register('password')}
          style={styles.input}
          type="password"
          placeholder="••••••••"
        />
        {formErrors.password && (
          <span style={styles.error}>{formErrors.password.message}</span>
        )}

        <button style={styles.button} disabled={isPending}>
          {isPending ? 'Iniciando sesión…' : 'Ingresar'}
        </button>
      </form>

      <ErrorMessage isError={isError} error={error} />
    </div>
  );
};

const styles = {
  container: { maxWidth: 320, margin: '4rem auto', fontFamily: 'sans-serif' },
  title: { textAlign: 'center' as const },
  form: { display: 'flex', flexDirection: 'column' as const, gap: '1rem' },
  input: { padding: '.6rem .8rem', fontSize: '1rem' },
  button: {
    padding: '.6rem .8rem',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  error: { color: 'crimson' },
  success: { color: 'green' },
};
