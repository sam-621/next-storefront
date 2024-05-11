import { cn } from '@/ui/utils';

export const OptionCardSkeleton = () => {
  return (
    <div
      className={cn(
        'w-full h-24 rounded-lg bg-white p-4 text-[0.8125rem] leading-5 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 animate-pulse'
      )}
    >
      <div className="flex justify-between">
        <div className="font-medium bg-gray-200 rounded-full w-1/2 h-3" />
      </div>
      <div className="mt-3 flex flex-col gap-1">
        <div className="w-full bg-gray-200 h-2 rounded-full" />
        <div className="w-1/2 bg-gray-200 h-2 rounded-full" />
      </div>
    </div>
  );
};
