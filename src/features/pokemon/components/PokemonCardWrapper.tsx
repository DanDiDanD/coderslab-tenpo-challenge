import type { HTMLAttributes, PropsWithChildren } from 'react';

type PokemonCardWrapperProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement>
>;

export const PokemonCardWrapper = ({
  children,
  className = '',
  ...props
}: PokemonCardWrapperProps) => (
  <div className={`w-full aspect-[3/4] ${className}`} {...props}>
    {children}
  </div>
);
