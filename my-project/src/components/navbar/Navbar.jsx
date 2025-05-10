import { useState } from "react";
import { Bell, ChevronDown, Globe } from "lucide-react";
import { BiLogOut } from "react-icons/bi";

const Navbar = () => {
  const [language, setLanguage] = useState("EN");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    console.log("User logged out");
    localStorage.removeItem("auth");
    window.location.reload();
  };

  const fakeLanguages = [
    { code: "EN", label: "English" },
    { code: "HI", label: "Hindi" },
    { code: "ES", label: "Spanish" },
    { code: "FR", label: "French" },
    { code: "GE", label: "German" },
  ];

  return (
    <div className="flex justify-between">
      <div></div>
      <div className="flex items-center gap-4 relative">
        {/* Language Selector */}
        <div
          className="relative cursor-pointer z-30"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <div className="flex items-center">
            <Globe size={16} />
            <span className="ml-1">{language}</span>
            <ChevronDown size={16} />
          </div>
          {showDropdown && (
            <div className="absolute top-8 right-0 bg-white border shadow-md rounded-lg w-32 z-10">
              {fakeLanguages.map((lang) => (
                <div
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setShowDropdown(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {lang.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bell Icon */}
        <Bell size={20} />

        {/* Profile Image */}
        <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Logout Button */}
        <div className="p-4 mt-auto">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all text-white"
          >
            <BiLogOut className="text-lg -scale-90" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
