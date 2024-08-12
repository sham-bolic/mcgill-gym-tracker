import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex flex-col pt-3">
      <nav className="flex flex-row p-3 text-center justify-center items-end">
        <Image
          src="/mcgill-logo.png"
          alt="mcgill logo"
          width={60}
          height={70}
        />
        <h1 className="text-black font-bold text-[3rem] pl-6">Gym Tracker</h1>
      </nav>
      <hr className="mx-auto border border-gray-400 w-[22rem]"></hr>
    </div>
  );
}
