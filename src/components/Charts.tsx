import { LineChart } from "@mui/x-charts/LineChart";
import { useState, useEffect } from "react";

export default function Charts() {
  const DummyData = [
    { time: 4, occupancy: 25 },
    { time: 5, occupancy: 32 },
    { time: 6, occupancy: 56 },
    { time: 7, occupancy: 44 },
    { time: 8, occupancy: 15 },
    { time: 9, occupancy: 6 },
    { time: 10, occupancy: 3 },
    { time: 11, occupancy: 52 },
  ];

  const [day, setDay] = useState(true);

  return (
    <div className="justify-center text-center">
      <LineChart
        xAxis={[
          {
            dataKey: "time",
            min: 0,
            max: 24,
          },
        ]}
        series={[
          {
            dataKey: "occupancy",
            color: "red",
          },
        ]}
        width={350}
        height={300}
        dataset={DummyData}
        grid={{ vertical: true, horizontal: true }}
      ></LineChart>
    </div>
  );
}
