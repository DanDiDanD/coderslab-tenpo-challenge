import type { PokemonTCGCard } from '../types';

import { PokemonCardListSkeleton } from './PokemonCardListSkeleton';
import { PokemonCard } from './PokemonCard';

type PokemonListProps = {
  data: PokemonTCGCard[];
  isLoading?: boolean;
};

export const PokemonCardList = ({ data, isLoading }: PokemonListProps) => {
  if (isLoading) return <PokemonCardListSkeleton />;
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
      {data.map((card) => (
        <PokemonCard key={card.id} card={card} />
      ))}
    </div>
  );
};
