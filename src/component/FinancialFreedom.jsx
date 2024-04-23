const Freedom = () => {
  return (
    <div className="relative h-[554px] lg:h-[738px] xl:h-[640px] overflow-hidden bg-[#651385b6] ">
      {/* <div className="absolute -left-20 -top-20 custom-radial-gradient-Whitepurple opacity-60  z-0"></div> */}

      {/* <div className="custom-radial-gradient rounded-full inset-0 backdrop-filter backdrop-blur-lg absolute -top-20 -left-16"></div> */}

      <img
        src="./0006-removebg-preview.png"
        className="w-[500px] md:w-60 lg:w-96 animate-spin-slow2 opacity-30 md:opacity-100 absolute top-14 -right-40 md:-right-10 lg:-right-20"
      />
      <img
        src="./0008-removebg-preview.png"
        className="w-60 md:w-72 lg:w-80 absolute -bottom-24 lg:-bottom-32 -left-10"
      />

      <div className=" h-[700px] w-[600px] mx-auto text-white text-start flex flex-col  gap-10 ">
        <p className="text-4xl xl:leading-tight font-serif md:text-4xl md:w-[500px] lg:w-[600px] font-semibold absolute top-12 left-[5%] md:left-[20%] lg:text-5xl hhh lg:left-[18%] lg:top-28 xl:left-[21%]">
          <span className="text-[#63297a] sb">HOW </span> YOU
          <span className="text-[#63297a] sb"> GET </span> <br /> FINANCIAL{" "}
          <br />
          <span className="text-[#63297a] sb">FREEDOM </span>
        </p>

        <p className="font-extralight absolute top-48 text-lg font-mono md:text-2xl px-6  text-start md:top-52 md:w-[500px] md:left-32 lg:left-40 lg:top-80 lg:text-4xl lg:w-[700px] xl:w-[750px] xl:leading-loose xl:text-2xl xl:top-80 xl:left-[260px]">
          Every one wants a good return on investment (ROI). We have designed an
          ecosystem which allow you to be financially free and secure through
          decentralization which is immutable and irreversible.
        </p>
      </div>
    </div>
  );
};
export default Freedom;
