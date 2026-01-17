import React, { useEffect, useState } from "react";
import { addToCart, getAllProducts } from "../Api/Api";
// import productData from "../Data/ProductData";
const PoductPage = () => {
  // const allProduct = productData;
  // console.log(allProduct);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getAllProducts();
        console.log(data[0]);
        console.log(data[0].imageData);

        setProducts(data);
      } catch (err) {
        setError("Failed to load api");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading)
    return (
      <div>
        {" "}
        <h1>loading...</h1>
      </div>
    );
  if (error)
    return (
      <div className="bg-green-100/50">
        <h1 className="text-4xl font-poppins font-medium text-center capitalize text-amber-800 h-lvh flex items-center w-fit mx-auto">{error}</h1>
      </div>
    );
  return (
    <div className="bg-green-50/10 mt-4 mb-10">
      <div className=" mx-16 ">
        <div className=" grid grid-cols-3 gap-8 gap-y-11 p-2 ">
          {products.map((items) => (
            <div
              key={items.id}
              className="shadow-md rounded-xl overflow-hidden p-3 hover:shadow-xl duration-300"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={`data:${items.imageType};base64,${items.imageData}`}
                  alt={items.productName}
                  className="h-[450px] w-[450px] rounded-t-lg hover:scale-110 duration-700 object-cover overflow-hidden"
                />
              </div>
              <h1 className="font-poppins font-bold capitalize pl-9 mt-3 text-gray-600 text-xl ">
                {items.productName}
              </h1>
              <p className="font-poppins pl-9 text-gray-400 mt-2 text-lg">
                ₹ {items.productPrice}
              </p>
              <p className="font-poppins pl-9 text-green-600 capitalize mt-2 w-[400px] truncate font-medium  tracking-wide mb-5">
                {items.productDescription}
              </p>
              <div className="ml- mb-3">
                <button
                  className="border outline-none w-full font-poppins font-medium text-white bg-amber-400  capitalize px-5 rounded py-2 hover:bg-amber-500 duration-500"
                  onClick={async () => {
                    try {
                      const product = items.id;
                      const quantity = 1;
                      const res = await addToCart(product, quantity);
                    } catch (error) {
                      alert("Failed to add product");
                    }
                  }}
                >
                  add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PoductPage;
