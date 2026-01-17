import { Link } from "react-router-dom";
import "./Navigation.css";
import { delay, motion } from "framer-motion";
import { FaOpencart } from "react-icons/fa";

const Navigation = () => {
  return (
    <header className="h-full  sticky top-0 z-50">
      <nav className=" border py-6  bg-white w-full shadow-md ">
        <div className="flex justify-between items-center mx-16 ">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.22,
            }}
          >
            <h1 className="font-poppins text-2xl font-semibold">
              <Link to="/">smileCart</Link>
            </h1>
          </motion.div>

          <div>
            <ul className="flex items-center capitalize space-x-9">
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.1,
                }}
                className="about"
              >
                <Link
                  to="/about-us"
                  className="font-medium font-poppins text-lg hover:text-green-500"
                >
                  about us
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                }}
                className="products"
              >
                <Link
                  to="/all-products"
                  className="font-medium font-poppins text-lg hover:text-green-500"
                >
                  products
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.35,
                }}
                className="contact"
              >
                <Link
                  to="/contact-us"
                  className="font-medium font-poppins text-lg hover:text-green-500"
                >
                  contact us
                </Link>
              </motion.li>

              <motion.li
              initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.45,
                }}
              >
                <Link to="/cart-details"  className="font-bold font-poppins text-[26px] hover:text-green-500"><FaOpencart/></Link>
              </motion.li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
