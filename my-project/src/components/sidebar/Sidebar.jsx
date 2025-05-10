import React, { useState, useEffect } from "react";
import { BiLeftArrow, BiLogOut, BiMoney } from "react-icons/bi";
import { BsFilePerson } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { TbWorldShare } from "react-icons/tb";
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
      icon: TbWorldShare,
    },
    {
      name: "Invitation List",
      path: "/invitation-list",
      icon: BiMoney,
    },
    {
      name: "Book Meeting Room",
      path: "/invitation-list",
      icon: BiMoney,
    },
    {
      name: "Calendar View",
      path: "/invitation-list",
      icon: BiMoney,
    },
    {
      name: "Meeting Room View",
      path: "/invitation-list",
      icon: BiMoney,
    },
    {
      name: "Settings",
      path: "/invitation-list",
      icon: BiMoney,
    },
    {
      name: "Emergency Alert",
      path: "/invitation-list",
      icon: BiMoney,
    },
    {
      name: "Helpdesk",
      path: "/invitation-list",
      icon: BiMoney,
    },
  ];

  //  logout function
  // const handleLogout = () => {
  //   console.log("User logged out");
  //   localStorage.removeItem("auth"); // Remove only auth-related data
  //   window.location.reload();
  // };

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
          {navItems.map((item) => (
            <li key={item.path} className="mb-1  ">
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

      {/* User Profile */}
      {/* <div
        className={`p-4  flex ${collapsed ? "justify-center" : "items-center"}`}
      >
        {collapsed ? (
          <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
            SK
          </div>
        ) : (
          <>
            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              SK
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">Suraj Kumar</p>
              <p className="text-xs text-gray-400">Frontend dev.</p>
            </div>
          </>
        )}
      </div> */}

      {/* Logout Button */}
      {/* <div className="p-4  mt-auto">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-all text-white"
        >
          <BiLogOut className="text-lg" />
          {!collapsed && <span className="ml-2">Logout</span>}
        </button>
      </div> */}

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
