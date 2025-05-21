import { usePokemonCards } from '../api/queries';
import { PokemonListItem } from '../components/mobile/PokemonListItem';
import { PokemonTable } from '../components/desktop/PokemonTable';
import { useMobile } from '../../../hooks';

export const PokemonCardList = () => {
  const { data: pokemonList, isLoading, isError } = usePokemonCards();
  const isMobile = useMobile();

  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Algo salió mal 🧨</p>;

  return (
    <>
      <title>Cartas Pokemon</title>
      <meta
        name="description"
        content="Página donde se muestra la lista de las cartas de Pokémon desde la primera generación hasta la fecha."
      />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Cartas Pokemon</h1>
        <PokemonListItem data={pokemonList?.data || []} />
        {isMobile ? (
          <PokemonListItem data={pokemonList?.data || []} />
        ) : (
          <PokemonTable data={pokemonList?.data || []} />
        )}
      </div>
    </>
  );
};
