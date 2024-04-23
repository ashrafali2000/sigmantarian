const Rewards = () => {
  return (
    <div className="relative text-white h-[550px] lg:h-[738px] xl:h-[640px]  overflow-hidden bg-[#571172e1] border-b-4 border-b-[#651385a1] ">
      <div className="absolute -right-40 top-3 custom-radial-gradient-purpleWhite opacity-60  z-0"></div>
      <div className="absolute -left-20 -top-20 custom-radial-gradient-Whitepurple opacity-60  z-0"></div>
      <div className="absolute -bottom-10 -left-40 custom-radial-gradient-Whitepurple opacity-60  z-0"></div> 

          <p className="hhhh font-serif font-bold  mb-3 text-3xl absolute top-[10%] left-[20%] md:text-5xl md:left-[50%] lg:text-6xl ">
            Reward Pool
          </p>

          <p className="font-semibold hhhh  text-4xl px-6 my-6 absolute top-[19%] left-[10%] md:text-2xl md:top-[20%] md:left-[50%] lg:text-4xl xl:left-[40%] ">
            We have multiple ways to make you rich.
          </p>

          <p className="font-mono hhhh  text-2xl px-6 my-6 absolute top-[55%] left-[10%] md:text-2xl md:top-[40%] md:w-[40%] md:left-[55%] lg:text-4xl xl:left-[48%] ">
            Reward income on every joining member upto <span className="text-red-700"> $7.5</span>
          </p>

      <img
        src="./croppy.png"
        className=" hidden md:block  md:h-[100%]   xl:h-[633px] xl:w-[500px]  absolute rounded-3xl  z-0 "
      />
    </div>
  );
};
export default Rewards;
