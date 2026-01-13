const ActivityCardSkeleton = () => {
  return (
    <div className="relative flex flex-col sm:flex-row bg-neutral-900 rounded-xl border border-neutral-800 animate-pulse">
      <div className="flex-shrink-0 w-full aspect-square sm:w-64 sm:h-64 sm:-mt-4 sm:-ml-4 sm:rounded-xl rounded-t-xl rounded-b-none bg-neutral-800" />

      <div className="flex-1 p-6 min-h-[14rem] sm:min-h-[16rem]">
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="h-5 w-24 bg-neutral-800 rounded-full" />

            <div className="flex gap-4">
              <div className="h-4 w-32 bg-neutral-800 rounded" />
              <div className="h-4 w-20 bg-neutral-800 rounded" />
            </div>

            <div className="h-4 w-40 bg-neutral-800 rounded" />

            <div className="flex gap-4">
              <div className="h-4 w-16 bg-neutral-800 rounded" />
              <div className="h-4 w-24 bg-neutral-800 rounded" />
            </div>
          </div>

          <div className="pt-2">
            <div className="h-7 w-3/4 bg-neutral-800 rounded" />
          </div>

          <div className="space-y-2 pt-1">
            <div className="h-4 w-full bg-neutral-800 rounded" />
            <div className="h-4 w-11/12 bg-neutral-800 rounded" />
            <div className="h-4 w-4/6 bg-neutral-800 rounded" />
          </div>

          <div className="h-3 w-48 bg-neutral-800 rounded mt-2" />

          <div className="mt-5">
            <div className="h-10 w-32 bg-neutral-800 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCardSkeleton;
