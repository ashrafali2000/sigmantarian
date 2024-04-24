const Misson = () => {
  return (
    <div className="relative  h-[554px] lg:h-[738px] xl:h-[640px] overflow-hidden bg-[#65138586]">
      <div className="absolute -left-20 -top-20 custom-radial-gradient-purpleWhiteSmall opacity-60  z-0"></div>
      <div className="absolute right-0 -bottom-10 custom-radial-gradient-purpleWhiteSmall opacity-60  z-0"></div>

      {/* <div className="absolute -left-24 md:-left-10 bottom-0 custom-radial-gradient3  opacity-60 z-0"></div> */}

      {/* <div className="custom-radial-gradient rounded-full inset-0 backdrop-filter backdrop-blur-lg absolute -top-20 -left-16"></div> */}
      <img
        src="./0006-removebg-preview.png"
        className="w-40 absolute top-4 animate-spin-slow2 z-10 -right-10 md:top-12 md:w-60 lg:w-80 lg:-right-20 xl:w-[400px]"
      />
      <img
        src="./0010-removebg-preview.png"
        className="w-44 md:w-60 lg:w-96 xl:w-[410px] z-10 absolute -bottom-10 lg:-bottom-40 md:-bottom-16 left-0 md:left-16 "
      />

     
      <div className="flex flex-col justify-center items-center text-white ">
        <h1 className="text-4xl mt-20 mb-8  font-serif text-[#63297a] z-30 md:text-6xl font-bold">
          Mission
        </h1>
        <p className="font-extralight font-mono text-lg z-30 md:text-2xl lg:text-3xl leading-normal px-6 text-start md:w-[500px] lg:w-[700px] xl:w-[1000px]">
          Providing financial freedom to everyone is our primary and foremost
          objective. We strive to provide good return on investment to passive
          investors and greater rewards for network growth. <br /> <br />{" "}
          Sigmanterian aims to create opportunities for everyone to feel free
          and empowered.
        </p>
      </div>
    </div>
  );
};
export default Misson;
