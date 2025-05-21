import { PAGE_SIZE } from '../../../config';

export const PokemonCardListSkeleton = () => {
  return (
    <>
      {Array.from({ length: PAGE_SIZE }).map((_, idx) => (
        <div
          key={idx}
          className="animate-pulse w-full h-auto rounded-lg bg-gray-200 shadow-md p-2 flex flex-col items-center"
          role="listitem"
          aria-hidden="true"
        >
          <div className="w-full aspect-[3/4] bg-gray-300 rounded mb-3" />
          <div className="w-2/3 h-4 bg-gray-300 rounded mb-2" />
          <div className="w-1/2 h-3 bg-gray-200 rounded" />
        </div>
      ))}
    </>
  );
};
