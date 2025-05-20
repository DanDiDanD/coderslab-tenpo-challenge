import { useState } from 'react';

import { useLogin } from '../api/query';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mutate, isPending, isError, error, isSuccess } = useLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ email, password });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Login</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          style={styles.input}
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button style={styles.button} disabled={isPending}>
          {isPending ? 'Signing in…' : 'Login'}
        </button>
      </form>

      {isError && <p style={styles.error}>{error.message}</p>}
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
