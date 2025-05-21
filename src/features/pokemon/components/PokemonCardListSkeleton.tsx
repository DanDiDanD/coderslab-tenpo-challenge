export const PokemonCardListSkeleton = () => (
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
    {Array.from({ length: 12 }).map((_, idx) => (
      <div
        key={idx}
        className="animate-pulse w-full h-auto rounded-lg bg-gray-200 shadow-md p-2 flex flex-col items-center"
      >
        <div className="w-full aspect-[3/4] bg-gray-300 rounded mb-3" />
        <div className="w-2/3 h-4 bg-gray-300 rounded mb-2" />
        <div className="w-1/2 h-3 bg-gray-200 rounded" />
      </div>
    ))}
  </div>
);
