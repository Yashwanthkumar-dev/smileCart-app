import { Link } from "react-router-dom";
import "./Navigation.css";
import { delay, motion } from "framer-motion";
const Navigation = () => {
  return (
    <header className="h-full  sticky top-0 z-50">
      <nav className=" border py-6  bg-white w-full shadow-md ">
        <div  
          className="flex justify-between items-center mx-16 "
        >
          <motion.div
          initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={
              {
                duration:0.22,
              
              }
            }>
            <h1
             
            className="font-poppins text-2xl font-semibold">
              <Link to="/">smileCart</Link>
            </h1>
          </motion.div>

          <div>
            <ul className="flex items-center capitalize space-x-9">
              <motion.li
               initial={{ opacity: 0,y: -20, }}
            animate={{ opacity: 1 ,y:0}}
            transition={
              {
                duration:0.40,
                delay:0.10
              }
            }
              className="about">
                <Link
                  to="/about-us"
                  className="font-medium font-poppins text-lg hover:text-green-500"
                >
                  about us
                </Link>
              </motion.li>
              <motion.li
              initial={{opacity:0 , y:-20}}
              animate={{opacity:1 , y:0}}
              transition={{
                duration:0.50,
                delay:0.30
                
              }}

               className="products">
                <Link
                  to="/all-products"
                  className="font-medium font-poppins text-lg hover:text-green-500"
                >
                  products
                </Link>
              </motion.li>
              <motion.li
              initial={{opacity:0 , y:-20}}
              animate={{opacity:1 , y:0}}
              transition={{
                duration:0.60,
                delay:0.35 
              }}
              className="contact">
                <Link
                  to="/contact-us"
                  className="font-medium font-poppins text-lg hover:text-green-500"
                >
                  contact us
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
