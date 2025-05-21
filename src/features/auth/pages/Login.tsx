import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useLogin } from '../api/queries';
import { ErrorMessage } from '../components';
import { loginSchema } from '../schemas/loginSchema';
import type { LoginFormValues } from '../types';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(loginSchema),
  });

  const { mutate, isPending, isError, error, isSuccess } = useLogin();

  const onSubmit = (data: LoginFormValues) => mutate(data);

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
        {errors.email && (
          <span style={styles.error}>{errors.email.message}</span>
        )}

        <input
          {...register('password')}
          style={styles.input}
          type="password"
          placeholder="••••••••"
        />
        {errors.password && (
          <span style={styles.error}>{errors.password.message}</span>
        )}

        <button style={styles.button} disabled={isPending}>
          {isPending ? 'Iniciando sesión…' : 'Ingresar'}
        </button>
      </form>

      <ErrorMessage isError={isError} error={error} />
      {isSuccess && <p style={styles.success}>Logged in ✔︎</p>}
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
