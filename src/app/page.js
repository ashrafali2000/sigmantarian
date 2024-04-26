import "./globals.css";
import Navbar from "@/component/Navbar";
import Hero from "@/component/Hero";
import Binance from "@/component/OnBinance";
import AboutUs from "@/component/AboutUs";
import Mission from "@/component/Mission";
import Freedom from "@/component/FinancialFreedom";
import BusinessCards from "@/component/BusinessCards";
import DirectBonus from "@/component/DirectBonus";
import InDirectBonus from "@/component/Indirectbonus";
import BusinessCards2 from "@/component/BusinessCards2";
import Bonuses from "@/component/Bonuses";
import PassiveIncome from "@/component/PassiveIncome";
import Advertisement from "@/component/Advertisement";
import NFT from "@/component/NFT";
import Rewards from "@/component/Reward";
import PaymentMethod from "@/component/PaymentMethod";
import NrJohn from "@/component/NrJohn";
import Cards from "@/component/Cards";
import Footer from "@/component/Footer";
// import AAA from "@@/component/TestJsModal";

export default function Home() {
  return (
    <div>
      {/* //<div className="overflow-hidden"> */}
      <div className="relative">
        <div className="absolute w-full">
          <Navbar />
        </div>
        <Hero />
      </div>
      <Binance />
      <AboutUs />
      <Mission />
      <Freedom />
      {/* <BusinessCards /> */}
      {/* <DirectBonus /> */}
      <Cards />
      {/* <InDirectBonus /> */}
      {/* <Bonuses /> */}
      {/* <PassiveIncome /> */}
      {/* <Advertisement /> */}
      <NFT />
      <Rewards />
      <PaymentMethod />
      {/*  <Animate /> */}
       {/* <Footer /> */}
    </div>
  );
}
{
  /* <div className="bg-gradient-to-br from-blue-500 via-green-400 to-yellow-500 rounded-full w-72 h-40"></div> */
}
{
  /* <div className="bg-radial-gradient(closest-side, #3f87a6, #ebf8e1, #f69d3c)"></div> */
}

// <div className=" text-center items-center flex justify-center flex-col gap-10 py-20 bg-blue-950 my-24">
//   <h1 className="text-6xl font-black uppercase  bg-gradient-to-r from-stone-300 to-blue-800 bg-clip-text text-transparent">
//     Sigmantarian
//   </h1>
//   <img
//     src="logo.jpeg"
//     className="w-60 h-60 border-4 border-wite rounded-full shadow-2xl shadow-gray-600"
//   />
//   <h1 className="text-3xl font-black shadow-lg  bg-white bg-clip-text text-transparent">
//     Coming soon with updates.....
//   </h1>
// {/* <NrJohn /> */}
// </div>
