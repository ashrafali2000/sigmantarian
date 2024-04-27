"use client";

import { useState } from "react";

const ScrollableDiv = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleNext = () => {
    setScrollPosition((prevPosition) => prevPosition + 50);
  };

  const handleBack = () => {
    setScrollPosition((prevPosition) => prevPosition - 50);
  };

  return (
    <div className="relative w-screen h-screen flex items-center justify-center">
      <div className="absolute left-[30%] w-1/2 h-full overflow-x-scroll bg-[#67288e88] border border-[#67288e]">
        <div
          className="w-10000 flex text-center gap-40 items-center  rounded-3xl  border border-[#67288e]"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          <ul className=" flex flex-col items-center py-5 gap-3">
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
          </ul>
          <ul className=" flex flex-col items-center py-5 gap-3">
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
          </ul>
          <ul className=" flex flex-col items-center py-5 gap-3">
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
          </ul>
          <ul className=" flex flex-col items-center py-5 gap-3">
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
          </ul>
          <ul className=" flex flex-col items-center py-5 gap-3">
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
          </ul>
          <ul className=" flex flex-col items-center py-5 gap-3">
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
          </ul>
          <ul className=" flex flex-col items-center py-5 gap-3">
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
          </ul>
          <ul className=" flex flex-col items-center py-5 gap-3">
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
          </ul>
          <ul className=" flex flex-col items-center py-5 gap-3">
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
          </ul>
          <ul className=" flex flex-col items-center py-5 gap-3">
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
          </ul>
          <ul className=" flex flex-col items-center py-5 gap-3">
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
            <img src="/arr.png" className="w-6 h-14" />
            <li className="border rounded-full pt-5 w-16 h-16">1</li>
          </ul>
        
        </div>
      </div>
      <button
        className="absolute top-1/2 left-[14%] transform -translate-y-1/2 px-4 py-2 bg-purple-950 text-white rounded"
        onClick={handleBack}
      >
        BACK
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-purple-950 text-white rounded"
        onClick={handleNext}
      >
        NEXT
      </button>
    </div>
  );
};

export default ScrollableDiv;

// import { useState } from 'react';

// const ScrollableDiv = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   const handleNext = () => {
//     setScrollPosition(prevPosition => prevPosition + 50);
//   };

//   const handleBack = () => {
//     setScrollPosition(prevPosition => prevPosition - 50);
//   };

//   return (
//     <div className="relative max-w-5xl  ">
//       <div className="w-[10000px] border px-10 rounded-3xl  transition-transform duration-500 flex gap-40 text-center overflow-scroll overflow-x-scroll" style={{ transform: `translateX(-${scrollPosition}px)` }}>

//         <ul className=" flex flex-col items-center py-5 gap-3">
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//         </ul>
//         <ul className="flex flex-col items-center py-5 gap-3">
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//         </ul>
//         <ul className="flex flex-col items-center py-5 gap-3">
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//         </ul>
//         <ul className=" flex flex-col items-center py-5 gap-3">
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//         </ul>
//         <ul className="flex flex-col items-center py-5 gap-3">
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//         </ul>
//         <ul className="flex flex-col items-center py-5 gap-3">
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//         </ul>
//         <ul className=" flex flex-col items-center py-5 gap-3">
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//         </ul>
//         <ul className="flex flex-col items-center py-5 gap-3">
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//         </ul>
//         <ul className="flex flex-col items-center py-5 gap-3">
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//         </ul>
//         <ul className=" flex flex-col items-center py-5 gap-3">
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//         </ul>
//         <ul className="flex flex-col items-center py-5 gap-3">
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//         </ul>
//         <ul className="flex flex-col items-center py-5 gap-3">
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//         </ul>
//         <ul className=" flex flex-col items-center py-5 gap-3">
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//         </ul>
//         <ul className="flex flex-col items-center py-5 gap-3">
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//         </ul>
//         <ul className="flex flex-col items-center py-5 gap-3">
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//         </ul>
//         <ul className=" flex flex-col items-center py-5 gap-3">
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//         </ul>
//         <ul className="flex flex-col items-center py-5 gap-3">
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//         </ul>
//         <ul className="flex flex-col items-center py-5 gap-3">
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//         </ul>
//         <ul className=" flex flex-col items-center py-5 gap-3">
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//         </ul>
//         <ul className="flex flex-col items-center py-5 gap-3">
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//         </ul>
//         <ul className="flex flex-col items-center py-5 gap-3">
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//         </ul>
//         <ul className=" flex flex-col items-center py-5 gap-3">
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//         </ul>
//         <ul className="flex flex-col items-center py-5 gap-3">
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//         </ul>
//         <ul className="flex flex-col items-center py-5 gap-3">
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//           <img src="/arr.png" className="w-6 h-14" />
//           <li className="border rounded-full pt-5 w-16 h-16">1</li>
//         </ul>

//       </div>
//       <button className="fixed top-[70%] left-[400px] bg-yellow-600 p-5" onClick={handleBack}>BACK</button>
//       <button className="fixed top-[70%] right-2 bg-yellow-600 p-5" onClick={handleNext}>NEXT</button>
//     </div>
//   );
// };

// export default ScrollableDiv;
