import categoryData from "../Data/CategoryData";
import { PiTargetBold } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function categoryCard() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.30,
      },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };
  const category = categoryData;
  return (
    <div className="pt-16 pb-9  space-y-4 bg-green-100/30">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="text-center"
      >
        <p className="flex items-center border w-fit mx-auto gap-x-2 px-3  font-poppins font-medium py-2 rounded-lg bg-gradient-to-br from-green-400 via-green-400 to-green-500 text-white  text-[12px] ">
          <i className="text-red-500">
            <PiTargetBold />
          </i>
          find your Perfect gift
        </p>
      </motion.div>
      <div className="text-center ">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.81 }}
          viewport={{ once: false }}
          className="text-3xl font-bold text-gray-600 font-poppins capitalize tracking-wide"
        >
          Shop by Occasion
        </motion.h1>
      </div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.91 }}
        viewport={{ once: false }}
        className="text-center"
      >
        <p className="mx-auto w-[650px] font-poppins font-medium  text-gray-500 leading-8">
          Every moment deserves a special gift. Choose from our curated
          collections designed for life's memorable occasions.
        </p>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-4 mx-24 gap-3 gap-y-8"
      >
        {category.map((category) => (
          <Link to={`/category-product/${category.id}`}>
            <motion.div
              variants={cardVariants}
              transition={{ duration: 0.4 }}
              key={category.id}
              className="rounded-lg shadow pb-7 w-[305px] hover:scale-105 hover:shadow-lg hover:-mt-3 duration-500 bg-white mt-8"
            >
              <div className=" h-40 rounded-t-lg">
                <i
                  className={` bg-gradient-to-br flex ${category.color} flex-col rounded-t-lg items-center py-20 text-4xl h-48 border`}
                >
                  {category.icon}
                </i>
              </div>
              <div className=" ml-8 mt-12">
                <h1 className="font-poppins font-semibold capitalize text-gray-600 tracking-wide text-xl">
                  {category.name}
                </h1>
              </div>
              <div className=" ml-8 mt-2 mr-2">
                <p className="font-poppins font-medium text-[12px] capitalize text-gray-400 tracking-wide ">
                  {category.description}
                </p>
              </div>
              <div className=" ml-8 mt-4 mr-2 flex items-center gap-2">
                <p className="font-poppins text-[14px] capitalize text-green-500 tracking-wide">
                  explore more{" "}
                </p>
                <i className="text-green-500 font-light">
                  <FaArrowRightLong />
                </i>
              </div>
            </motion.div>{" "}
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
