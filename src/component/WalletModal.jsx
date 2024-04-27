"use client";
import { useState } from "react";

const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <>
      <button
        type="button"
        className="block text-white font-semibold  bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300  rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        onClick={handleOpenModal}
      >
        Connect Wallet
      </button>

      {isOpen && (
        <div
          className={
            "fixed top-0 mt-36 right-0 left-0 z-50 overflow-y-auto overflow-x-hidden justify-center items-center h-screen w-screen md:inset-0 px-4 md:px-0"
          }
        >
          <div className="relative p-4 w-full max-w-xl   mx-auto">
            <div className="relative bg-purple-900 rounded-xl shadow dark:bg-gray-700 h-96 ">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 ">
                <h3 className="text-xl font-semibold text-white dark:text-white ">
                  Choose your Wallet
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleCloseModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 md:p-5 space-y-4 mt-8  w-full flex flex-col items-center">
                <p
                  onClick={handleCloseModal}
                  className="flex justify-between items-center bg-purple-300 w-[240px] md:w-[460px] px-5"
                >
                  <img src="/mm.png" className="w-14 h-14" />
                  <h2 className="text-lg md:text-2xl   py-3 cursor-pointer font-semibold text-white dark:text-white">
                    Metamask
                  </h2>
                </p>
                <p
                  onClick={handleCloseModal}
                  className="flex justify-between items-center bg-purple-300 w-[240px] md:w-[460px] px-5"
                >
                  <img src="/mp.png" className="w-10 h-10" />
                  <h2 className="text-lg md:text-2xl  py-3 cursor-pointer font-semibold text-white dark:text-white">
                    Coinbase Wallet
                  </h2>
                </p>
                <p
                  onClick={handleCloseModal}
                  className="flex justify-between items-center bg-purple-300 w-[240px] md:w-[460px] px-5">
                  <img src="/mo.png" className="w-10 h-10" />
                  <h2 className="text-lg md:text-2xl  py-3 cursor-pointer font-semibold text-white dark:text-white">
                    WalletConnect
                  </h2>
                </p>
                <p
                  onClick={handleCloseModal}
                  className="flex justify-between items-center bg-purple-300 w-[240px] md:w-[460px] px-5"
                >
                  <img src="/mn.png" className="w-12 h-12" />
                  <h2 className="text-lg md:text-2xl  py-3 cursor-pointer font-semibold text-white dark:text-white">
                    TrustWallet
                  </h2>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
