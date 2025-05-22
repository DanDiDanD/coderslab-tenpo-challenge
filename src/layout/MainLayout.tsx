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
import { NavButton } from '../components/NavButton';

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
        <Navbar fluid className="shadow-sm bg-zinc-900 text-white">
          <NavbarBrand as={Link} href="/">
            <Image
              src="https://tcg.pokemon.com/assets/img/global/logos/es-mx/tcg-logo.png"
              alt="El Juego de Cartas Coleccionables Pokémon"
              className="h-10"
            />
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
            <NavButton
              onClick={handleLogout}
              role="button"
              className="text-red-700 md:hover:text-red-500"
            >
              Cerrar sesión
            </NavButton>
          </NavbarCollapse>
        </Navbar>
      </header>

      <main id="main-content" className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};
