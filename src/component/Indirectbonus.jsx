const InDirectBonus = () => {
  return (
    <div className="relative  h-[640px]  overflow-hidden bg-[#651385b6] border-b-4 border-b-[#651385a1] ">
      <div className="absolute -right-40 top-3 custom-radial-gradient-purpleWhite opacity-60  z-0"></div>
      <div className="absolute -left-20 -top-20 custom-radial-gradient-Whitepurple opacity-60  z-0"></div>
      <div className="absolute -bottom-10 -left-40 custom-radial-gradient-Whitepurple opacity-60  z-0"></div>

      <div className="flex justify-center items-center gap-1 max-w-7xl mx-auto relative  ">
        <img
          src="./graphImageWithMan.jpg"
          className=" h-[500px] w-[500px]  absolute top-[65px] left-[100px] rounded-md opacity-30"
        />

        <img
          src="./graphImageWithMan.jpg"
          className=" h-[400px] w-[400px]  absolute top-[125px] left-[150px] rounded-full"
        />

        <div className=" text-white text-start   w-[500px]  absolute top-[160px] right-32">
          <p className="text-6xl text-[#63297a] sb font-serif font-bold ml-5 mb-3 ">
            <span className="text-white hhh ">In-direct </span> Bonus
          </p>

          <p className="font-semibold  text-2xl px-6 leading-6 ">
            This is continues weath in you wallet upto 10 Level
          </p>

          <p className="border border-[#963ab3] w-[400px] m-5"></p>

          <ul className="list-disc font-semibold mx-14 hhh ">
            <li>Silver 25% $2.5</li>
            <li>Gold 25% $6.3</li>
            <li>Diamond 25% $12.5</li>
            <li>Platinum 15% $15</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default InDirectBonus;
