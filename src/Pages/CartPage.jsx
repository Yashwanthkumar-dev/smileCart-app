import { useEffect, useState } from "react";
import {
  allCartProducts,
  deleteAllCarts,
  deleteCartById,
  placeOrder,
} from "../Api/Api";

function CartPage() {
  const [allCart, setAllCart] = useState([]);
  const totalProductPrice = allCart.reduce((acc, items) => {
    return acc + items.product.productPrice * items.quantity;
  }, 0);
  const handlePlaceOrder = async () => {
    try {
      
      const res = await placeOrder();
      console.log(res);
      alert("order have been placed successfully");
      fetchCart();
     
    } catch (error) {
      alert("order was not placed ");
    }
  };
  
  const fetchCart = async () => {
    const carts = await allCartProducts();
    console.log(carts);
    const filterCarts = carts.filter((c) => c.product !== null);
    setAllCart(filterCarts);
  };

  useEffect(() => {
    try {
     
      fetchCart();
    } catch (error) {
      alert(error);
    }
  }, []);
  const handleDelete = async (cartId) => {
    await deleteCartById(cartId);
    setAllCart((prev) => prev.filter((p) => p.id !== cartId));
    alert("cart items was deleted ");
  };

  const handleALLCartDelete = async () => {
    await deleteAllCarts();
    setAllCart([]);
  };
  return (
    <>
      <div className="mx-16 mt-14 mb-7 flex justify-between items-center ">
        <h1 className="text-[38px] text-green-600 font-poppins font-bold tracking-wide ">
          All Carts
        </h1>
        <div className="flex items-center gap-3">
          <button
            className="px-4 py-2 bg-amber-700 outline-none text-white font-poppins font-semibold capitalize rounded-lg text-center ml-[16px]  hover:bg-amber-900 duration-500"
            onClick={handleALLCartDelete}
          >
            remove all
          </button>
          <button
            onClick={handlePlaceOrder}
            disabled={allCart.length === 0}
            className={`text-lg font-medium font-poppins capitalize px-3 py-1.5 rounded-lg text-white ${
              allCart.length === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-amber-600 hover:bg-amber-700"
            }`}
          >
            place order
          </button>

          {allCart.length > 0 && (
            <div className="flex flex-col items-end">
              <span className="text-gray-500 text-sm font-poppins uppercase tracking-wider">
                Total Amount
              </span>
              <span className="text-2xl font-bold text-green-600 font-poppins">
                ₹ {totalProductPrice.toLocaleString()}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className=" mx-16  mb-16">
        <div>
          {allCart.length === 0 ? (
            <div className="text-center">
              <h1 className="text-2xl font-poppins font-bold text-amber-500">
                Cart was Empty
              </h1>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-3 gap-y-10 ">
              {allCart.map((items) => (
                <div className=" pb-3 shadow w-[330px] rounded-lg">
                  <img
                    src={`data:${items.product.imageType};base64 , ${items.product.imageData}`}
                    alt={items.product.productName}
                    className="h-[350px] w-[500px] rounded-t-lg"
                  />
                  <h1 className="font-poppins font-bold tracking-wide text-gray-600 text-[18px] ml-[19px] mt-[10px]">
                    {items.product.productName}
                  </h1>
                  <h2 className="font-poppins font-semibold tracking-wide text-[14px] capitalize text-gray-400 ml-[19px] mt-[6px] w-[230px] overflow-hidden truncate">
                    {items.product.productDescription}
                  </h2>
                  <div className="flex items-center justify-between mx-2">
                    <p className="font-poppins font-semibold tracking-wide text-[18px]  ml-[19px] mt-[6px] text-green-600">
                      ₹ {items.product.productPrice}
                    </p>
                    <p className="mr-7 bg-green-100 px-2 rounded-full text-[17px]">
                      {items.quantity}
                    </p>
                  </div>

                  <div>
                    <button
                      className="px-4 py-2 bg-amber-700 text-white font-poppins font-semibold capitalize rounded-lg text-center ml-[16px] mt-[10px] hover:bg-amber-900 duration-500"
                      onClick={() => handleDelete(items.id)}
                    >
                      remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CartPage;
