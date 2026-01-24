import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllProductByCategory, addToCart } from "../Api/Api"; // addToCart add pannittaen

const CategoryProduct = () => {
  const { categoryId } = useParams();
  const [allCategory, setAllCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setLoading(true);
        const data = await getAllProductByCategory(categoryId);
        // data.product irundha set pannu macha
        if (data && data.product) {
          setAllCategory(data.product);
        } else {
          setAllCategory([]);
        }
      } catch (error) {
        console.error("error message category:" + error);
        setAllCategory([]);
      } finally {
        setLoading(false);
      }
    };

    if (categoryId) {
      fetchCategory();
    }
  }, [categoryId]);

  const handleAddToCart = async (productId) => {
    try {
      const response = await addToCart(productId, 1);
    } catch (error) {
      console.error("Cart error:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-poppins font-semibold animate-pulse text-green-600">
          Searching for products...
        </h1>
      </div>
    );
  }

  return (
    <div className="px-10 mt-8 mb-20">
      {allCategory.length === 0 ? (
        <div className="text-center mt-20">
          <h1 className="text-3xl font-poppins text-gray-400 font-medium uppercase">
            No products found in this category
          </h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {allCategory.map((product) => (
            <div
              key={product.id}
              className="shadow-md rounded-xl p-3 hover:shadow-2xl duration-300 bg-white border border-gray-100"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={`data:${product.imageType};base64,${product.imageData}`}
                  alt={product.productName}
                  className="w-full h-[280px] object-cover hover:scale-110 duration-700"
                />
              </div>

              <div className="mt-4">
                <h1 className="font-poppins font-semibold text-lg text-gray-700 truncate">
                  {product.productName}
                </h1>

                <p className="text-green-600 font-bold font-poppins text-xl mt-1">
                  ₹ {product.productPrice}
                </p>

                <button
                  onClick={() => handleAddToCart(product.id)} // Button click-la function call
                  className="mt-4 w-full bg-amber-600 text-white py-2.5 rounded-lg font-poppins font-medium hover:bg-amber-700 transition-colors duration-300 flex justify-center items-center gap-2"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;
