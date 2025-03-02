/* eslint-disable @next/next/no-img-element */

import { HiMiniTrophy } from "react-icons/hi2";

export default function QuickStatistics({rank, percentile, score}) {
 console.log(rank)

  return (
    <div className="border mt-4 text-black p-1.5 py-4 rounded-md border-gray-300 lg:w-[556px]">
      <h1 className="font-bold -mt-3 ml-4">Quick Statistics</h1>

      <div className="justify-around gap-x-3 mt-2 flex rounded-md  items-center  ">
        <div className="flex items-center gap-x-3 border-r border-gray-400 p-2">
          <div className="bg-gray-100 p-2 rounded-3xl">
           <img src="./trophy.svg" alt="trophy_svg" className="w-6"/>
          </div>

          <div className="flex flex-col">
            <p className="font-extrabold">{rank}</p>
            <p className="font-normal text-xs text-gray-600">YOUR RANK</p>
          </div>
        </div>

        <div className="flex items-center  gap-x-3 border-r border-gray-400 p-2">
          <div className="bg-gray-100 p-2 rounded-3xl">
          <img src="./tick.svg" alt="tick_svg" className="w-6"/>
          </div>

          <div className="flex flex-col">
            <p className="font-extrabold">{percentile}%</p>
            <p className="text-xs text-gray-600">PERCENTILE</p>
          </div>
        </div>

        <div className="flex items-center  gap-x-3 p-2">
          <div className="bg-gray-100 p-2 rounded-3xl">
          <img src="./notepad.svg" alt="notepad_svg" className="w-6"/>
          </div>

          <div className="flex flex-col">
            <p className="font-extrabold">{score}/15</p>
            <p className="text-xs text-gray-600">CORRECT ANSWERS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
