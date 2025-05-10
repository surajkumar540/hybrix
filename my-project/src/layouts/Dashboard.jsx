import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-[#DCEDF4] overflow-hidden">
      <Sidebar />
      <div className="flex-1 mx-2 px-4 ">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
