import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
      <title>Página no encontrada.</title>
      <meta
        name="description"
        content="La página que estás buscando no existe o fue movida. Vuelve al inicio para seguir navegando en la aplicación de cartas Pokémon."
      />
      <main
        className="flex flex-col items-center justify-center px-4 text-center min-h-[80vh] max-w-xl mx-auto"
        aria-label="Página de error 404: no encontrada"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Página no encontrada.
        </h1>

        <p className="text-xl text-gray-600">
          Lo sentimos, pero la página que buscas o está aquí.
        </p>

        <div className="max-w-[240px] w-full">
          <img
            src="/assets/psyduck.webp"
            alt="Psyduck confundido"
            className="w-full object-contain"
          />
        </div>

        <Link
          to="/"
          className="text-blue-500 hover:text-blue-700 hover:underline font-bold transition-colors"
        >
          Volver al inicio
        </Link>
      </main>
    </>
  );
};
