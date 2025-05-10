import { Bell, ChevronDown, Globe } from "lucide-react";
import { BiLogOut } from "react-icons/bi";

const Navbar = () => {
  //    logout function
  const handleLogout = () => {
    console.log("User logged out");
    localStorage.removeItem("auth"); // Remove only auth-related data
    window.location.reload();
  };

  return (
    <div className="flex justify-between">
      <div></div>
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <Globe size={16} />
          <span className="ml-1">EN</span>
          <ChevronDown size={16} />
        </div>
        <Bell size={20} />
        <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden">
          <img
            src="/api/placeholder/32/32"
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
        {/* Logout Button */}
        <div className="p-4  mt-auto">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all text-white"
          >
            <BiLogOut className="text-lg  -scale-90" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
