const SecondLast = () => {
  return (
    <div className="relative h-[640px] overflow-hidden bg-[#6513857c] ">
      {/* <div className="absolute right-0 bottom-0 custom-radial-gradient2  opacity-60 z-0"></div> */}
      <div className="absolute left-0 bottom-0 custom-radial-gradient-White  opacity-60 z-0"></div>
      <div className="absolute right-0 -top-10 custom-radial-gradient-White  opacity-60 z-0"></div>


      <img
        src="./0023-removebg-preview.png"
        className="w-44 md:w-60 lg:w-80 absolute top-0 -left-20 animate-spin-slow "
      />
      <img
        src="./0024-removebg-preview.png"
        className="w-60 lg:w-80 xl:w-96 absolute -bottom-20 -right-20"
      />

      <p className="font-bold text-[#762e91] absolute font-mono sb top-28 text-lg md:text-2xl px-6 leading-6 text-start md:top-32 md:w-[500px] md:left-32 lg:left-40 lg:text-4xl lg:top-48 lg:w-[900px] ">
        Providing financial freedom to everyone is our primary and foremost
        objective. We strive to provide good return on investment to passive
        investors and greater rewards for network growth. <br /> <br />
        Sigmanterian aims to create opportunities for everyone to feel free and
        empowered.
      </p>
    </div>
  );
};
export default SecondLast;
