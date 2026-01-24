import { useEffect, useState } from "react";
import { getMyOrders } from "../Api/Api";

function OrderPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getMyOrders();
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <div className="mx-16 mt-14 mb-16 font-poppins">
      <h1 className="text-3xl font-bold text-green-600 mb-8">
        My Purchase History
      </h1>

      {orders.length === 0 ? (
        <p className="text-gray-500">No orders placed yet. Go shopping!</p>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-100">
          <table className="min-w-full bg-white text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-gray-700">
                  Product
                </th>
                <th className="px-6 py-4 font-semibold text-gray-700">
                  Quantity
                </th>
                <th className="px-6 py-4 font-semibold text-gray-700">
                  Total Price
                </th>
                <th className="px-6 py-4 font-semibold text-gray-700">Date</th>
                <th className="px-6 py-4 font-semibold text-gray-700">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 duration-200">
                  <td className="px-6 py-4 flex items-center gap-4">
                    <img
                      src={`data:${order.product.imageType};base64,${order.product.imageData}`}
                      className="h-12 w-12 rounded object-cover"
                      alt=""
                    />
                    <span className="font-medium">
                      {order.product.productName}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{order.quantity}</td>
                  <td className="px-6 py-4 font-bold text-green-600">
                    ₹ {order.totalPrice}
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-sm">
                    {new Date(order.orderDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase">
                      {order.success}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default OrderPage;
