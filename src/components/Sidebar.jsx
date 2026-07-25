
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  LayoutDashboard,
  Users,
  BarChart3,
  Bell,
  User,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

const menuItems = [
  { name: "Dashboard", path: "/", icon: <LayoutDashboard size={20} /> },
  { name: "Users", path: "/users", icon: <Users size={20} /> },
  // { name: "Analytics", path: "/analytics", icon: <BarChart3 size={20} /> },
  { name: "Notifications", path: "/notifications", icon: <Bell size={20} /> },
  { name: "Profile", path: "/profile", icon: <User size={20} /> },
];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-purple-600 text-white rounded-lg md:hidden"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-64
        bg-white dark:bg-[#181825]
        border-r border-gray-200 dark:border-gray-700
        transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-2xl font-bold text-purple-600">
            Admin Panel
          </h1>
        </div>

        {/* Menu */}
        <ul className="mt-5 px-3 space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
  <NavLink
    to={item.path}
    className="flex items-center gap-3 px-4 py-3 rounded-lg
    text-gray-700 dark:text-gray-200
    hover:bg-purple-600 hover:text-white transition-all duration-300"
  >
    {item.icon}
    <span>{item.name}</span>
  </NavLink>
</li>
          ))}
        </ul>

        {/* Logout */}
        <div className="absolute bottom-6 left-0 w-full px-3">
          <button
            className="w-full flex items-center justify-center gap-2
            bg-purple-600 hover:bg-purple-700
            text-white py-3 rounded-lg"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;