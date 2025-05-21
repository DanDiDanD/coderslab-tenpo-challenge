import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from 'flowbite-react';

import type { PokemonCard } from '../../types';

type PokemonTableProps = {
  data: PokemonCard[];
};

export const PokemonTable = ({ data = [] }: PokemonTableProps) => (
  <div className="hidden md:block">
    <Table hoverable striped>
      <TableHead>
        <TableRow>
          <TableHeadCell>Imagen</TableHeadCell>
          <TableHeadCell>Nombre</TableHeadCell>
          <TableHeadCell>HP</TableHeadCell>
          <TableHeadCell>Tipos</TableHeadCell>
          <TableHeadCell>Rareza</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody className="divide-y">
        {data.map((card) => (
          <TableRow key={card.id}>
            <TableCell>
              <img src={card.images.small} alt={card.name} className="w-16" />
            </TableCell>
            <TableCell>{card.name}</TableCell>
            <TableCell>{card.hp ?? 'N/A'}</TableCell>
            <TableCell>{card.types?.join(', ') ?? 'Desconocido'}</TableCell>
            <TableCell>{card.rarity ?? 'N/A'}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);
