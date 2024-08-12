import { useState } from "react";
import CircularProgress from "@mui/joy/CircularProgress";

export default function Occupation(props: { currentVisitors: string }) {
  const leftOffset = '36%' // 33% for double digit 36 for single

  return (
    <div className="flex flex-col mx-auto w-[300px] text-center">
      <h2 className="text-[1.75rem] font-bold py-4">Current Occupancy</h2>
      <div>
        <div className="relative w-[140px] h-[140px] mx-auto">
          <CircularProgress
            color="danger"
            determinate={true}
            value={20}
            variant="solid"
            thickness={14}
            sx={{
              "--CircularProgress-size": "140px",
            }}
          ></CircularProgress>
          <div className="absolute top-[34%] left-[33%] text-[2rem] font-semibold"> 
            20%
          </div>
        </div>
        <h2 className="text-[2rem] font-bold p-2 pb-4">
          {props.currentVisitors}
          <br />
          students
        </h2>
      </div>
    </div>
  );
}
