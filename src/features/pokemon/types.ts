export type PokemonCardRarity =
  | 'Amazing Rare'
  | 'Common'
  | 'LEGEND'
  | 'Promo'
  | 'Rare'
  | 'Rare ACE'
  | 'Rare BREAK'
  | 'Rare Holo'
  | 'Rare Holo EX'
  | 'Rare Holo GX'
  | 'Rare Holo LV.X'
  | 'Rare Holo Star'
  | 'Rare Holo V'
  | 'Rare Holo VMAX'
  | 'Rare Prime'
  | 'Rare Prism Star'
  | 'Rare Rainbow'
  | 'Rare Secret'
  | 'Rare Shining'
  | 'Rare Shiny'
  | 'Rare Shiny GX'
  | 'Rare Ultra'
  | 'Uncommon';

export type PokemonCardSuperType = 'Energy' | 'Pokémon' | 'Trainer';

export type PokemonCardSubtype =
  | 'BREAK'
  | 'Baby'
  | 'Basic'
  | 'EX'
  | 'GX'
  | 'Goldenrod Game Corner'
  | 'Item'
  | 'LEGEND'
  | 'Level-Up'
  | 'MEGA'
  | 'Pokémon Tool'
  | 'Pokémon Tool F'
  | 'Rapid Strike'
  | 'Restored'
  | "Rocket's Secret Machine"
  | 'Single Strike'
  | 'Special'
  | 'Stadium'
  | 'Stage 1'
  | 'Stage 2'
  | 'Supporter'
  | 'TAG TEAM'
  | 'Technical Machine'
  | 'V'
  | 'VMAX';

export type PokemonCardType =
  | 'Colorless'
  | 'Darkness'
  | 'Dragon'
  | 'Fairy'
  | 'Fighting'
  | 'Fire'
  | 'Grass'
  | 'Lightning'
  | 'Metal'
  | 'Psychic'
  | 'Water';

export type PokemonCard = {
  id: string;
  name: string;
  images: {
    small: string;
    large: string;
  };
  hp: number;
  types: PokemonCardType[];
  subtypes: PokemonCardSubtype[];
  supertype: PokemonCardSuperType;
  rarity: PokemonCardRarity;
};
