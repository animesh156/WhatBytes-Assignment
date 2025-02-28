import { FiBarChart2 } from "react-icons/fi";
import { FiAward } from "react-icons/fi";
import { LuStickyNote } from "react-icons/lu";

export default function SideBar() {
  return (
    <ul className="flex flex-col text-black py-14 pr-8  font-semibold  items-center h-screen border  border-gray-200 border-t-0 w-52  gap-y-8">
      <li className="mr-4 flex items-center gap-x-3">
        <FiBarChart2 size={20}/>
        DashBoard
        </li>

        <li className="mr-8 flex items-center gap-x-3">
        <FiAward size={20}/>
        Skill Test
        </li>

        <li className="mr-7 flex items-center gap-x-3">
        <LuStickyNote size={20} />
       Intership
        </li>
 
    </ul>
  );
}
