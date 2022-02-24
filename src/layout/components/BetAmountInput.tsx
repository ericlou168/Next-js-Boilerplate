import { CurrencyDollarIcon, BackspaceIcon } from '@heroicons/react/outline';

export const BetAmountInput = () => {
  return (
    <div className="flex ">
      <div className="flex relative focus-within:z-10 grow items-stretch">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <CurrencyDollarIcon
            className="w-7 h-7 text-slate-500"
            aria-hidden="true"
          />
        </div>
        <input
          type="number"
          name="amount"
          id="amount"
          className="block pl-11 w-full text-2xl placeholder:text-slate-500 dark:text-white dark:bg-slate-800 focus:outline-none lg:text-[26px]"
          placeholder="100"
        />
      </div>
      <button
        type="button"
        className="inline-flex relative items-center py-2 px-4 -ml-px space-x-2 text-2xl font-medium text-white bg-indigo-500 hover:bg-indigo-600 lg:text-[24px] "
      >
        <BackspaceIcon className="w-7 h-7 text-white" aria-hidden="true" />
        <span>Clear</span>
      </button>
    </div>
  );
};
