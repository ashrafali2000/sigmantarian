const Bonuses = () => {
  return (
    <div className="relative  h-[640px]  overflow-hidden bg-[#651385b6] border-b-4 border-b-[#651385a1] ">
      <div className="absolute -right-40 top-3 custom-radial-gradient-purpleWhite opacity-60  z-0"></div>
      <div className="absolute -left-20 -top-20 custom-radial-gradient-Whitepurple opacity-60  z-0"></div>
      <div className="absolute -bottom-10 -left-40 custom-radial-gradient-Whitepurple opacity-60  z-0"></div>

      {/* <div className="flex justify-center items-center gap-1 max-w-7xl mx-auto relative  "> */}

      <div className=" text-white text-start   w-[500px]  absolute top-[65px] left-[100px]">
        <div className="flex flex-col gap-36 ">
          <p className="font-semibold  text-4xl px-6  my-5 ">
            We have multiple ways to give you financial
          </p>

          <div>
            <p className="text-6xl text-[#63297a] sb font-serif font-bold ml-5 mb-3 ">
              Bonuses
            </p>

            <ul className="list-disc font-semibold mx-14 hhh text-3xl ">
              <li> Bonus on every joining member.</li>
              <li>Advertisement Bonus.</li>
              <li>NFT as Bonus.</li>
            </ul>
          </div>
        </div>
      </div>

      <img
        src="./manwithdollor.webp"
        className=" h-[500px] w-[500px] blur-sm  rounded-md opacity-30   absolute top-[80px] right-32"
      />

      <img
        src="./manwithdollor.webp"
        className=" h-[400px] w-[400px]  absolute top-[150px] right-44 rounded-full"
      />
    </div>
    //   </div>
  );
};
export default Bonuses;
