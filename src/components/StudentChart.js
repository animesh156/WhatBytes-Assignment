/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const data = [
  { percentile: 0, students: 1 },
  { percentile: 10, students: 2 },
  { percentile: 20, students: 4 },
  { percentile: 30, students: 6 },
  { percentile: 40, students: 10 },
  { percentile: 50, students: 20 },
  { percentile: 60, students: 15 },
  { percentile: 70, students: 10 },
  { percentile: 80, students: 5 },
  { percentile: 90, students: 4 },
  { percentile: 100, students: 2 },
];

export default function StudentChart({ percentile }) {
  console.log("StudentChart percentile:", percentile);

  return (
    <div className="p-4 lg:w-[556px] border text-black border-gray-300 mt-5 rounded-md mb-4">
      <div className="flex items-center">
        <div>
          <h2 className="text-neutral font-bold -mt-2 mb-3">
            Comparison Graph
          </h2>
          <p className="font-medium text-sm text-gray-700">
            <strong>{`You scored ${percentile}% percentile`}</strong>
            {`, which is ${percentile < 72 ? "lower" : "higher"} than`}
            <br />
            {
              "the average percentile of 72% of all the engineers who took the assignment."
            }
          </p>
        </div>

        <div className="bg-gray-100 border border-gray-300  rounded-4xl">
          <img src="./chart_logo.png" alt="" className="w-9" />
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          {/* Force numeric domain so the ReferenceLine will move */}
          <XAxis dataKey="percentile" type="number" domain={[0, 100]} />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="students"
            stroke="#8884d8"
            dot={{ r: 3 }}
            activeDot={{ r: 7 }}
          />

          {/* Solid line at the user percentile */}
          <ReferenceLine x={percentile} stroke="gray" label="your percentile" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
