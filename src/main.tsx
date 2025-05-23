import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeConfig } from 'flowbite-react';

import App from './app/App.tsx';
import { AppProvider } from './app/provider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeConfig dark={false} />
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
);
