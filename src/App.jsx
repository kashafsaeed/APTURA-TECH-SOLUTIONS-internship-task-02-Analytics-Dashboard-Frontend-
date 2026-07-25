
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Profile from "./pages/Profile";
import Notifications from "./components/Notifications";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Dashboard Routes */}
      <Route
        path="/"
        element={
          <>
            <Sidebar />
            { <Dashboard /> }
          </>
        }
      />

      <Route
        path="/users"
        element={
          <>
            <Sidebar />
            <Users />
          </>
        }
      />
      <Route
      path="/Notifications"
      element={
        <>
        <Sidebar/>
        <Notifications />

        
        </>
      }
      />

      <Route
        path="/profile"
        element={
          <>
            <Sidebar />
            <Profile />
          </>


        }
      />
    </Routes>
  );
}

export default App;