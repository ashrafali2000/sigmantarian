import Image from "next/image";

export default function Home() {
  return (
    <div className=" text-center items-center flex justify-center flex-col gap-10 py-20 bg-blue-950 my-24">
      <h1 className="text-3xl md:text-6xl font-black uppercase  bg-gradient-to-r from-stone-300 to-blue-800 bg-clip-text text-transparent">
        Sigmantarian
      </h1>
      <img
        src="logo.jpeg"
        className="w-60 h-60 border-4 border-wite rounded-full shadow-2xl shadow-gray-600"
      />
      <h1 className="text-xl nmd:text-3xl font-black shadow-lg  bg-white bg-clip-text text-transparent">
        Coming soon with updates.....
      </h1>
    </div>
  );
}
