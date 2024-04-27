const page = () => {
  return (
    <div className="bg-[#3f054f] h-screen relative text-center text-[#caa8f5]">
      <div className="max-w-2xl mx-auto border rounded-2xl absolute top-[10%] md:top-[20%] md:left-[7%] lg:left-[19%] xl:left-[25%] p-10  ">
        <h1 className=" text-3xl pb-10 font-bold">
          USER REGISTRATION WITH WALLET ADDRESS
        </h1>

        <ul className="flex justify-between text-2xl max-w-md mx-auto ">
          <li>Your Balance:</li>
          <li>0.0</li>
        </ul>
        <ul className="flex justify-between text-2xl max-w-md mx-auto my-2 ">
          <li>Registration Fees:</li>
          <li>5  DAI</li>
        </ul>
        <ul className="flex justify-between text-2xl max-w-md mx-auto ">
          <li>Your Allowance:</li>
          <li>0.0</li>
        </ul>
      </div>
    </div>
  );
};

export default page;
