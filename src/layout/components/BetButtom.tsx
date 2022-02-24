import { PlusIcon } from '@heroicons/react/outline';

export const BetButton = () => {
  return (
    <div className="flex">
      <div className="flex-1 border-r border-b dark:border-white">
        <div className="py-3 px-4 text-center text-white bg-red-600	 ">
          <p className="text-[36px]">Meron</p>
        </div>
        <div className="p-3 text-center dark:text-white">
          <p className="text-[64px]">0.92</p>
          <button
            type="button"
            className="inline-flex justify-center items-center py-3 px-6 w-full text-base font-medium text-center text-white bg-red-600 hover:bg-red-400 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm"
          >
            <PlusIcon className="mr-3 -ml-1 w-5 h-5" aria-hidden="true" />
            Bet Meron
          </button>
        </div>
      </div>
      <div className="flex-1 border-b dark:border-white">
        <div className="py-3 px-4 text-center text-white bg-blue-600  ">
          <p className="text-[36px]">Walla</p>
        </div>
        <div className="p-3 text-center  dark:text-white">
          <p className="text-[64px]">0.92</p>
          <button
            type="button"
            className="inline-flex justify-center items-center py-3 px-6 w-full text-base font-medium text-center text-white bg-blue-600 hover:bg-blue-400 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm"
          >
            <PlusIcon className="mr-3 -ml-1 w-5 h-5" aria-hidden="true" />
            Bet Walla
          </button>
        </div>
      </div>
    </div>
  );
};
