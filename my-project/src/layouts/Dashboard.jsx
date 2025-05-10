import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-[#DCEDF4]">
      <Sidebar />
      <div className="flex-1 p-6  overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
