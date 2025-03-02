import { FiBarChart2 } from "react-icons/fi";
import { FiAward } from "react-icons/fi";
import { LuStickyNote } from "react-icons/lu";

export default function SideBar() {
  return (
    <ul className="flex flex-col text-black py-14 pr-8   font-semibold  items-center h-full border  border-gray-200 border-t-0 w-56  gap-y-8">
      <div>

      <li className="mr-4 flex items-center gap-x-3">
        <FiBarChart2 size={20}/>
        DashBoard
        </li>

      </div>
     
     <div className="bg-gray-100  w-52 -ml-8 border-r-gray-200 rounded-r-4xl p-3">

      
     <li className=" ml-9 p-2 flex items-center text-blue-700   gap-x-3">
        <FiAward size={20}/>
        Skill Test
        </li>

     </div>

     <div>

     <li className="mr-7 flex items-center gap-x-3">
        <LuStickyNote size={20} />
       Intership
        </li>

     </div>


       
 
    </ul>
  );
}
