/* eslint-disable @next/next/no-img-element */

import { HiMiniTrophy } from "react-icons/hi2";

export default function QuickStatistics() {
  return (
    <div className="border mt-5 p-1.5 py-4 border-gray-300 max-w-xl">
      <h1 className="font-bold -mt-3 ml-4">Quick Statistics</h1>

      <div className="justify-around gap-x-3 mt-2 flex rounded-md  items-center  ">
        <div className="flex items-center gap-x-3 border-r border-gray-400 p-2">
          <div className="bg-gray-100 p-2 rounded-3xl">
           <img src="./trophy.svg" alt="trophy_svg" className="w-6"/>
          </div>

          <div className="flex flex-col">
            <p className="font-extrabold">1</p>
            <p>Your Rank</p>
          </div>
        </div>

        <div className="flex items-center  gap-x-3 border-r border-gray-400 p-2">
          <div className="bg-gray-100 p-2 rounded-3xl">
          <img src="./tick.svg" alt="tick_svg" className="w-6"/>
          </div>

          <div className="flex flex-col">
            <p className="font-extrabold">30%</p>
            <p>PERCENTILE</p>
          </div>
        </div>

        <div className="flex items-center  gap-x-3 p-2">
          <div className="bg-gray-100 p-2 rounded-3xl">
          <img src="./notepad.svg" alt="notepad_svg" className="w-6"/>
          </div>

          <div className="flex flex-col">
            <p className="font-extrabold">10/15</p>
            <p >CORRECT ANSWERS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
