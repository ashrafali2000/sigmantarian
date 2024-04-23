const PassiveIncome = () => {
  return (
    <div className="relative  h-[640px]  overflow-hidden bg-[#651385b6] border-b-4 border-b-[#651385a1] ">
      <div className="absolute -right-40 top-3 custom-radial-gradient-purpleWhite opacity-60  z-0"></div>
      <div className="absolute -left-20 -top-20 custom-radial-gradient-Whitepurple opacity-60  z-0"></div>
      <div className="absolute -bottom-10 -left-40 custom-radial-gradient-Whitepurple opacity-60  z-0"></div>

      {/* <div className="flex justify-center items-center gap-1 max-w-7xl mx-auto relative  "> */}

      <div className=" text-white text-start   w-[500px]  absolute top-[65px] left-[100px]">
        <div className="flex flex-col gap-36 ">
          <p className="text-6xl text-[#63297a] sb font-serif font-bold ml-5 mb-3 ">
            Passive income
          </p>

          <div>
            <p className="font-semibold  text-4xl px-6  my-5 ">
              We have multiple ways to make you rich.{" "}
            </p>
            <ul className="list-disc mx-14 hhh text-xl ">
              <li>Reward income on every joining member.</li>
              <li>Advertisement income.</li>
              <li>NFT </li>
            </ul>
          </div>
        </div>
      </div>

     

      <img
        src="./leave.jpg"
        className=" h-[770px] w-[900px]  absolute top-[-60px] -right-44 rounded-full"
      />
    </div>
    //   </div>
  );
};
export default PassiveIncome;
