import { useEffect, useState } from "react";
import { adminDashboard } from "../Api/Api";
import {
  Banknote,
  Package,
  ShoppingBag,
  ShoppingCart,
  User,
} from "lucide-react";
import RecentOrder from "../Components/RecentOrders";
const AdminDashboard = () => {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdmindashboard = async () => {
      try {
        const statistics = await adminDashboard();
        setStats(statistics);
        console.log(statistics);
        setLoading(false);
      } catch (error) {
        setLoading(true);
      }
    };
    fetchAdmindashboard();
  }, []);

  if (loading === true) {
    return (
      <div>
        <h1 className="text-2xl font-poppins w-fit mx-auto capitalize text-red-800 mt-40">
          loading dataa....
        </h1>
      </div>
    );
  }

  const statsCardData = [
    {
      name: "Total Order",
      value: stats.totalOrder,
      icon: <ShoppingBag />,
    },
    {
      name: "Total Products",
      value: stats.totalProduct,
      icon: <Package />,
    },
    {
      name: "Total Revenue",
      value: `₹ ${stats.totalRevenue.toLocaleString('en-IN')}`,
      icon: <Banknote />,
    },
    {
      name: "Total User",
      value: stats.totalUser,
      icon: <User />,
    },
  ];

  if (!stats) {
    return (
      <div>
        <h1>macha database la irunthu data varalaa... </h1>
      </div>
    );
  }
  return (
    <>
      <div>
        <div className="text-poppins flex items-center ml-8 mt-5 gap-x-3 w-fit p">
          <i className=" p-3 rounded-xl bg-green-700 text-white">
            {<ShoppingCart />}
          </i>
          <div>
            <h1 className="font-semibold text-[20px] tracking-wide capitalize text-gray-700">
              SmileCart dashboard
            </h1>
            <p className="font-poppins font-medium text-green-500 text-[13px]">
              welcome back Admin
            </p>
          </div>
        </div>
        <div className="flex gap-x-20 items-center mt-20 px-10">
          {statsCardData.map((datas, index) => (
            <div
              key={index}
              className="text-center px-5 py-3 bg-green-200/20 shadow-md"
            >
              <div className="flex items-center gap-x-8">
                <i className=" text-green-600">{datas.icon}</i>
                <h1 className="font-mono font-semibold tracking-wide text-green-700 text-[20px]">
                  {datas.name}
                </h1>
              </div>
              <p className="text-gray-600 font-mono font-medium tracking-wide mt-3 text-[24px]">
                {datas.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <RecentOrder/>
    </>
  );
};

export default AdminDashboard;
