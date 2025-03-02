"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import DashboardMain from "@/components/DashboardMain";
import { useState } from "react";

export default function Home() {
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [score, setScore] = useState(10);
  return (
    <div>
      <Header />

      <div className="grid grid-cols-12 md:gap-x-3  h-screen">
        <div className="md:col-span-2 hidden md:block">
          <SideBar />
        </div>

        <div className="md:col-span-10 md:ml-8 col-span-12">
          <DashboardMain
            score={score}
            setScore={setScore}
            rank={rank}
            setRank={setRank}
            percentile={percentile}
            setPercentile={setPercentile}
          />
        </div>
      </div>
    </div>
  );
}
