import { Link } from "react-router-dom";
import CategoryCard from "../Components/CategoryCard";
import Journey from "../Components/Journey";
import Tranding from "../Components/Tranding";
import Workflow from "../Components/Workflow";
import { motion } from "framer-motion";
export default function HomePage() {
  return (
    <main className="scroll-smooth duration-700 relative">
      {/* hero section  */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.9,
        }}
        style={{ backgroundImage: "url(/banner-homePage.jpg)" }}
        className="bg-cover w-full h-[784px] bg-center relative"
      >
        <div className="absolute bg-black opacity-50 inset-0"></div>
        <div
          className="absolute inset-0 flex flex-col items-center text-center 
        justify-center text-white px-4 gap-y-5"
        >
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold  font-poppins tracking-wider capitalize"
            >
              create memories that last forever
            </motion.h1>
          </div>
          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              dumping: 10,
              stiffness: 100,
              delay: 0.6,
            }}
          >
            <p className="text-lg mx-auto w-[700px] tracking-wide leading-8">
              Customised gifts crafted with love for your special moments.
              personalise every details and make them smile!
            </p>
          </motion.div>
          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              dumping: 100,
              delay: 0.8,
            }}
          >
            <button
              className=" border-white border-2 px-4 py-3 rounded-lg font-medium font-poppins capitalize 
            bg-white duration-500 text-green-700 hover:bg-transparent hover:text-white active:scale-95 "
            >
              <Link to="/all-products">explore gifts</Link>
            </button>
          </motion.div>
        </div>
      </motion.div>
      {/* hero section */}

      {/* category section */}
      <div>
        <CategoryCard />
      </div>
      {/* category section */}

      {/* tranding section */}
      <div id="trending">
        <Tranding />
      </div>
      {/* tranding section */}

      {/* journey section */}
      <div>
        <Journey />
      </div>
      {/* journey section */}

      {/* work flow  */}
      <div id="workflow">
        <Workflow />
      </div>
      {/* work flow  */}
    </main>
  );
}
