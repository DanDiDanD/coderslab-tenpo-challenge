import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <div className="min-h-screen flex md:items-center justify-center mt-4 py-8">
      <main
        id="main-content"
        className="bg-white rounded-2xl md:shadow-2xl md:border md:border-gray-200 w-full max-w-md px-6 py-8 mx-4 md:mx-auto"
      >
        <Outlet />
      </main>
    </div>
  );
};
