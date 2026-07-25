// import { useState } from "react";

// import { useDispatch } from "react-redux";
// import { signup } from "./store/authSlice";
// import { useNavigate, Link } from "react-router-dom";

// const Signup = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     phone: "",
//     address: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Save registered user
//     localStorage.setItem(
//       "registeredUser",
//       JSON.stringify(formData)
//     );

//     // Login immediately after signup
//     dispatch(
//       signup({
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//         address: formData.address,
//       })
//     );

//     alert("Signup Successful!");
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#0f172a] px-4 py-8">
//       <div className="w-full max-w-md bg-white dark:bg-[#181825] p-8 rounded-xl shadow-lg">
//         <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">
//           Sign Up
//         </h2>

//         <form onSubmit={handleSubmit}>
//           {/* Name */}
//           <div className="mb-4">
//             <label className="block mb-2 dark:text-gray-300">
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full border px-4 py-3 rounded-lg dark:bg-[#222] dark:border-gray-700 dark:text-white"
//             />
//           </div>

//           {/* Email */}
//           <div className="mb-4">
//             <label className="block mb-2 dark:text-gray-300">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full border px-4 py-3 rounded-lg dark:bg-[#222] dark:border-gray-700 dark:text-white"
//             />
//           </div>

//           {/* Password */}
//           <div className="mb-4">
//             <label className="block mb-2 dark:text-gray-300">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full border px-4 py-3 rounded-lg dark:bg-[#222] dark:border-gray-700 dark:text-white"
//             />
//           </div>

//           {/* Phone */}
//           <div className="mb-4">
//             <label className="block mb-2 dark:text-gray-300">
//               Phone
//             </label>
//             <input
//               type="text"
//               name="phone"
//               placeholder="Enter Phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full border px-4 py-3 rounded-lg dark:bg-[#222] dark:border-gray-700 dark:text-white"
//             />
//           </div>

//           {/* Address */}
//           <div className="mb-6">
//             <label className="block mb-2 dark:text-gray-300">
//               Address
//             </label>
//             <textarea
//               name="address"
//               rows="3"
//               placeholder="Enter Address"
//               value={formData.address}
//               onChange={handleChange}
//               className="w-full border px-4 py-3 rounded-lg resize-none dark:bg-[#222] dark:border-gray-700 dark:text-white"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold"
//           >
//             Sign Up
//           </button>
//         </form>

//         <p className="text-center mt-5 dark:text-gray-300">
//           Already have an account?{" "}
//           <Link
//             to="/login"
//             className="text-purple-600 font-semibold"
//           >
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;



import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../redux/authSlice";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  // state...

  const handleSubmit = (e) => {
    // ...
  };

  return (
    <div>
      {/* Signup Form */}
    </div>
  );
};

export default Signup;