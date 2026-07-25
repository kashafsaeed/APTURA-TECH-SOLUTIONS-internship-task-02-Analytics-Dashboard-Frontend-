import { useState } from "react";
import {
  Search,
  Bell,
  Moon,
  Sun,
  UserCircle,
} from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md px-4 md:px-6 py-4 flex items-center justify-end md:ml-64 transition-colors duration-300">

      {/* Right Side */}
      <div className="flex items-center gap-3 md:gap-5">

        {/* Search */}
        <div className="hidden sm:flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg">
          <Search
            size={18}
            className="text-gray-500 dark:text-gray-300"
          />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-2 text-sm text-gray-700 dark:text-white placeholder:text-gray-400"
          />
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-purple-600 dark:hover:bg-purple-600 transition"
        >
          {darkMode ? (
            <Sun className="text-yellow-400" size={20} />
          ) : (
            <Moon className="text-gray-700" size={20} />
          )}
        </button>

        {/* Notifications */}
        <button className="relative p-2 rounded-full hover:bg-purple-600 dark:hover:bg-purple-600 transition">
          <Bell
            size={20}
            className="text-gray-700 dark:text-white"
          />

          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <UserCircle
            size={38}
            className="text-gray-700 dark:text-white"
          />

          <div className="hidden lg:block">
            <h3 className="font-semibold text-gray-800 dark:text-white">
              John Deo
            </h3>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              Administrator
            </p>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;