import React from "react";

const WhatWeDo = () => {
  return (
    <div className="relative h-[640px] overflow-hidden bg-[#651385b6] text-white ">
      {/* <div className="absolute -right-10 top-20 custom-radial-gradient-White  opacity-60 z-0"></div> */}
      <div className="absolute left-0 -bottom-10 custom-radial-gradient-White  opacity-60 z-0"></div>
      {/* <div className="absolute right-5 top-5 custom-radial-gradient-White  opacity-60 z-0"></div> */}
      {/* <div className="absolute right-20 -bottom-20 custom-radial-gradient-White  opacity-60 z-0"></div> */}

      <img
        src="./0007-removebg-preview.png"
        alt=""
        className="absolute top-0 w-36 md:-right-10 md:w-60 md:-top-10 animate-spin-slow"
      />
      <img
        src="./0022-removebg-preview.png"
        alt=""
        className="absolute w-40 -bottom-5 -right-5 md:-right-10 md:w-60 md:-bottom-10"
      />

      <h1 className="text-5xl lg:text-7xl font-bold absolute top-20 md:top-32 left-5 md:left-20">
        What we do
      </h1>
      <ul className="absolute top-40 md:top-48  lg:top-60 text-xl lg:text-3xl list-outside list-disc left-5 md:left-20  w-[500px] lg:w-[800px] p-3 leading-relaxed">
        <li>We make products for human-driven analysis of real-world data</li>
        <li>
          We build our company around mission-driven engineering for our user to
          rich there daily requirement
        </li>
        <li>
          We design technology to help institutions protect Financial liberty of
          every Individua
        </li>
      </ul>
    </div>
  );
};

export default WhatWeDo;
