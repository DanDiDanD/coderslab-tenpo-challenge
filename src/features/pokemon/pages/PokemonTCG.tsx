import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { usePokemonCards } from '../api/queries';
import { PokemonCardList } from '../components/PokemonCardList';

export const PokemonTCG = () => {
  const {
    data: pokemonList,
    isError,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
  } = usePokemonCards();
  const { ref, inView } = useInView();

  const isFetchingPage = isLoading || isFetchingNextPage;

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (isError) return <p>Algo salió mal 🧨</p>;

  return (
    <>
      <title>Pokemon Trading Card Game</title>
      <meta
        name="description"
        content="Página donde se muestra la lista oficinal de las cartas de Pokémon desde la primera generación hasta la fecha."
      />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Pokemon Trading Card Game
        </h1>
        <PokemonCardList
          pages={pokemonList?.pages || []}
          inViewRef={ref}
          isFetchingPage={isFetchingPage}
        />
      </div>
    </>
  );
};
