import { useState } from "react";
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";

const DashboardLayout = ({ children, clientName, isNewAssessment }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#141112]">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col w-full lg:w-auto">
        <Navbar
          onMenuClick={() => setSidebarOpen(true)}
          clientName={clientName}
          isNewAssessment={isNewAssessment}
        />
        <main className="flex-1 p-4 md:p-6 overflow-x-hidden">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
