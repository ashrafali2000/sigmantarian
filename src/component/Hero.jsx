const Hero = () => {
  return (
    // <div className="h-[640px]  bg-image border-b-4 border-b-[#651385a1] relative overflow-hidden">
    <div
      className="bg-cover bg-center h-screen z-0 "
      style={{ backgroundImage: 'url("/image.png")' }}
    >
      {/* <div className="relative z-10"> */}
      <h1 className="text-sm top-[40%] left-[7%] z-40 md:text-2xl md:top-[38%] md:left-[15%] lg:text-3xl lg:top-[38%] lg:left-[15%]  xl:text-4xl xl:top-[37%] xl:left-[15%]   font-sans font-extralight text-white absolute  hhh">
        WHERE YOUR BUSINESS, FREEDOM, BEGINS
      </h1>

      <h1 className="text-3xl z-50 hidden md:block   md:text-6xl md:top-[45%] md:left-[15%]   lg:text-7xl lg:top-[45%] lg:left-[15%] xl:text-8xl text-white font-bold absolute xl:top-[45%] xl:left-[15%] font-serif hhh">
        SIGMANTARIAN
      </h1>

      {/* <h1 className="lg:text-[80px] hidden md:block  w-1/2 md:text-7xl text-5xl top-60 left-4 z-50 absolute md:top-64 lg:top-[360px] xl:top-[300px] lg:left-[220px]  md:left-[90px] xl:text-[120px]  font-black">
        SIGMANTARIAN
      </h1> */}
      <div className="text-white lg:w-3/5 xl:w-2/5 absolute top-[45%] left-[7%] z-40 md:hidden">
        <h1 className="text-4xl font-black hhh">SIGMANTARIAN</h1>
      </div>
      <img
        src="./0002-removebg-preview.png "
        className="md:hidden lg:w-[200px] md:w-40 absolute top-32 md:top-48 lg:top-60 w-60  opacity-30 z-0 animate-spin-slow"
      />
      <img
        src="./0002-removebg-preview.png "
        className="hidden md:block lg:w-[200px] md:w-40 absolute top-32 md:top-48 lg:top-60 w-72 z-0 animate-spin-slow"
      />

      <img
        src="./0003-removebg-preview.png "
        className="md:hidden lg:w-72 w-20 right-5  md:w-48  absolute bottom-20 lg:bottom-0 md:bottom-10 md:right-28 z-0 "
      />
       <img
        src="./0003-removebg-preview.png "
        className="hidden md:block lg:w-72 w-20 right-5  md:w-48  absolute bottom-20 lg:bottom-0 md:bottom-10 md:right-28 z-0 animate-spin-slow"
      />
      <img
        src="./0004-removebg-preview.png "
        className="lg:w-72   md:w-56 w-36 -bottom-8 -left-4 absolute md:-bottom-20 md:-left-10 z-0"
      />
    </div>
    // </div>
  );
};

export default Hero;
