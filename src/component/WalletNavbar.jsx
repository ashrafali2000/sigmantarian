// // "use client";
// // import { useState } from "react";
// // import Modal from "./WalletModal";

// // const WalletNavbar = () => {
// //   const [data, setData] = useState(false);

// //   return (
// //     <nav className="bg-[#541d69]  p-1 ">
// //       <div className="flex flex-wrap justify-between items-center max-w-6xl mx-auto"> 
// //         <img
// //           src="./logoo.png"
// //           alt=""
// //           srcset=""
// //           className="w-20 z-40 hidden md:block"
// //         />

// //         <Modal open={data} setOpen={setData} />

// //         <button
// //           onClick={() => setData(true)}
// //           className="bg-[#ab4bd1]  hover:bg-[#6b3383] border border-white  text-white font-semibold py-2 px-4 rounded"
// //         >
// //           Wallet Connect
// //         </button>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default WalletNavbar;


// "use client";
// import { useState } from "react";
// import Modal from "./WalletModal";

// export default function WalletModal() {
//   const [data, setData] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("");

//   const handleChange = (e) => {
//     setSelectedOption(e.target.value);
//   }
//   return (
//     <div className="bg-rose-900 overflow-hidden">
//       <div className="text-center py-10">
//         <Modal open={data} setOpen={setData} />
//         <h1 className="font-bold text-5xl text-white ">Web3Modal</h1>
//         <button
//           onClick={() => setData(true)}
//           className="border rounded-full px-8 py-3 text-2xl bg-blue-500 hover:bg-blue-800 text-white my-3"
//         >
//           connect wallet
//         </button>
//       </div>
      
//     </div>
//   );
// }

