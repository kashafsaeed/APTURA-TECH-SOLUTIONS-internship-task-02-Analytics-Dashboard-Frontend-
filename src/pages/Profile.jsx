// import { useState } from "react";

// const Profile = () => {
//   const [user, setUser] = useState({
//     name: "John Doe",
//     email: "",
//     phone: "",
//     address: "",
//   });

//   return (
//     <div className="md:ml-64 min-h-screen bg-gray-100 dark:bg-[#0f172a] p-4 sm:p-6">
//       <div className="max-w-3xl mx-auto">
//         <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 dark:text-white">
//           Profile
//         </h1>

//         <div className="bg-white dark:bg-[#181825] p-5 sm:p-8 rounded-xl shadow-lg">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             {/* Name */}
//             <div>
//               <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 value={user.name}
//                 onChange={(e) =>
//                   setUser({ ...user, name: e.target.value })
//                 }
//                 className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 dark:bg-[#181825] dark:border-gray-700 dark:text-white"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 value={user.email}
//                 onChange={(e) =>
//                   setUser({ ...user, email: e.target.value })
//                 }
//                 className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 dark:bg-[#181825] dark:border-gray-700 dark:text-white"
//               />
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
//                 Phone
//               </label>
//               <input
//                 type="text"
//                 value={user.phone}
//                 onChange={(e) =>
//                   setUser({ ...user, phone: e.target.value })
//                 }
//                 className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 dark:bg-[#181825] dark:border-gray-700 dark:text-white"
//               />
//             </div>

//             {/* Address */}
//             <div>
//               <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
//                 Address
//               </label>
//               <input
//                 type="text"
//                 value={user.address}
//                 onChange={(e) =>
//                   setUser({ ...user, address: e.target.value })
//                 }
//                 className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-600 dark:bg-[#181825] dark:border-gray-700 dark:text-white"
//               />
//             </div>
//           </div>

//           <div className="mt-6 flex justify-end">
//             <button
//               onClick={() => console.log(user)}
//               className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition"
//             >
//               Save Changes
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;




import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../redux/authSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.auth.user);

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (loggedInUser) {
      setUser({
        name: loggedInUser.name || "",
        email: loggedInUser.email || "",
        phone: loggedInUser.phone || "",
        address: loggedInUser.address || "",
      });
    }
  }, [loggedInUser]);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    dispatch(updateProfile(user));

    // Update registered user as well
    const registeredUser = JSON.parse(
      localStorage.getItem("registeredUser")
    );

    if (registeredUser) {
      localStorage.setItem(
        "registeredUser",
        JSON.stringify({
          ...registeredUser,
          ...user,
        })
      );
    }

    alert("Profile Updated Successfully!");
  };

  return (
    <div className="md:ml-64 min-h-screen bg-gray-100 dark:bg-[#0f172a] p-4 sm:p-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Welcome, {user.name} 👋
        </h1>

        <div className="bg-white dark:bg-[#181825] rounded-xl shadow-lg p-8 min-h-[650px]">
          {/* Name */}
          <div className="mb-5">
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg dark:bg-[#222] dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-purple-600 outline-none"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg dark:bg-[#222] dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-purple-600 outline-none"
            />
          </div>

          {/* Phone */}
          <div className="mb-5">
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg dark:bg-[#222] dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-purple-600 outline-none"
            />
          </div>

          {/* Address */}
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">
              Address
            </label>
            <textarea
              rows="4"
              name="address"
              value={user.address}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg resize-none dark:bg-[#222] dark:border-gray-700 dark:text-white focus:ring-2 focus:ring-purple-600 outline-none"
            />
          </div>

          <button
            onClick={handleSave}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;