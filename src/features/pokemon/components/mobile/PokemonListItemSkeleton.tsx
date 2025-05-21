export const PokemonListItemSkeleton = () => (
  <div className="block md:hidden space-y-4">
    {Array.from({ length: 5 }).map((_, idx) => (
      <div
        key={idx}
        className="animate-pulse border border-gray-200 shadow-sm rounded-lg p-4"
      >
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="w-[150px] h-[200px] bg-gray-300 rounded" />
          <div className="w-full space-y-2">
            <div className="h-5 bg-gray-300 rounded w-2/3" />
            <div className="h-4 bg-gray-200 rounded w-1/3" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
            <div className="h-4 bg-gray-200 rounded w-1/3" />
          </div>
        </div>
      </div>
    ))}
  </div>
);
