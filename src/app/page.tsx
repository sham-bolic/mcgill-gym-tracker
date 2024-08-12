"use client";
import Navbar from "@/components/Navbar";
import Occupation from "@/components/Occupation";
import Charts from "@/components/Charts";

export default function Home() {
  return (
    <main className="flex flex-col text-black">
      <Navbar />
      <Occupation currentVisitors={"30-40"}/>
      <hr className="mx-auto border border-gray-400 w-[22rem]"></hr>
      <Charts />
    </main>
  );
}
