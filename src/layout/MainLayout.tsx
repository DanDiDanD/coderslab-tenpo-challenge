import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  NavbarLink,
} from 'flowbite-react';

import { Image } from '../components';
import { clearTokens } from '../utils/auth';

export const MainLayout = () => {
  const location = useLocation();
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

      <header>
        <Navbar fluid rounded className="shadow-sm">
          <NavbarBrand as={Link} href="/">
            <Image
              src="https://tcg.pokemon.com/assets/img/global/logos/es-mx/tcg-logo.png"
              alt="El Juego de Cartas Coleccionables Pokémon"
              className="mr-3 h-6 sm:h-9"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Pokémon App
            </span>
          </NavbarBrand>
          <NavbarToggle />
          <NavbarCollapse>
            <NavbarLink
              as={Link}
              href="/"
              aria-current={location.pathname === '/' ? 'page' : undefined}
              active={location.pathname === '/'}
            >
              PokeCartas
            </NavbarLink>
            <NavbarLink
              as="button"
              role="button"
              onClick={handleLogout}
              color="red"
              className="text-red-600 hover:underline font-medium"
            >
              Cerrar sesión
            </NavbarLink>
          </NavbarCollapse>
        </Navbar>
      </header>

      <main id="main-content" className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};
