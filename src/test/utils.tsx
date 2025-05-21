import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';

export function renderWithProviders(ui: React.ReactElement) {
  const client = new QueryClient();

  let currentPath = '';

  const LocationWatcher = () => {
    const { pathname } = useLocation();
    currentPath = pathname;
    return null;
  };

  render(
    <QueryClientProvider client={client}>
      <MemoryRouter>
        {ui} <LocationWatcher />
      </MemoryRouter>
    </QueryClientProvider>,
  );

  return {
    getPath: () => currentPath,
  };
}
