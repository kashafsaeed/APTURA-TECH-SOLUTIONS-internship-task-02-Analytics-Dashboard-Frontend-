import { useState, useRef, useEffect } from "react";
import { Search, Bell, Sun, Moon } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const [showNotifications, setShowNotifications] = useState(false);

  const notificationRef = useRef(null);

  const user = useSelector((state) => state.auth.user);
  const darkMode = useSelector((state) => state.theme.darkMode);

  // Close notification on outside click & ESC key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 md:ml-64 bg-white dark:bg-[#181825] border-b border-gray-200 dark:border-gray-700">
      <div className="h-16 px-4 md:px-6 flex items-center justify-between">

        {/* Search */}
        <div className="hidden md:flex items-center w-80 bg-gray-100 dark:bg-[#222] rounded-lg px-3 py-2">
          <Search size={18} className="text-gray-500" />

          <input
            type="text"
            placeholder="Search..."
            className="ml-2 w-full bg-transparent outline-none dark:text-white placeholder:text-gray-400"
          />
        </div>

        {/* Mobile Left Space */}
        <div className="md:hidden w-12"></div>

        {/* Right Side */}
        <div className="flex items-center gap-2 md:gap-4 ml-auto">

          {/* Dark Mode */}
          <button
            onClick={() => dispatch(toggleTheme())}
            className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-[#222] hover:bg-gray-200 dark:hover:bg-[#2b2b35] flex items-center justify-center transition"
          >
            {darkMode ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="dark:text-white" />
            )}
          </button>

          {/* Notification */}
          <div className="relative" ref={notificationRef}>
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative w-10 h-10 rounded-lg bg-gray-100 dark:bg-[#222] hover:bg-gray-200 dark:hover:bg-[#2b2b35] flex items-center justify-center transition"
            >
              <Bell size={20} className="dark:text-white" />

              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">
                3
              </span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-3 w-80 rounded-xl bg-white dark:bg-[#181825] border border-gray-200 dark:border-gray-700 shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="font-bold dark:text-white">
                    Notifications
                  </h3>
                </div>

                {/* Body */}
                <div className="max-h-72 overflow-y-auto">

                  <div className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-[#222] cursor-pointer transition">
                    <h4 className="font-semibold dark:text-white">
                      New User Registered
                    </h4>
                    <p className="text-sm text-gray-500">
                      John Doe joined today.
                    </p>
                  </div>

                  <div className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-[#222] cursor-pointer transition">
                    <h4 className="font-semibold dark:text-white">
                      New Order Received
                    </h4>
                    <p className="text-sm text-gray-500">
                      Order #1024 has been placed.
                    </p>
                  </div>

                  <div className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-[#222] cursor-pointer transition">
                    <h4 className="font-semibold dark:text-white">
                      Revenue Increased
                    </h4>
                    <p className="text-sm text-gray-500">
                      Revenue increased by 15% today.
                    </p>
                  </div>

                  <div className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-[#222] cursor-pointer transition">
                    <h4 className="font-semibold dark:text-white">
                      Server Updated
                    </h4>
                    <p className="text-sm text-gray-500">
                      Maintenance completed successfully.
                    </p>
                  </div>

                </div>

                {/* Footer */}
                <div className="p-3 border-t border-gray-200 dark:border-gray-700">
                  <button className="w-full py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition">
                    View All Notifications
                  </button>
                </div>

              </div>
            )}
          </div>

          {/* User */}
          <div className="flex items-center gap-2">

            <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </div>

            <div className="hidden lg:block">
              <h3 className="font-semibold dark:text-white">
                {user?.name || "Guest"}
              </h3>

              <p className="text-xs text-gray-500">
                Administrator
              </p>
            </div>

          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;