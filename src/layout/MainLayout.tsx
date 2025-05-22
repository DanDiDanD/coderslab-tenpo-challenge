import { Link, Outlet, useNavigate } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
} from 'flowbite-react';

import { Image } from '../components';
import { clearTokens } from '../utils/auth';
import { NavButton } from '../components/NavButton';

export const MainLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearTokens();
    navigate('/login', { replace: true });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 overflow-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-black p-2 z-50"
      >
        Regresar a la página principal
      </a>

      <header className="bg-zinc-900">
        <div className="container mx-auto px-4">
          <Navbar fluid className="shadow-sm bg-transparent text-white w-full">
            <NavbarBrand as={Link} href="/">
              <Image
                src="https://tcg.pokemon.com/assets/img/global/logos/es-mx/tcg-logo.png"
                alt="El Juego de Cartas Coleccionables Pokémon"
                className="h-10"
              />
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
              <NavButton
                onClick={handleLogout}
                role="button"
                className="text-red-700 md:hover:text-red-500"
              >
                Cerrar sesión
              </NavButton>
            </NavbarCollapse>
          </Navbar>
        </div>
      </header>

      <main id="main-content" className="flex-1 container mx-auto px-4">
        <Outlet />
      </main>
    </div>
  );
};
