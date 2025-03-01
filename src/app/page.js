import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import DashboardMain from "@/components/DashboardMain";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="grid grid-cols-12 gap-x-4 h-screen">
        <div className="col-span-2 ">
          <SideBar />
        </div>

        <div className="col-span-10">
          <DashboardMain />
        </div>
      </div>
    </div>
  );
}
