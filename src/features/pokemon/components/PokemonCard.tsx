import { Image } from '../../../components';
import type { PokemonCardRarity, PokemonTCGCard } from '../types';

type Props = {
  card: PokemonTCGCard;
};

const rarityClasses: Record<PokemonCardRarity | string, string> = {
  Common: 'group-hover:shadow-gray-400',
  Uncommon: 'group-hover:shadow-green-400',
  Rare: 'group-hover:shadow-blue-400',
  'Rare Holo': 'group-hover:shadow-blue-400',
  'Rare Secret': 'group-hover:shadow-yellow-300',
  'Rare Ultra': 'group-hover:shadow-purple-400',
  Legendary: 'group-hover:shadow-yellow-500',
  'Amazing Rare': 'group-hover:shadow-cyan-400',
  'Rare Shiny': 'group-hover:shadow-emerald-400',
  'Rare Shiny GX': 'group-hover:shadow-emerald-400',
  'Rare Rainbow': 'group-hover:shadow-pink-400',
  'Rare Prism Star': 'group-hover:shadow-indigo-400',
  default: 'group-hover:shadow-neutral-400',
};

export const PokemonCard = ({ card }: Props) => {
  const shadowColor = rarityClasses[card.rarity ?? ''] || rarityClasses.default;

  return (
    <div className="text-center">
      <Image
        src={card.images.large}
        alt={card.name}
        className="w-full h-auto max-h-[80vh] object-contain mx-auto"
        preview={card.images.small}
        previewClassName={`w-full h-auto rounded-lg overflow-hidden transition-transform duration-300 ease-out group-hover:scale-105 shadow-md group-hover:shadow-xl ${shadowColor}`}
      />
    </div>
  );
};
