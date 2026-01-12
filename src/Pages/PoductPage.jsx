import React, { useEffect, useState } from "react";
import { getAllProducts } from "../Api/productApi";
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
      <div>
        <h1>{error}</h1>
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
              <p className="font-poppins pl-9 text-green-600 capitalize mt-2 font-medium  tracking-wide mb-5">
                {items.productDescription}
              </p>
              <div className="ml- mb-3">
                <button className="border w-full font-poppins font-medium text-white bg-amber-400  capitalize px-5 rounded py-2 hover:bg-amber-500 duration-500">
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
