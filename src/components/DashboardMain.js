/* eslint-disable @next/next/no-img-element */
import QuickStatistics from "./QuickStatistics"
import StudentChart from "./StudentChart"


export default function DashboardMain() {
    return (
        <div className="flex flex-col">

<h1 className="mt-4 font-bold">Skill Test</h1>

<div className="border mt-8 border-gray-300 justify-around gap-x-2 flex rounded-md items-center p-1.5 py-5 max-w-xl">
  <img src="./html.png" alt="" className="w-18" />
  <div className="mt-1">

  <p className="font-bold">Hyper Text Markup Language</p>

   <p className="text-sm">Questions: 08 | duration: 15 mins | Submitted on 5 June 2021</p>

  </div>

  <button className="px-5 bg-blue-950 text-white text-xs py-2 rounded-md">Update</button>
  
</div>


  <QuickStatistics />

  <StudentChart />



        </div>
    )
}