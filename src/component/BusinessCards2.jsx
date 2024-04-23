const BusinessCards2 = () => {
  return (
    <div className="relative h-[980px] md:h-[570px] lg:h-[761px] overflow-hidden bg-blue-900 ">
      <div className="absolute left-0 -bottom-10 custom-radial-gradient2  opacity-60 z-0"></div>
      <div className="absolute -right-28 top-20 custom-radial-gradient3  opacity-60 z-0"></div>
      <div className="custom-radial-gradient rounded-full inset-0 backdrop-filter backdrop-blur-lg absolute -top-20 -left-16"></div>

      <p className="text-4xl text-white md:text-5xl top-7 font-bold md:w-[500px] lg:w-[600px] xl:w-[750px]  absolute  left-8 md:left-40 lg:text-7xl md:top-16 lg:top-40 xl:top-24 lg:left-52 xl:left-[400px] xl:text-8xl">
        <span className="text-red-500">Business </span> Plans
      </p>

      <div className="flex flex-col md:flex-row top-24 left-4 justify-center md:gap-16 gap-8  absolute lg:top-64 md:top-32 md:left-8 lg:left-40 xl:left-[250px]">
        <div className="text-white w-72  md:w-80 xl:w-[450px] text-md xl:text-2xl border py-5 px-3 border-slate-800/35 rounded-3xl bg-slate-800/35  shadow-lg">
          <div className="flex items-center justify-between list-none">
            <li className="text-3xl xl:text-6xl font-semibold">Diamond</li>
            <li>
              <img src="./dia.png" className="w-16 xl:w-24" alt="" />
            </li>
          </div>
          <br />
          <p>
            In this Tier your wings open to fly high lets dive in. In this tier
            where you can make profit through networking and with high rewards
            and bonuses.
          </p>
          <br />
          <li>Tier III.</li>
          <li>This Tier will give you free NFT</li>
          <li>Upto 7 level up-line Bonus</li>
          <li>distribution.</li>
          <li>Higher Reward on both package.</li>
        </div>
        <div className="text-white w-72 md:w-80 xl:w-[450px] text-md xl:text-2xl border py-5 px-3 border-slate-800/35 rounded-3xl bg-slate-800/35  shadow-lg">
          <div className="flex items-center justify-between list-none ">
            <li className="text-3xl xl:text-6xl font-semibold text-sky-600">
              Platinium
            </li>
            <li>
              <img src="./startg.png" className="w-12  xl:w-20" alt="" />
            </li>
          </div>
          <br />
          <p>
            This tier will make you completely financial independent. You can
            enjoy multiple rewards along with passive income from the LP.
          </p>
          <br />

          <li>Tier IIII.</li>
          <li>Passive Income 0.5% to 0.8% daily.</li>
          <li>Indirect Bonus up to 10 level (up-liner).</li>
          <li>Higher Reward up</li>
          <li>Higher direct indirect bonus in this</li>
        </div>
      </div>
    </div>
  );
};
export default BusinessCards2;
