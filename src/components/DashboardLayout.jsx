import Sidebar from "./Sidebar"
import MainContent from "./MainContent"
import RightPanel from "./RightPanel"
import { useState } from "react"

const DashboardLayout = ({onLogout}) => {
    const [activeTab, setactiveTab] = useState("Dashboard")



  return (
    <div className="flex min-h-screen">
    {/* left  Sidebar */}
    <div className="w-64 bg-zinc-50 p-6 shadow-md hidden lg:block">
      <Sidebar activeTab={activeTab} setActiveTab={setactiveTab} onLogout={onLogout} />
    </div>


      {/* main content (Dynamic Area)*/}
    <div className="flex-1 p-2 container md:p-6 lg:p-10 max-w-5xl md:mx-auto">
      {activeTab === 'Dashboard' && <MainContent />}
      {/* Other tabs add here */}
    </div>

      {/* right panel */}
      <div className="w-80 bg-zinc-100 p-4 shadow-md hidden xl:block">

      <RightPanel />

      </div>
    </div>
  )
}

export default DashboardLayout
