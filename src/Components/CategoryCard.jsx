import { PiTargetBold } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getAllCategory } from "../Api/Api";

export default function CategoryCard() {
  // animation variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  // state for categories
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategory();
        setCategories(data);
        console.log("Fetched categories:", data);
      } catch (error) {
        console.error(error);
        setCategories([]);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="pt-16 pb-9 space-y-4 bg-green-100/30">
      {/* Header */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="text-center"
      >
        <p className="flex items-center border w-fit mx-auto gap-x-2 px-3 font-poppins font-medium py-2 rounded-lg bg-gradient-to-br from-green-400 via-green-400 to-green-500 text-white text-[12px]">
          <i className="text-red-500">
            <PiTargetBold />
          </i>
          Find your perfect gift
        </p>
      </motion.div>

      <div className="text-center">
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
        <p className="mx-auto w-[650px] font-poppins font-medium text-gray-500 leading-8">
          Every moment deserves a special gift. Choose from our curated
          collections designed for life's memorable occasions.
        </p>
      </motion.div>

      {/* Category Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-4 mx-24 gap-3 gap-y-8"
      >
        {categories.map((cat) => (
          <Link key={cat.id} to={`/category-product/${cat.id}`}>
            <motion.div
              variants={cardVariants}
              transition={{ duration: 0.4 }}
              className="rounded-lg shadow  w-[305px] hover:scale-105 hover:shadow-lg hover:-mt-3 duration-500 bg-white mt-8 overflow-hidden pb-7"
            >
              <div>
                {cat.product && cat.product.length > 0 && (
                  <div className="h-48 bg-gray-200">
                    <img
                      src={`data:${cat.product[0].imageType};base64,${cat.product[0].imageData}`}
                      alt={cat.categoryName}
                      className="w-[330px] h-[270px] object-cover rounded-t-lg "
                    />
                  </div>
                )}
              </div>
              <div className=" mt-[90px]">
                <h1 className="text-xl font-bold text-gray-800 font-poppins ml-4 ">
                  {cat.categoryName}
                </h1>
              </div>

              <div>
                {cat.product && cat.product.length > 0 && (
                  <div>
                    <h1 className="truncate text-green-600 ml-4 mr-5 mt-1 font-poppins">{cat.product[0].productDescription}</h1>
                  </div>
                )}
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
