// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "./store/authSlice";
// import { useNavigate, Link } from "react-router-dom";

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Get registered user
//     const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

//     if (!savedUser) {
//       alert("No account found. Please sign up first.");
//       return;
//     }

//     if (
//       savedUser.email === formData.email &&
//       savedUser.password === formData.password
//     ) {
//       dispatch(
//         login({
//           name: savedUser.name,
//           email: savedUser.email,
//           phone: savedUser.phone || "",
//           address: savedUser.address || "",
//         })
//       );

//       alert("Login Successful!");
//       navigate("/");
//     } else {
//       alert("Invalid Email or Password");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#0f172a] px-4">
//       <div className="w-full max-w-md bg-white dark:bg-[#181825] p-8 rounded-xl shadow-lg">
//         <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">
//           Login
//         </h2>

//         <form onSubmit={handleSubmit}>
//           <div className="mb-5">
//             <label className="block mb-2 dark:text-gray-300">Email</label>
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

//           <div className="mb-6">
//             <label className="block mb-2 dark:text-gray-300">Password</label>
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

//           <button
//             type="submit"
//             className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-center mt-5 dark:text-gray-300">
//           Don't have an account?{" "}
//           <Link to="/signup" className="text-purple-600 font-semibold">
//             Sign Up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;



// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { login } from "./store/authSlice";
// import { useNavigate, Link } from "react-router-dom";

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Get registered user
//     const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

//     if (!savedUser) {
//       alert("No account found. Please sign up first.");
//       return;
//     }

//     if (
//       savedUser.email === formData.email &&
//       savedUser.password === formData.password
//     ) {
//       dispatch(
//         login({
//           name: savedUser.name,
//           email: savedUser.email,
//           phone: savedUser.phone || "",
//           address: savedUser.address || "",
//         })
//       );

//       alert("Login Successful!");
//       navigate("/");
//     } else {
//       alert("Invalid Email or Password");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#0f172a] px-4">
//       <div className="w-full max-w-md bg-white dark:bg-[#181825] p-8 rounded-xl shadow-lg">
//         <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">
//           Login
//         </h2>

//         <form onSubmit={handleSubmit}>
//           <div className="mb-5">
//             <label className="block mb-2 dark:text-gray-300">Email</label>
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

//           <div className="mb-6">
//             <label className="block mb-2 dark:text-gray-300">Password</label>
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

//           <button
//             type="submit"
//             className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-center mt-5 dark:text-gray-300">
//           Don't have an account?{" "}
//           <Link to="/signup" className="text-purple-600 font-semibold">
//             Sign Up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;










import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get all registered users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find user
    const foundUser = users.find(
      (user) =>
        user.email === formData.email &&
        user.password === formData.password
    );

    if (!foundUser) {
      alert("Invalid Email or Password");
      return;
    }

    // Save current logged in user
    localStorage.setItem("user", JSON.stringify(foundUser));
    localStorage.setItem("isLoggedIn", JSON.stringify(true));

    // Redux Login
    dispatch(
      login({
        name: foundUser.name,
        email: foundUser.email,
        phone: foundUser.phone,
        address: foundUser.address,
      })
    );

    alert("Login Successful!");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#0f172a] px-4">
      <div className="w-full max-w-md bg-white dark:bg-[#181825] p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-5">
            <label className="block mb-2 dark:text-gray-300">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border px-4 py-3 rounded-lg dark:bg-[#222] dark:border-gray-700 dark:text-white"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block mb-2 dark:text-gray-300">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border px-4 py-3 rounded-lg dark:bg-[#222] dark:border-gray-700 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-5 dark:text-gray-300">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-purple-600 font-semibold"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;




