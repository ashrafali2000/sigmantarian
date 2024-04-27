const WalletDashboardHeading = () => {
    return(
        <div className="bg-[#3f054f]  relative text-center text-[#caa8f5]">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  text-xl gap-4 max-w-6xl mx-auto p-14 ">
          <div className=" p-4 flex flex-col justify-center">
             <h1 className="text-2xl font-semibold"> ALL PARTICIPANTS </h1>
             <h1 className="text-yellow-200">13052</h1>
              </div>
          <div className=" p-4 flex flex-col justify-center">
             <h1 className="text-2xl font-semibold"> JOINED IN 24 HOURS </h1>
             <h1 className="text-yellow-200">29</h1>
  
              </div>
          <div className=" p-4 flex flex-col justify-center">
             <h1 className="text-2xl font-semibold"> TOTAL EARNING </h1>
             <h1 className="text-yellow-200">12345.56</h1>
  
              </div>
          <div className=" p-4 flex flex-col justify-center">
             <h1 className="text-2xl font-semibold"> PARTICIPANTS HAVE EARN DAI </h1>
             <h1 className="text-yellow-200">45612345.56</h1>
  
              </div>
  
        </div>
      </div>
    )
}
export default WalletDashboardHeading;