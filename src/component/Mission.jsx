const Misson = () => {
  return (
    <div className="relative  h-[554px] lg:h-[738px] xl:h-[640px] overflow-hidden bg-[#65138586]">
            <div className="absolute -left-20 -top-20 custom-radial-gradient-purpleWhiteSmall opacity-60  z-0"></div>
            <div className="absolute right-0 -bottom-10 custom-radial-gradient-purpleWhiteSmall opacity-60  z-0"></div>

      {/* <div className="absolute -left-24 md:-left-10 bottom-0 custom-radial-gradient3  opacity-60 z-0"></div> */}

      {/* <div className="custom-radial-gradient rounded-full inset-0 backdrop-filter backdrop-blur-lg absolute -top-20 -left-16"></div> */}
      <img
        src="./0006-removebg-preview.png"
        className="w-40 absolute top-4 animate-spin-slow2 -right-10 md:top-12 md:w-60 lg:w-80 lg:-right-20 xl:w-[400px]"
      />
      <img
        src="./0010-removebg-preview.png"
        className="w-44 md:w-60 lg:w-96 xl:w-[410px]  absolute -bottom-10 lg:-bottom-40 md:-bottom-16 left-0 md:left-16 "
      />

      <div className=" h-[700px] text-white text-center flex flex-col item-center justify-center gap-10 ">
        <h1 className="text-4xl font-serif text-[#63297a] md:text-6xl font-bold absolute top-32 left-20 md:left-52 lg:text-7xl lg:left-80 sb xl:right-96">
          Mission
        </h1>
        <p className="font-extralight font-mono absolute top-48 text-lg md:text-2xl px-6 leading-6 text-start md:top-52 md:w-[500px] md:left-32 lg:left-40 lg:text-3xl lg:w-[700px] xl:w-[1000px] xl:text-3xl xl:top-60">
          Providing financial freedom to everyone is our primary and foremost
          objective. We strive to provide good return on investment to passive
          investors and greater rewards for network growth. <br /> <br />
          Sigmanterian aims to create opportunities for everyone to feel free
          and empowered.
        </p>
      </div>
    </div>
  );
};
export default Misson;
