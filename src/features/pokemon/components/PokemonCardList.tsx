import type { PokemonCard } from '../types';
import { Image } from '../../../components';

import { PokemonCardListSkeleton } from './PokemonCardListSkeleton';

type PokemonListProps = {
  data: PokemonCard[];
  isLoading?: boolean;
};

export const PokemonCardList = ({ data, isLoading }: PokemonListProps) => {
  if (isLoading) return <PokemonCardListSkeleton />;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
      {data.map((card) => (
        <div key={card.id} className="text-center">
          <Image
            preview={card.images.small}
            src={card.images.large}
            alt={card.name}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      ))}
    </div>
  );
};
