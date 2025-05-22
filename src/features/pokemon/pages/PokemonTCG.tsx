import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSearchParams } from 'react-router-dom';

import { usePokemonCards } from '../api/queries';
import { PokemonCardList } from '../components/PokemonCardList';

export const PokemonTCG = () => {
  /**
   * ⚠️ Parámetro especial de testing: `?fetchUntil=number`
   *
   * Este parámetro fue creado exclusivamente con fines de evaluación técnica
   * y NO debería usarse en producción.
   *
   * Se agrega este parámetro debido a la literalidad del requerimiento presente en el enunciado de la prueba técnica:
   * "Levantar una home, la cual se conecte con una API pública (a elección) y muestre una lista de 2000 elementos."
   *
   * Para facilitar un caso de testing al equipo revisor, se ha habilitado el parámetro `fetchUntil` en la URL,
   * que permite simular la carga inicial de un número específico de elementos.
   *
   * Ejemplo de uso:
   * http://localhost:3000/?fetchUntil=2000 — carga automáticamente 2000 cartas desde la API en grupos de 100.
   *
   * ❌ NO es posible cargar 2000 elementos de golpe ya que la API limita `pageSize` a 250.
   *
   * 🧪 Esta lógica fue agregada únicamente para fines de evaluación y testing.
   * 🚫 NO DEBERÍA mantenerse en producción y debe ser eliminada tras su revisión.
   */
  const [searchParams] = useSearchParams();
  const fetchUntil = Number(searchParams.get('fetchUntil')) || null;

  const {
    data: pokemonList,
    isError,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
  } = usePokemonCards(!!fetchUntil);
  const { ref, inView } = useInView();

  const isFetchingPage = isLoading || isFetchingNextPage;

  const loadedCount =
    pokemonList?.pages.reduce((acc, page) => acc + page.data.length, 0) || 0;

  useEffect(() => {
    if (fetchUntil && loadedCount < fetchUntil) {
      fetchNextPage();
    } else {
      if (inView) fetchNextPage();
    }
  }, [inView, fetchNextPage, fetchUntil, loadedCount]);

  if (isError) return <p>Algo salió mal 🧨</p>;

  return (
    <>
      <title>Pokemon Trading Card Game</title>
      <meta
        name="description"
        content="Página donde se muestra la lista oficinal de las cartas de Pokémon desde la primera generación hasta la fecha."
      />

      <section aria-labelledby="page-title" className="p-6">
        <h1 id="page-title" className="text-2xl font-bold mb-4 text-center">
          Pokemon Trading Card Game
        </h1>
      </section>
      <section aria-labelledby="page-content" className="pb-6">
        <span id="page-content" className="sr-only">
          Lista de cartas Pokémon
        </span>

        {fetchUntil && loadedCount < fetchUntil && (
          <p className="text-sm text-center text-gray-500 mb-2">
            (Testing) Precargando hasta {fetchUntil} cartas...
          </p>
        )}
        <PokemonCardList
          pages={pokemonList?.pages || []}
          inViewRef={ref}
          isFetchingPage={isFetchingPage}
        />
      </section>
    </>
  );
};
