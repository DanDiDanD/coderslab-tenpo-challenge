import type { PokemonCard } from '../../types';

type PokemonListProps = {
  data: PokemonCard[];
};

export const PokemonListItem = ({ data }: PokemonListProps) => (
  <div className="block md:hidden space-y-4">
    {data.map((card) => (
      <div
        key={card.id}
        className="flex gap-4 items-center border p-4 rounded shadow"
      >
        <img src={card.images.small} alt={card.name} className="w-20" />
        <div>
          <h2 className="font-bold text-lg">{card.name}</h2>
          <p>HP: {card.hp ?? 'N/A'}</p>
          <p>Tipo(s): {card.types?.join(', ') ?? 'Desconocido'}</p>
          <p>Rareza: {card.rarity ?? 'N/A'}</p>
        </div>
      </div>
    ))}
  </div>
);
