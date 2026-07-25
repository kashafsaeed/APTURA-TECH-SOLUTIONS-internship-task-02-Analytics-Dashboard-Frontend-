import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    setUsers(savedUsers);
  }, []);

  return (
    <div className="md:ml-64 p-6">
      <h2 className="text-2xl font-bold mb-6 dark:text-white">
        Registered Users
      </h2>

      <div className="overflow-x-auto bg-white dark:bg-[#181825] rounded-lg shadow">
        <table className="w-full">
          <thead className="bg-purple-600 text-white">
            <tr>
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
            </tr>
          </thead>

          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr
                  key={index}
                  className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-[#222]"
                >
                  <td className="p-3 dark:text-white">{index + 1}</td>
                  <td className="p-3 dark:text-white">{user.name}</td>
                  <td className="p-3 dark:text-white">{user.email}</td>
                  <td className="p-3 dark:text-white">
                    {user.phone || "-"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="text-center p-6 text-gray-500 dark:text-gray-400"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;