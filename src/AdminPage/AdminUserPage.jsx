import { useEffect, useState } from "react";
import { deleteAllUser, deleteUserById, getAllUser, getTotalUserCount } from "../Api/Api";
import { Users, Mail, Phone, UserCircle, Delete } from "lucide-react";

function AdminUserPage() {
  const [allUser, setAllUser] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [totalUser, settotalUser] = useState(0);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const allUserDatas = await getAllUser();
        const totalUserData = await getTotalUserCount();
        console.log(allUserDatas);
        setAllUser(allUserDatas);
        settotalUser(totalUserData);

        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchUser();
  }, []);
  const handleDeleteById = async (email) => {
    try {
      await deleteUserById(email);
      setAllUser(allUser.filter((user) => user.email !== email));
      settotalUser((prev) => prev - 1);
    } catch (error) {
      console.log("user was not found");
    }
  };

  const handleDeleteAllUser = async () => {
    try {
      console.log("user was deleted successfully");
      await deleteAllUser();
    } catch (error) {
      console.log("user was not found");
    }
  };
  if (error) {
    return (
      <div className="text-2xl font-poppins font-medium text-red-500 text-center capitalize mt-40 outline-none">
        User details not found !
      </div>
    );
  }

  if (loading) {
    return (
      <div className="text-center mt-40 text-gray-500 font-poppins animate-bounce">
        Loading User Data... 🚀
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      <div className="bg-white shadow-sm mx-[20px] mt-5 p-6 rounded-xl flex items-center justify-between border border-gray-100">
        <div className="flex items-center gap-3">
          <div className="bg-green-100 p-3 rounded-lg text-green-600">
            <UserCircle size={28} />
          </div>
          <h1 className="text-2xl font-bold font-poppins text-gray-800">
            User Management
          </h1>
        </div>
        <div className="items-center flex gap-x-3">
          <div>
            <button
              onClick={handleDeleteAllUser}
              className="px-4 py-2 bg-red-500 text-xl font-poppins font-medium capitalize text-white rounded-lg hover:bg-red-700 transition duration-500"
            >
              remove all
            </button>
          </div>

          <div className="flex items-center gap-x-3 bg-amber-50 px-5 py-3 rounded-xl border border-amber-100">
            <Users className="text-amber-600" size={20} />
            <h1 className="text-lg font-semibold font-poppins text-amber-700 capitalize">
              Total Users: {totalUser}
            </h1>
          </div>
        </div>
      </div>
      <div className="mx-[20px] mt-10 overflow-hidden bg-white rounded-xl shadow-sm border border-gray-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 text-xs uppercase tracking-wider font-bold">
              <th className="p-4">Name</th>

              <th className="p-4">
                <div className="flex items-center gap-2">
                  <Mail size={16} /> Email Address
                </div>
              </th>

              <th className="p-4">
                <div className="flex items-center gap-2">
                  <Phone size={16} /> Phone Number
                </div>
              </th>

              <th>
                <div className="flex items-center gap-2">
                  <Delete size={20} /> Action
                </div>
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {allUser.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium text-gray-800 capitalize">
                  {user.firstName} {user.lastName}
                </td>

                <td className="p-4 text-blue-600">{user.email}</td>

                <td className="p-4 text-gray-500 font-mono text-sm">
                  {user.phoneNumber || "Not Provided"}
                </td>

                <td>
                  <button
                    onClick={() => handleDeleteById(user.email)}
                    className="text-md font-poppins font-medium text-white px-3 py-2 bg-red-500 rounded-lg capitalize outline-none"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminUserPage;
