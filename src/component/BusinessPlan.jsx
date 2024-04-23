const BusinessPlan = () => {
  return (
    <div className="relative h-[640px] overflow-hidden bg-[#65138586]">
      {/* <div className="custom-radial-gradient rounded-full inset-0 backdrop-filter backdrop-blur-lg absolute -top-20 -left-16"></div> */}

      <img
        src="./0006-removebg-preview.png"
        className="w-[500px] md:w-60 lg:w-96 animate-spin-slow2 absolute top-0 -right-40 md:-right-10 lg:-right-20"
      />
      <img
        src="./0008-removebg-preview.png"
        className="w-60 md:w-72 lg:w-80 absolute -bottom-24 lg:-bottom-32 -left-10"
      />

      <div className=" h-[700px] w-[600px] mx-auto text-white text-start flex flex-col  gap-10 ">
        <p className="text-4xl md:text-5xl md:w-[500px] lg:w-[600px] font-semibold font-serif  absolute top-28 left-8 md:left-40 lg:text-7xl md:top-32 hhh lg:top-44 xl:top-36 lg:left-52 xl:left-72">
          <span className="text-[#63297a] sb">Business </span> YOU
        </p>

        <p className="font-extralight font-mono absolute top-48 text-lg md:text-2xl px-6 leading-6 text-start md:top-52 md:w-[500px] md:left-32 lg:left-40 lg:top-80 lg:text-4xl lg:w-[700px] xl:w-[850px] xl:text-4xl xl:top-60 xl:left-[260px]">
          We are offering four plans, each of them design to empower our users
          financial health which provide complete basic income solution for
          every investment range along with other bonuses and rewards passive
          income and so on,
        </p>
      </div>
    </div>
  );
};
export default BusinessPlan;
