import { useInfiniteQuery } from '@tanstack/react-query';

import { PAGE_SIZE } from '../../../config';

import { getPokemonCards } from './api';

export const usePokemonCards = (hasFetchUntil?: boolean) => {
  return useInfiniteQuery({
    queryKey: ['pokemon-cards'],
    queryFn: ({ pageParam }) =>
      getPokemonCards(pageParam, hasFetchUntil ? 100 : PAGE_SIZE),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.page + 1,
  });
};
