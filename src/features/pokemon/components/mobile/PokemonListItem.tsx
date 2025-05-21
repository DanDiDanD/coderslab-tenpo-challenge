import { Card } from 'flowbite-react';

import type { PokemonCard } from '../../types';
import { Image } from '../../../../components';

import { PokemonListItemSkeleton } from './PokemonListItemSkeleton';

type PokemonListProps = {
  data: PokemonCard[];
  isLoading?: boolean;
};

export const PokemonListItem = ({ data, isLoading }: PokemonListProps) => {
  if (isLoading) return <PokemonListItemSkeleton />;
  return (
    <div className="block md:hidden space-y-4">
      {data.map((card) => (
        <Card>
          <div
            key={card.id}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Image
              preview={card.images.small}
              src={card.images.large}
              alt={card.name}
            />
            <div>
              <h2 className="font-bold text-lg">{card.name}</h2>
              <p>HP: {card.hp ?? 'N/A'}</p>
              <p>Tipo(s): {card.types?.join(', ') ?? 'Desconocido'}</p>
              <p>Rareza: {card.rarity ?? 'N/A'}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
