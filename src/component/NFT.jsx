import React from "react";

const NFT = () => {
  return (
    <div className="bg-[#651385b6]  h-[554px] lg:h-[738px] xl:h-[740px]  text-white  relative overflow-hidden">
      <h1 className="hhh font-bold absolute text-4xl top-[10%] left-[5%] md:top-[12%] md:left-[10%] md:text-5xl  lg:text-6xl xl:text-7xl xl:top-20 xl:left-40 xl:w-[600px]">
        NFT ( Non-Fungible token)
      </h1>
      <img
        src="./nft.jpg"
        alt=""
        className=" rounded-3xl absolute top-[28%] w-[80%] right-[2%] md:w-[60%] lg:w-[50%] lg:top-[34%]  xl:top-[10%] xl:w-[650px] xl:h-[450px] xl:right-0"
      />
      <h2 className="hhhh font-semibold absolute top-[70%] text-xl left-[5%] md:top-[40%] md:w-[200px] md:left-[10%] md:text-3xl  lg:text-5xl   lg:top-[33%]   lg:w-[370px] lg:leading-normal       xl:text-5xl xl:top-[70%] xl:left-40 xl:w-[550px]">
        This is feature to earn more and and more in our ecosystem.
      </h2>
      <h2 className="hhh text-md font-semibold absolute top-[85%] w-[210px] right-[5%] md:top-[87%] md:w-[400px] md:right-[8%] lg:text-3xl lg:top-[82%]  xl:right-[14%] xl:top-[75%]  ">
        Every user and Diamond package holder will get{" "}
        <span className="text-red-700"> NFT.</span>{" "}
      </h2>
    </div>
  );
};

export default NFT;
