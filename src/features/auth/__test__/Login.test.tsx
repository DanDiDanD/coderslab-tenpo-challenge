import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';

import { Login } from '../pages/Login';
import { renderWithProviders } from '../../../test/utils';

const PLACEHOLDER_EMAIL = /example@email.com/i;
const PLACEHOLDER_PASSWORD = /••••••••/i;
const BUTTON_SUBMIT = /Iniciar sesión/i;
const ERROR_MESSAGE = /El nombre de usuario y la contraseña son incorrectos./i;

describe('Login', () => {
  it('shows error message on invalid credentials', async () => {
    const { getPath } = renderWithProviders(<Login />);

    await userEvent.type(
      screen.getByPlaceholderText(PLACEHOLDER_EMAIL),
      'invalid@email.com',
    );
    await userEvent.type(
      screen.getByPlaceholderText(PLACEHOLDER_PASSWORD),
      'wrongpass',
    );
    await userEvent.click(screen.getByRole('button', { name: BUTTON_SUBMIT }));

    const alert = await screen.findByRole('alert');
    expect(alert).toHaveTextContent(ERROR_MESSAGE);
    expect(getPath()).toBe('/');
  });

  it('navigates to /dashboard on valid credentials', async () => {
    const { getPath } = renderWithProviders(<Login />);

    await userEvent.type(
      screen.getByPlaceholderText(PLACEHOLDER_EMAIL),
      'john@mail.com',
    );
    await userEvent.type(
      screen.getByPlaceholderText(PLACEHOLDER_PASSWORD),
      'changeme',
    );
    await userEvent.click(screen.getByRole('button', { name: BUTTON_SUBMIT }));

    await waitFor(() => expect(getPath()).toBe('/'));
  });
});
