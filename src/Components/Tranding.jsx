import React from "react";
import productData from "../Data/ProductData";
import { motion } from "framer-motion";
const Tranding = () => {
  const product = productData.filter((trendingItems) => {
    return trendingItems.isTrending;
  });
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
          {product.map((items) => (
            <motion.div
            variants ={cardVariants}
              transition={{duration:0.5}}
              key={items.id}
              className="rounded-lg shadow pb-7 w-[305px] hover:scale-105 hover:shadow-lg hover:-mt-3 duration-500 bg-white"
            >
              <div className=" h-40 rounded-t-lg">
                <i
                  className={` bg-gradient-to-br ${items.color} flex  flex-col rounded-t-lg items-center py-20 text-4xl h-48 border`}
                >
                  {items.icon}
                </i>
              </div>
              <div className=" ml-8 mt-12">
                <h1 className="font-poppins font-semibold capitalize text-gray-600 tracking-wide text-xl">
                  {items.name}
                </h1>
              </div>
              <div className=" ml-8 mt-2 mr-2">
                <p className="font-poppins font-medium text-[13px] capitalize text-gray-400 tracking-wide">
                  {items.description}
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
