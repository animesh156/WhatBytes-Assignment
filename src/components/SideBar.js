import { FiBarChart2 } from "react-icons/fi";
import { FiAward } from "react-icons/fi";
import { LuStickyNote } from "react-icons/lu";

export default function SideBar() {
  return (
    <ul className="flex flex-col text-black py-14 pr-8   font-semibold  items-center h-full border  border-gray-200 border-t-0 xl:w-56 md:w-36  gap-y-8">
      <div>

      <li className="mr-4 md:mr-0 flex items-center gap-x-3">
        <FiBarChart2 size={20}/>
       <p className="hidden xl:block">DashBoard</p> 
        </li>

      </div>
     
     <div className="bg-gray-100  xl:w-52 w-40 -ml-8 border-r-gray-200 rounded-r-4xl p-3">

      
     <li className="xl:ml-11 ml-16 p-2 xl:flex xl:items-center text-blue-700   xl:gap-x-3">
        <FiAward size={20}/>
        <p className="hidden xl:block">Skill Test</p>
        </li>

     </div>

     <div>

     <li className="xl:mr-7 flex items-center gap-x-3">
        <LuStickyNote size={20} />
       <p className="hidden xl:block">Intership</p>
        </li>

     </div>


       
 
    </ul>
  );
}
