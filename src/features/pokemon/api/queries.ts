import { useInfiniteQuery } from '@tanstack/react-query';

import { getPokemonCards } from './api';

export const usePokemonCards = () => {
  return useInfiniteQuery({
    queryKey: ['pokemon-cards'],
    queryFn: ({ pageParam }) => getPokemonCards(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.page + 1,
  });
};
