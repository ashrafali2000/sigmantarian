const Advertisement = () => {
  return (
    <div className="relative  h-[640px]  overflow-hidden bg-[#651385b6] border-b-4 border-b-[#651385a1] ">
      <div className="absolute -right-40 top-3 custom-radial-gradient-purpleWhite opacity-60  z-0"></div>
      <div className="absolute -left-20 -top-20 custom-radial-gradient-Whitepurple opacity-60  z-0"></div>
      <div className="absolute -bottom-10 -left-40 custom-radial-gradient-Whitepurple opacity-60  z-0"></div>

      <div className="flex justify-center items-center gap-1 max-w-7xl mx-auto relative  ">
        {/* <img
            src="./graphImageWithMan.jpg"
            className=" h-[500px] w-[500px]  absolute top-[65px] left-[100px] rounded-md opacity-30"
          /> */}

        <img
          src="./handmic.jpg"
          className=" h-[420px] w-[400px]  absolute top-[125px] left-[150px] rounded-full"
        />

        <div className=" text-white text-start   w-[500px]  absolute top-[160px] right-32">
          <p className="text-6xl text-[#63297a] sb font-serif font-bold ml-5 mb-3 ">
            Advertisement{" "}
          </p>

          <p className="font-semibold  text-3xl px-6 my-6">
            This is feature to earn more and and more in our ecosystem.{" "}
          </p>

          <p className="  text-lg font-mono font-semibold px-6">
            Every user and package holder will get a chance to perform task to
            increase there earning from $0.01 to $1 dailyy.
          </p> 
        </div>
      </div>
    </div>
  );
};
export default Advertisement;
