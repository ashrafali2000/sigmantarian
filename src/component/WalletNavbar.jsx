"use client";
import { useState } from "react";
import Modal from "./WalletModal";

const WalletNavbar = () => {
  const [data, setData] = useState(false);

  return (
    <nav className="bg-[#541d69]  p-1 ">
      <div className="flex flex-wrap justify-between items-center max-w-6xl mx-auto"> 
        <img
          src="./logoo.png"
          alt=""
          srcset=""
          className="w-20 z-40 "
        />

        <Modal open={data} setOpen={setData} />

        {/* <button
          onClick={() => setData(true)}
          className="bg-[#ab4bd1]  hover:bg-[#6b3383] border border-white  text-white font-semibold py-2 px-4 rounded"
        >
          Wallet Connect
        </button> */}
      </div>
    </nav>
  );
};

export default WalletNavbar;

