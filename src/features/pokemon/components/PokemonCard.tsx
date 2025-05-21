import { Image } from '../../../components';
import type { PokemonCardRarity, PokemonTCGCard } from '../types';

type Props = {
  card: PokemonTCGCard;
};

const rarityColor: Record<PokemonCardRarity | string, string> = {
  Common: 'gray-400',
  Uncommon: 'green-400',
  Rare: 'blue-400',
  'Rare Holo': 'blue-400',
  'Rare Secret': 'yellow-300',
  'Rare Ultra': 'purple-400',
  Legendary: 'yellow-500',
  'Amazing Rare': 'cyan-400',
  'Rare Shiny': 'emerald-400',
  'Rare Shiny GX': 'emerald-400',
  'Rare Rainbow': 'pink-400',
  'Rare Prism Star': 'indigo-400',
  default: 'neutral-400',
};

export const PokemonCard = ({ card }: Props) => {
  const shadowColor = rarityColor[card.rarity ?? ''] || rarityColor.default;

  const groupInteractionClassName = `group-hover:scale-105 group-focus:scale-105 group-hover:shadow-xl group-focus:shadow-xl group-hover:shadow-${shadowColor} group-focus:shadow-${shadowColor}`;

  return (
    <div className="text-center">
      <Image
        src={card.images.large}
        alt={card.name}
        className="w-full h-auto max-h-[80vh] object-contain mx-auto"
        preview={card.images.small}
        previewClassName={`w-full h-auto rounded-lg overflow-hidden transition-transform duration-300 ease-out ${groupInteractionClassName}`}
      />
    </div>
  );
};
