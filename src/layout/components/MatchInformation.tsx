export const MatchInformation = () => {
  return (
    <div>
      <div className="flex text-white divide-x">
        <div className=" flex-1 py-3 px-4 text-center bg-indigo-500 ">
          <p className="text-[18px]">#Match</p>
        </div>
        <div className=" flex-1 py-3 px-4 text-center bg-indigo-500 ">
          <p className="text-[18px]">Status</p>
        </div>
        <div className=" flex-1 py-3 px-4 text-center bg-indigo-500 ">
          <p className="text-[18px]">Result</p>
        </div>
      </div>
      <div className="flex divide-x">
        <div className=" flex-1 py-3 px-4 text-center ">
          <span className="inline-flex items-center py-0.5 px-2.5 text-sm font-medium text-pink-900 bg-pink-300 rounded-md">
            90
          </span>
        </div>
        <div className=" flex-1 py-3 px-4 text-center ">
          <span className="inline-flex items-center py-0.5 px-2.5 text-sm font-medium text-green-900 bg-green-300 rounded-md">
            Open
          </span>
        </div>
        <div className=" flex-1 py-3 px-4 text-center ">
          <span className="inline-flex items-center py-0.5 px-2.5 text-sm font-medium text-blue-900 bg-blue-300 rounded-md">
            Walla
          </span>
        </div>
      </div>
    </div>
  );
};
