import type { PropsWithChildren } from 'react';

import { withOutlet } from '../hocs';

export const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen flex md:items-center justify-center mt-4 py-8">
      <main
        id="main-content"
        className="bg-white rounded-2xl md:shadow-2xl md:border md:border-gray-200 w-full max-w-md px-6 py-8 mx-4 md:mx-auto"
      >
        {children}
      </main>
    </div>
  );
};

export const AuthLayoutOutlet = withOutlet(AuthLayout);
