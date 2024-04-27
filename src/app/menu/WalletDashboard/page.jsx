import WalletDashboardHeading from "@/component/WalletDashboardHeading";
import WalletDashboardMain from "@/component/WalletDashboardMain";
import ScrollableDiv from "@/component/tryyyy";

const page = () => {
  return (
    <div className="bg-[#3f054f] overflow-hidden ">
      <WalletDashboardHeading />
      <div className="flex flex-col md:flex-row gap-10">
        <WalletDashboardMain />
        <ScrollableDiv />
      </div>
     </div>
  );
};
export default page;
