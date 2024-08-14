import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

export default function Charts() {
  let DummyData: any[]
  let DummyData2: any[]

  DummyData = [["Time", "Occupancy"]];

  DummyData2 = [["Time", "Occupancy"]];

  for (let i = 6.5; i < 23; i += 0.25) {
    DummyData.push([i, Math.random()]);
    DummyData2.push([i, Math.random()]);
  }

  console.log(`DummyData: ${DummyData}, DummyData2: ${DummyData2}`);

  const [weeklyView, setWeeklyView] = useState(false);

  const options = {
    series: [{ color: "red" }],
    legend: "none",
    vAxis: {
      format: "percent",
      textStyle: { fontName: "EB-Garamond", fontSize: 14 },
      maxValue: 1,
      minValue: 0,
      gridlines: { color: "#CCC", minSpacing: 25 },
    },
    hAxis: {
      title: "Time",
      textStyle: { fontName: "EB-Garamond", fontSize: 10 },
      minValue: 6.5,
      maxValue: 23,
      gridlines: { minSpacing: 20 },
      ticks: [
        { v: 6.5, f: "6:30" },
        { v: 9, f: "9:00" },
        { v: 11.5, f: "11:30" },
        { v: 14, f: "14:00" },
        { v: 16.5, f: "16:30" },
        { v: 19, f: "19:00" },
        { v: 21.5, f: "21:30" },
      ],
    },
  };

  useEffect(() => {
    const dayButton = document.getElementById("weeklyButton");
    const weekButton = document.getElementById("dailyButton");
    if (weeklyView) {
      weekButton!.style.backgroundColor = "";
      dayButton!.style.backgroundColor = "#FE464DB0";
    } else {
      weekButton!.style.backgroundColor = "#FE464DB0";
      dayButton!.style.backgroundColor = "";
    }
  }),
    [weeklyView];

  return (
    <div className="text-center mx-auto py-4">
      <div>
        <button
          className="border border-red-600 rounded-l-lg px-2 font-semibold hover:bg-[#FFB0BC]"
          onClick={() => setWeeklyView(false)}
          id="dailyButton"
        >
          Daily Trends
        </button>
        <button
          className="border border-red-600 rounded-r-lg px-2 font-semibold hover:bg-[#FFB0BC]"
          onClick={() => setWeeklyView(true)}
          id="weeklyButton"
        >
          Weekly Trends
        </button>
      </div>
      {!weeklyView && (
        <Chart
          chartType="LineChart"
          width="350px"
          height="200px"
          data={DummyData}
          options={options}
        />
      )}
      {weeklyView && (
        <div>
          <Chart
            chartType="LineChart"
            width="350px"
            height="200px"
            data={DummyData2}
            options={options}
          />

          <div className="bg-[#FE7F84] rounded-xl font-semibold w-[77%] mx-auto">
            <button className="px-[0.4rem] rounded-xl hover:bg-[#F24149]">Mon</button>
            <button className="px-[0.4rem] rounded-xl hover:bg-[#F24149]">Tue</button>
            <button className="px-[0.4rem] rounded-xl hover:bg-[#F24149]">Wed</button>
            <button className="px-[0.4rem] rounded-xl hover:bg-[#F24149]">Thu</button>
            <button className="px-[0.4rem] rounded-xl hover:bg-[#F24149]">Fri</button>
            <button className="px-[0.4rem] rounded-xl hover:bg-[#F24149]">Sat</button>
            <button className="px-[0.4rem] rounded-xl hover:bg-[#F24149]">Sun</button>
          </div>
        </div>
      )}
    </div>
  );
}
