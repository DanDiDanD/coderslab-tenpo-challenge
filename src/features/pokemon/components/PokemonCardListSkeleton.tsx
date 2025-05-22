import { PAGE_SIZE } from '../../../config';

import { PokemonCardWrapper } from './PokemonCardWrapper';

export const PokemonCardListSkeleton = () => {
  return (
    <>
      {Array.from({ length: PAGE_SIZE }).map((_, idx) => (
        <PokemonCardWrapper
          key={idx}
          role="listitem"
          aria-hidden="true"
          className="bg-white rounded-lg shadow-md animate-pulse overflow-hidden"
        >
          <div className="flex flex-col bg-gray-200 justify-between w-full h-full p-2">
            <div className="w-full h-[50%] bg-gray-300 rounded mb-2" />
            <div className="w-2/3 h-3 bg-gray-400 rounded" />
            <div className="w-1/2 h-2 bg-gray-300 rounded" />
            <div className="w-5/6 h-2 bg-gray-400 rounded" />
            <div className="w-3/4 h-2 bg-gray-300 rounded" />
            <div className="w-4/5 h-2 bg-gray-400 rounded" />
            <div className="w-1/2 h-2 bg-gray-200 rounded" />
          </div>
        </PokemonCardWrapper>
      ))}
    </>
  );
};
