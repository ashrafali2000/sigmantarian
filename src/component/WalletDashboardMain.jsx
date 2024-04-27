"use client";
import React from "react";
import { useState } from "react";
import { FiCopy } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const WalletDashboardMain = () => {
  const [copied, setCopied] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const [copied3, setCopied3] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleNextClick = () => {
    // Scroll right by 50px
    setScrollPosition((prev) => prev + 50);
  };

  const handleBackClick = () => {
    // Scroll left by 5px
    setScrollPosition((prev) => prev - 50);
  };

  const handleCopy = () => {
    const linkToCopy = "https://geniosclub.team/auth/register?ref=1"; // Your link to copy
    navigator.clipboard.writeText(linkToCopy); // Copy the link to clipboard
    setCopied(true); // Set copied state to true
  };
  const handleCopy2 = () => {
    const linkToCopy = "https://geniosclub.team/auth/register?ref=1"; // Your link to copy
    navigator.clipboard.writeText(linkToCopy); // Copy the link to clipboard
    setCopied2(true); // Set copied state to true
  };
  const handleCopy3 = () => {
    const linkToCopy = "https://geniosclub.team/auth/register?ref=1"; // Your link to copy
    navigator.clipboard.writeText(linkToCopy); // Copy the link to clipboard
    setCopied3(true); // Set copied state to true
  };
  return (
      <div className="flex flex-col gap-5 max-w-xs ml-20 h-[450px] border p-5 rounded-2xl bg-[#67288e] text-[#caa8f5]">
        <ul className="flex justify-between">
          <li className="text-xl font-bold">TOTAL EARNING:</li>
          <li>1214532</li>
        </ul>
        <ul className="flex justify-between">
          <li className="text-xl font-bold">ACTIVE LEVEL</li>
          <li>452553</li>
        </ul>
        <ul className="flex justify-between">
          <li className="text-xl font-bold">NFT</li>
          <li>53463461</li>
        </ul>
        <ul className="flex flex-wrap justify-between">
          <li className="text-xl font-bold">AFFILIATE LINK</li>
          <li>
            <div className="flex items-center  justify-between space-x-4   w-[270px] border p-1">
              <a
                href="https://example.com"
                className="text-gray-500 hover:underline"
              >
                https://geniosclub.....r?re
              </a>
              <button
                onClick={handleCopy}
                className="flex items-center justify-center bg-purple-500 text-white rounded-full h-8 w-8 focus:outline-none"
              >
                {copied ? <TiTick /> : <FiCopy />}
              </button>
            </div>
          </li>
        </ul>
        <ul className="flex flex-wrap justify-between">
          <li className="text-xl font-bold">WALLET ADDRESS</li>
          <li>
            <div className="flex items-center justify-between space-x-4 border  w-[270px] p-1">
              <a
                href="0x93a33efC878C6Ee5E8960B47Eb93f4296288b978"
                className="text-gray-500 hover:underline"
              >
                0x93a33e.....4296288b978
              </a>
              <button
                onClick={handleCopy2}
                className="flex items-center justify-center bg-purple-500 text-white rounded-full h-8 w-8 focus:outline-none"
              >
                {copied2 ? <TiTick /> : <FiCopy />}
              </button>
            </div>
          </li>{" "}
        </ul>
        <ul className="flex flex-wrap justify-between">
          <li className="text-xl font-bold">MYUPLINE</li>
          <li>
            <div className="flex justify-between items-center space-x-4 w-[270px] border p-1 ">
              <a href="8" className="text-gray-500 hover:underline">
                7
              </a>
              <button
                onClick={handleCopy3}
                className="flex items-center justify-center bg-purple-500 text-white rounded-full h-8 w-8 focus:outline-none"
              >
                {copied3 ? <TiTick /> : <FiCopy />}
              </button>
            </div>
          </li>{" "}
        </ul>
      </div>

);
};
export default WalletDashboardMain;

{/* <button onClick={handleBackClick}>
  BACK
</button>
<div className="px-20 text-center flex gap-44 justify-evenly w-[1000px]  border rounded-2xl overflow-scroll overflow-y-hidden  ">
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
    <img src="/arr.png" className="w-6 h-14" />
    <li className="border rounded-full pt-5 w-16 h-16">1</li>
  </ul>
  <ul className="flex flex-col items-center py-5 gap-3">
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
    <img src="/arr.png" className="w-6 h-14" />
    <li className="border rounded-full pt-5 w-16 h-16">1</li>
  </ul>
  <ul className="flex flex-col items-center py-5 gap-3">
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
    <img src="/arr.png" className="w-6 h-14" />
    <li className="border rounded-full pt-5 w-16 h-16">1</li>
  </ul>
  <ul className="flex flex-col items-center py-5 gap-3">
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
    <img src="/arr.png" className="w-6 h-14" />
    <li className="border rounded-full pt-5 w-16 h-16">1</li>
  </ul>
  <ul className="flex flex-col items-center py-5 gap-3">
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
    <img src="/arr.png" className="w-6 h-14" />
    <li className="border rounded-full pt-5 w-16 h-16">1</li>
  </ul>
  <ul className="flex flex-col items-center py-5 gap-3">
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
    <img src="/arr.png" className="w-6 h-14" />
    <li className="border rounded-full pt-5 w-16 h-16">1</li>
  </ul>
  <ul className="flex flex-col items-center py-5 gap-3">
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
    <img src="/arr.png" className="w-6 h-14" />
    <li className="border rounded-full pt-5 w-16 h-16">1</li>
  </ul>
  <ul className="flex flex-col items-center py-5 gap-3">
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
    <img src="/arr.png" className="w-6 h-14" />
    <li className="border rounded-full pt-5 w-16 h-16">1</li>
  </ul>
  <ul className="flex flex-col items-center py-5 gap-3">
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
    <img src="/arr.png" className="w-6 h-14" />
    <li className="border rounded-full pt-5 w-16 h-16">1</li>
  </ul>
  <ul className="flex flex-col items-center py-5 gap-3">
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
    <img src="/arr.png" className="w-6 h-14" />
    <li className="border rounded-full pt-5 w-16 h-16">1</li>
  </ul>
  <ul className="flex flex-col items-center py-5 gap-3">
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
    <img src="/arr.png" className="w-6 h-14" />
    <li className="border rounded-full pt-5 w-16 h-16">1</li>
  </ul>
  <ul className="flex flex-col items-center py-5 gap-3">
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
    <img src="/arr.png" className="w-6 h-14" />
    <li className="border rounded-full pt-5 w-16 h-16">1</li>
  </ul>
  <ul className="flex flex-col items-center py-5 gap-3">
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
    <img src="/arr.png" className="w-6 h-14" />
    <li className="border rounded-full pt-5 w-16 h-16">1</li>
  </ul>
  <ul className="flex flex-col items-center py-5 gap-3">
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
    <img src="/arr.png" className="w-6 h-14" />
    <li className="border rounded-full pt-5 w-16 h-16">1</li>
  </ul>
  <ul className="flex flex-col items-center py-5 gap-3">
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
    <img src="/arr.png" className="w-6 h-14" />
    <li className="border rounded-full pt-5 w-16 h-16">1</li>
  </ul>
  <ul className="flex flex-col items-center py-5 gap-3">
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
    <img src="/arr.png" className="w-6 h-14" />
    <li className="border rounded-full pt-5 w-16 h-16">1</li>
  </ul>
  <ul className="flex flex-col items-center py-5 gap-3">
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
    <img src="/arr.png" className="w-6 h-14" />
    <li className="border rounded-full pt-5 w-16 h-16">1</li>
  </ul>
</div>
<button onClick={handleNextClick}>
  NEXT
</button> */}
