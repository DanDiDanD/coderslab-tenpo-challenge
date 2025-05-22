import { lazy, memo, Suspense, useLayoutEffect, useState } from 'react';
import type { InViewHookResponse } from 'react-intersection-observer';
import type { InfiniteData } from '@tanstack/react-query';

import type { PokemonTCGCard } from '../types';
import type { ApiListResponse } from '../../../types';

const InfiniteScrollTrigger = lazy(
  () => import('../../../components/InfiniteScrollTrigger'),
);

import { PokemonCard } from './PokemonCard';
import { PokemonCardListSkeleton } from './PokemonCardListSkeleton';
import { PokemonCardWrapper } from './PokemonCardWrapper';

type PokemonListProps = {
  pages: InfiniteData<ApiListResponse<PokemonTCGCard>>['pages'];
  inViewRef: InViewHookResponse['ref'];
  isFetchingPage: boolean;
};

const MemoPokemonCardWrapper = memo(PokemonCardWrapper);
const MemoPokemonCard = memo(PokemonCard);

export const PokemonCardList = ({
  pages,
  isFetchingPage,
  inViewRef,
}: PokemonListProps) => {
  const [hasRenderedAllCards, setHasRenderedAllCards] = useState(false);

  useLayoutEffect(() => {
    setHasRenderedAllCards(!isFetchingPage);
  }, [isFetchingPage, pages]);

  return (
    <>
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 items-stretch"
        role="list"
        aria-busy={isFetchingPage}
      >
        {pages.map((page) =>
          page.data.map((card) => (
            <MemoPokemonCardWrapper key={card.id} role="listitem">
              <MemoPokemonCard card={card} />
            </MemoPokemonCardWrapper>
          )),
        )}

        {/* Hidden skelleton after rendering all cards */}
        {!hasRenderedAllCards && <PokemonCardListSkeleton />}
      </div>
      <Suspense fallback={null}>
        <InfiniteScrollTrigger
          isFetching={isFetchingPage}
          inViewRef={inViewRef}
        />
      </Suspense>
    </>
  );
};
