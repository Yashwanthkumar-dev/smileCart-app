import { useEffect, useState } from "react";
import { getAllOrder } from "../Api/Api";

const RecentOrder = () => {
  const [recentOrders, setRecentOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentOrdersData = async () => {
      try {
        const data = await getAllOrder();
        setRecentOrders(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.log("error message :" + error);
        setLoading(false);
      }
    };
    fetchRecentOrdersData();
  }, []);

  if (loading) return <div className="ml-10 mt-10">Loading orders...</div>;

  return (
    <>
      <div className="bg-white border border-gray-100 ml-10 mr-10 mt-10 p-6 rounded-xl shadow-sm">
        <div>
          <h1 className="text-xl font-mono font-semibold capitalize text-green-800 mb-6">
            Recent Orders
          </h1>
        </div>

        <div className="overflow-x-auto">
          
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-green-700 text-white uppercase text-[15px]
                tracking-wider font-mono">
                <th className="p-4 font-semibold font-mono">ID</th>
                <th className="p-4 font-semibold font-mono">ORDER DATE</th>
                <th className="p-4 font-semibold font-mono">PRODUCT NAME</th>
                <th className="p-4 font-semibold font-mono">USER NAME</th>
                <th className="p-4 font-semibold text-right pr-10 font-mono">
                  TOTAL PRICE
                </th>
              </tr>
            </thead>

            <tbody>
              {recentOrders &&
                recentOrders.map((recentOrder) => (
                  <tr
                    key={recentOrder.id}
                    className="border-b hover:bg-green-50/50 transition-colors font-mono"
                  >
                    <td className="p-4 font-medium text-gray-700 font-mono">
                      #{recentOrder.id}
                    </td>
                    <td className="p-4 text-gray-600">
                      {recentOrder.orderDate
                        ? new Date(recentOrder.orderDate).toLocaleDateString(
                            "en-GB",
                          )
                        : "N/A"}
                    </td>
                    <td className="p-4 text-gray-800 font-mono">
                      {recentOrder.product?.productName || "Product deleted"}
                    </td>
                    <td className="p-4 text-gray-600 capitalize font-mono">
                      {recentOrder.user?.firstName} {recentOrder.user?.lastName}
                    </td>
                    <td className="p-4 font-bold text-gray-900 text-right pr-10 font-mono">
                      ₹
                      {recentOrder.totalPrice?.toLocaleString(
                        "en-IN",
                      ) || "0"}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RecentOrder;
