import { useState } from "react";
import {Menu, X, LayoutDashboard, Users, BarChart3, Bell,Settings,User, LogOut} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Users", icon: <Users size={20} /> },
    { name: "Analytics", icon: <BarChart3 size={20} /> },
    { name: "Notifications", icon: <Bell size={20} /> },
    { name: "Profile", icon: <User size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
    { name: "Logout", icon: <LogOut size={20} /> },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-purple-600 text-white p-2 rounded"
      >
        <Menu />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white p-5  transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Anlytics Dashboard</h2>

          <button className="md:hidden" onClick={() => setIsOpen(false)}>
            <X />
          </button>
        </div>

        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-600 cursor-pointer transition"
            >
              {item.icon}
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
