export type PokemonCard = {
  id: string;
  name: string;
  images: {
    small: string;
    large: string;
  };
  hp: number;
  types: string[];
  rarity: string;
};
