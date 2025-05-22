import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <div className="min-h-screen flex md:items-center justify-center mt-4 py-8">
      <main id="main-content" className="w-full max-w-md bg-white mx-3">
        <Outlet />
      </main>
    </div>
  );
};
