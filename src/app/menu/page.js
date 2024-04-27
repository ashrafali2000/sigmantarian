import WalletNavbar from '@/component/WalletNavbar'
import RegistrationDashboard from '@/component/RegistrationDashboard'

const page = () => {
  return (
    <div className="bg-[#3f054f] h-screen">
      <WalletNavbar />
      <RegistrationDashboard />
    </div>
  )
}

export default page
