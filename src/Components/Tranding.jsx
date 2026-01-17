import React, { useEffect, useState } from "react";
import productData from "../Data/ProductData";
import { motion } from "framer-motion";
import { getAllProducts } from "../Api/Api";
const Tranding = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = await getAllProducts();

        setProduct(product);
      } catch (error) {
        throw new error;
      }
    };
    fetchData();
  }, []);
  const items = product.filter((trending) => trending.trending === true);

  const ContainerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <div className="mt-10 mb-2 pb-9 space-y-4">
        <div className="text-center">
          <p className="flex items-center border capitalize w-fit mx-auto gap-x-2 px-3  font-poppins font-medium py-2 rounded-xl bg-gradient-to-br from-green-400 via-green-400 to-green-300 text-white  text-[12px] ">
            <i className="text-red-500">🔥</i>
            trending now
          </p>
        </div>
        <div className="text-center ">
          <h1 className="text-3xl font-bold text-gray-600 font-poppins capitalize tracking-wide">
            Best Selling Gifts
          </h1>
        </div>
        <div className="text-center">
          <p className="mx-auto w-[650px] font-poppins font-medium  text-gray-500 leading-8">
            Our most loved personalized gifts that customers can't stop talking
            about!
          </p>
        </div>
        <motion.div
          variants={ContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-4 mx-24 gap-3 gap-y-8 "
        >
          {items.map((product) => (
            <motion.div
              variants={cardVariants}
              transition={{ duration: 0.5 }}
              key={product.id}
              className="rounded-lg shadow pb-5 w-[305px] hover:scale-105 hover:shadow-lg hover:-mt-3 duration-500 bg-white"
            >
              <div className="  rounded-t-lg">
                {/* <i
                  className={` bg-gradient-to-br ${items.color} flex  flex-col rounded-t-lg items-center py-20 text-4xl h-48 border`}
                >
                  {product.icon}
                </i> */}
                <img
                  src={`data:${product.imageType};base64,${product.imageData}`}
                  alt={product.productName}
                  className="h-[300px] w-[310px] object-cover"
                />
              </div>
              <div className=" ml-8 mt-6">
                <h1 className="font-poppins font-semibold capitalize text-gray-600 tracking-wide text-xl">
                  {product.productName}
                </h1>
              </div>
              <div className=" ml-8 mt-2 mr-2">
                <p className="font-poppins font-medium text-[13px] capitalize text-gray-400 tracking-wide">
                  {product.productDescription}
                </p>
              </div>
              <div>
                <p className="font-poppins text-[16px] ml-8 mt-3 font-semibold tracking-wide text-green-500">
                  ₹ {product.productPrice}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Tranding;
