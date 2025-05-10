import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-[#DCEDF4] overflow-hidden">
      <Sidebar />
      {/* overflow not on inside form i can scroll */}
      <div className="flex-1 m-2 p-4 ">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
