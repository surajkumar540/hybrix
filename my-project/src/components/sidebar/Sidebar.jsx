import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import entraLogo from "../../assets/entraLogo.png";

const Sidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  //for mobile device responsive
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCollapsed(true);
        setIsMobile(true);
      } else {
        setCollapsed(false);
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    // Clean up function
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //my nav data
  const navItems = [
    {
      name: "Invite Visitor",
      path: "/single-invite",
    },
    {
      name: "Invitation List",
      path: "/#",
    },
    {
      name: "Book Meeting Room",
      path: "/#",
    },
    {
      name: "Calendar View",
      path: "/#",
    },
    {
      name: "Meeting Room View",
      path: "/#",
    },
    {
      name: "Settings",
      path: "/#",
    },
    {
      name: "Emergency Alert",
      path: "/#",
    },
    {
      name: "Helpdesk",
      path: "/#",
    },
  ];

  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-56"
      } h-screen bg-[#F1F4F8]  rounded-tr-2xl border border-gray-100 flex flex-col transition-all duration-300 ease-in-out   ${
        isMobile ? "" : "relative"
      }`}
    >
      {/* Logo and Toggle */}
      <div className="flex items-center justify-between p-4 ">
        {!collapsed && (
          <div className="flex items-center">
            {/*entra logo */}

            <img
              src={entraLogo}
              alt="Entra Logo"
              className="h-8 w-8 rounded-full"
            />
            <h2 className="text-xl font-bold ml-2">Entra</h2>
          </div>
        )}
        {collapsed && (
          <div className="flex justify-center items-center gap-1">
            <img
              src={entraLogo}
              alt="Entra Logo"
              className="h-6 w-6 rounded-full"
            />
            <div className="mx-auto font-bold text-xl">EN.</div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul>
          {navItems.map((item, index) => (
            <li key={index} className="mb-1  ">
              <Link
                to={item.path}
                className={`
                  flex items-center px-3 py-1.5 rounded-md transition-colors duration-200
                  ${
                    location.pathname === item.path
                      ? "bg-gradient-to-r from-[#2F9DCB] to-[#61B0D1] text-white"
                      : " hover:bg-gray-200"
                  }
                `}
                onClick={() => isMobile && setCollapsed(true)}
              >
                <span className="text-xs sm:text-sm">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Overlay */}
      {isMobile && !collapsed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-0"
          onClick={() => setCollapsed(true)}
        />
      )}
    </div>
  );
};

export default Sidebar;
