import { Link } from "react-router-dom";
import "./Navigation.css";
import { motion } from "framer-motion";
import { FaOpencart } from "react-icons/fa";

const Navigation = () => {
  // 1. Logout Function
  const handleLogout = () => {
    localStorage.clear();
    alert("Logout Successful!");
    window.location.href = "/";
  };

  return (
    <header className="h-full sticky top-0 z-50">
      <nav className="border py-6 bg-white w-full shadow-md">
        <div className="flex justify-between items-center mx-16">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.22 }}
          >
            <h1 className="font-poppins text-2xl font-semibold text-green-600">
              <Link to="/home-page">smileCart</Link>
            </h1>
          </motion.div>

          <div>
            <ul className="flex items-center capitalize space-x-9">
              {/* Existing Links */}
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
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
                transition={{ duration: 0.5, delay: 0.3 }}
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
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                <Link
                  to="/my-orders"
                  className="font-medium font-poppins text-lg hover:text-green-500"
                >
                  My Orders
                </Link>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <Link
                  to="/cart-details"
                  className="font-bold font-poppins text-[26px] hover:text-green-500"
                >
                  <FaOpencart />
                </Link>
              </motion.li>

              {/* 2. Logout Button added here */}
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-5 py-2 rounded-lg font-poppins font-medium hover:bg-red-700 transition duration-300"
                >
                  Logout
                </button>
              </motion.li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
