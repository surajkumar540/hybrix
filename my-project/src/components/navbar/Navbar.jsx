import { Bell, ChevronDown, Globe } from "lucide-react";

const Navbar = () => {
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
      </div>
    </div>
  );
};

export default Navbar;
