import React from "react";

const PaymentMethod = () => {
  return (
    <div className="relative h-[554px] lg:h-[730px] xl:h-[640px]  overflow-hidden bg-[#65138586] text-white">
      {/* <div className="absolute -left-20 -top-20 custom-radial-gradient-Whitepurple opacity-60  z-0"></div>
      <div className="absolute left-72 -bottom-20 custom-radial-gradient-Whitepurple opacity-60  z-0"></div>
      <div className="absolute right-10 top-0 custom-radial-gradient-Whitepurple opacity-60  z-0"></div> */}
      <h1 className=" font-bold font-sans absolute text-3xl top-[10%] left-[10%] md:text-5xl md:top-[17%] lg:left-[15%] lg:top-[12%] lg:text-6xl  xl:text-7xl">
        Payment Method
      </h1>

      <h1 className="font-bold font-sans absolute top-[18%] left-[15%] text-3xl  md:top-[30%] md:left-[19%] md:text-4xl lg:top-[26%] lg:left-[19%] lg:text-5xl text-[#63297a]">
        Wallet
      </h1>

      <div className=" font-semibold absolute text-xl top-[27%] left-[20%] w-3/5 md:text-xl md:top-[39%] md:left-[20%] md:w-[30%]  lg:text-3xl">
        <ul className="flex justify-between">
          <li className="list-disc">MetaMask.</li>
          <li>
            <img src="./metamask2.png" alt="" srcset="" className="w-10" />
          </li>
        </ul>
        <ul className="flex justify-between">
          <li className="list-disc">Trust Wallet.</li>
          <li>
            <img
              src="./Screenshot_2024-04-18_222419-removebg-preview.png"
              alt=""
              className="w-10"
            />
          </li>
        </ul>
      </div>
      <h1 className=" font-bold font-sans absolute text-3xl top-[60%] left-[15%] w-[70%] md:top-[60%] md:left-[38%] md:w-[70%]  lg:text-5xl lg:w-[50%] xl:left-[50%]">
        Crypto <span className="text-[#63297a]">require</span> for package
      </h1>

      <ul className="text-xl font-semibold list-disc font-sans absolute top-[75%]  left-[20%] w-[450px] md:left-[50%] lg:text-3xl lg:top-[80%]">
        <li>USDT</li>
        <li>BNB (smartChai)</li>
      </ul>

      <img
        src="./ss-removebg-preview.png"
        className="absolute left-[70%] top-[70%] w-20 lg:w-[11%] lg:top-[75%] lg:left-[75%] xl:w-[9%]"
        alt=""
      />
    </div>
  );
};

export default PaymentMethod;
