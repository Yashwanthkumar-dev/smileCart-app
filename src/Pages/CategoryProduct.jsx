import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllProductByCategory } from "../Api/Api";

const CategoryProduct = () => {
  const { categoryId } = useParams();

  const [allCategory, setAllCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const getAllCategory = await getAllProductByCategory(categoryId);
        setLoading(true);
        setAllCategory(getAllCategory);
        setLoading(false);
        console.log(getAllCategory);
      } catch (error) {
        console.log("error message category:" + error);
        setLoading(false);
        setAllCategory([]);
      }
      fetchCategory();
    };
  }, [categoryId]);
if(loading === false){
  return(
    <div className="text-center">
      <h1 className="text-center text-2xl font-poppins font-semiBold ">Product loading...</h1>
    </div>
  )
}

  return (
    <div className=" px-10 mt-8">
      {allCategory.length === 0 ? (
        <div className="flex justify-center items-center mt-2 mb-7">
          <h1 className="text-3xl font-poppins text-red-600 font-medium uppercase">
            Product was not found
          </h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {allCategory.map((product) => (
            <div
              key={product.id}
              className="shadow-md rounded-xl p-3 hover:shadow-xl duration-300"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={`data:${product.product.imageType};base64,${product.product.imageData}`}
                  alt={product.name}
                  className="w-full h-[350px] object-cover hover:scale-110 duration-700"
                />
              </div>

              <h1 className="font-poppins font-semibold text-xl mt-3 text-gray-700">
                {product.name}
              </h1>

              <p className="text-gray-500 font-poppins mt-1">
                ₹ {product.price}
              </p>

              <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 duration-300">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;
