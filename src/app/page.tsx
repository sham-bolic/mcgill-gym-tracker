"use client";
import Navbar from "@/components/Navbar";
import Occupancy from "@/components/Occupancy";
import Charts from "@/components/Charts";

export default function Home() {
  return (
    <main className="flex flex-col text-black">
      <Navbar />
      <Occupancy currentVisitors={120}/>
      <hr className="mx-auto border border-gray-400 w-[22rem]"></hr>
      <Charts />
    </main>
  );
}
