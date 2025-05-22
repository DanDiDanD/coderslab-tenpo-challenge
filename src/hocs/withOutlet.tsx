import type { ComponentType, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

export const withOutlet = (Layout: ComponentType<PropsWithChildren>) => {
  return () => (
    <Layout>
      <Outlet />
    </Layout>
  );
};
