"use client";
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine, Dot } from "recharts";

const data = [
  { percentile: 0, students: 1 },
  { percentile: 10, students: 2 },
  { percentile: 20, students: 4 },
  { percentile: 30, students: 6 }, // User's percentile
  { percentile: 40, students: 10 },
  { percentile: 50, students: 20 },
  { percentile: 60, students: 15 },
  { percentile: 70, students: 10 },
  { percentile: 80, students: 5 },
  { percentile: 90, students: 4 },
  { percentile: 100, students: 2 },
];

const userPercentile = 30; // Example user score

export default function StudentChart() {
  return (
    <div className="p-4 max-w-xl border border-gray-300 mt-5 rounded-md mb-4">
      <h2 className="text-lg font-bold -mt-2 mb-2">Comparison Graph</h2>
      <p className="font-normal">
        <strong>You scored {userPercentile}% percentile</strong>, which is lower than the <br></br>average percentile of 72% of all the engineers who took the assignment
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
          <XAxis dataKey="percentile" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="students" stroke="#8884d8" dot={{ r: 3 }} />
          {/* Highlight User's Percentile */}
          <ReferenceLine x={userPercentile} stroke="gray" strokeDasharray="3 3" label="your percentile" />
          <Dot cx={userPercentile * 3} cy={200} r={6} fill="purple" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

