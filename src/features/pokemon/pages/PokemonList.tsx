import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from 'flowbite-react';

import { usePokemonCards } from '../api/query';

export const PokemonList = () => {
  const { data: pokemonList, isLoading, isError } = usePokemonCards();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong 🧨</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Pokémon Cards</h1>
      <Table hoverable striped>
        <TableHead>
          <TableRow>
            <TableHeadCell>Image</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>HP</TableHeadCell>
            <TableHeadCell>Types</TableHeadCell>
            <TableHeadCell>Rarity</TableHeadCell>
          </TableRow>
        </TableHead>

        <TableBody className="divide-y">
          {pokemonList?.data?.map((card) => (
            <TableRow key={card.id}>
              <TableCell>
                <img
                  src={card.images.small}
                  alt={card.name}
                  className="w-16 h-auto"
                />
              </TableCell>
              <TableCell>{card.name}</TableCell>
              <TableCell>{card.hp ?? 'N/A'}</TableCell>
              <TableCell>{card.types?.join(', ') ?? 'Unknown'}</TableCell>
              <TableCell>{card.rarity ?? 'N/A'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
