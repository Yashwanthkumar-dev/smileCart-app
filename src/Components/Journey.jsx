import React from "react";
import { motion } from "framer-motion";
const Journey = () => {
  return (
    <div className="pt-9  overflow-hidden pb-9 mt-9">
      <motion.div
        initial={{ x: -12, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 5 }}
        className="flex items-center w-fit mx-auto gap-x-2 px-4  font-poppins py-2 rounded-lg bg-gradient-to-br from-green-400 via-green-400 to-green-500 text-white  text-[12px]"
      >
        <i>⭐</i>
        <p className="capitalize font-medium">why choose us</p>
      </motion.div>

      <div className="text-center mt-3">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="font-poppins text-green-500 capitalize font-bold text-4xl tracking-wide"
        >
          Your journey to your perfect gifts
        </motion.h1>
      </div>

      <div className="text-center mt-3">
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.78,
          }}
          className="font-poppins text-gray-500 font-medium text-sm tracking-wide"
        >
          Experience excellence at every step with our premium personalized
          gifting service
        </motion.p>
      </div>

      {/* timeline */}
      <div>
        <div className="relative ml-8 my-20 border border-transparent">
          <div className="absolute left-[730px] top-0 h-[1700px] bg-green-500 w-1 shadow-[10px_20px_40px_1px_gray] -z-10 "></div>

          <motion.div
            initial={{ rotate: 90, x: 700 }}
            whileInView={{ rotate: 0, x: 0 }}
            transition={{ duration: 0.79 }}
            viewport={{ once: true }}
            className="bg-green-100 mx-60 mt-11 p-10 rounded-2xl space-y-5 hover:scale-105 duration-700 hover:shadow-lg relative"
          >
            <i className="text-5xl">🎨</i>
            <h1 className="text-green-700 font-poppins font-bold text-2xl">
              100% Personalized
            </h1>
            <p className="font-poppins w-[850px] text-gray-500">
              Every gift is uniquely crafted with your photos, messages, and
              designs that make it truly one-of-a-kind. Our advanced
              customization tools let you create exactly what you envision.
            </p>
            <div className="flex bg-green-500 text-white font-poppins font-medium px-4 py-2 gap-x-2 w-fit rounded-xl">
              <i>✨</i>
              <p>Fully Custom</p>
            </div>
            <div className="absolute top-7 left-[458px]">
              <motion.p
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                className="px-7 text-white text-2xl  font-bold font-poppins bg-green-300 rounded-full py-4"
              >
                1
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ rotate: 90, x: -700 }}
            whileInView={{ rotate: 0, x: 0 }}
            transition={{ duration: 0.79, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-green-100 mx-60 mt-[110px] p-10 rounded-2xl space-y-5 hover:scale-105 duration-700 hover:shadow-lg relative"
          >
            <i className="text-5xl">⭐</i>
            <h1 className="text-green-700 font-poppins font-bold text-2xl">
              Premium Quality
            </h1>
            <p className="font-poppins w-[850px] text-gray-500">
              High-quality materials and professional printing techniques ensure
              your gifts last for years. We use only the finest materials
              sourced from trusted suppliers worldwide.
            </p>
            <div className="flex bg-green-500 text-white font-poppins font-medium px-4 py-2 gap-x-2 w-fit rounded-xl">
              <i>💎</i>
              <p>Top Grade</p>
            </div>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, ease: "linear", repeat: Infinity }}
              className="absolute top-7 left-[458px]"
            >
              <p className="px-7 text-white text-2xl  font-bold font-poppins bg-green-300 rounded-full py-5">
                2
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ rotate: 90, x: 700 }}
            whileInView={{ rotate: 0, x: 0 }}
            transition={{ duration: 0.99 }}
            viewport={{ once: true }}
            className="bg-green-100 mx-60 mt-[110px] p-10 rounded-2xl space-y-5 hover:scale-105 duration-700 hover:shadow-lg relative"
          >
            <i className="text-5xl">🚚</i>
            <h1 className="text-green-700 font-poppins font-bold text-2xl">
              Fast Delivery
            </h1>
            <p className="font-poppins w-[850px] text-gray-500">
              Express delivery within 3-5 days across India with careful
              packaging and real-time tracking. Your gifts reach safely and on
              time, every single time.
            </p>
            <div className="flex bg-green-500 text-white font-poppins font-medium px-4 py-2 gap-x-2 w-fit rounded-xl">
              <i>⚡</i>
              <p>Quick Shipping</p>
            </div>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, ease: "linear", repeat: Infinity }}
              className="absolute top-7 left-[458px]"
            >
              <p className="px-7 text-white text-2xl  font-bold font-poppins bg-green-300 rounded-full py-5">
                3
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ rotate: 90, x: -700 }}
            whileInView={{ rotate: 0, x: 0 }}
            transition={{ duration: 1.6 }}
            viewport={{ once: true }}
            className="bg-green-100 mx-60 mt-[110px] p-10 rounded-2xl space-y-5 hover:scale-105 duration-700 hover:shadow-lg relative"
          >
            <i className="text-5xl">💯</i>
            <h1 className="text-green-700 font-poppins font-bold text-2xl">
              Happiness Guaranteed
            </h1>
            <p className="font-poppins w-[850px] text-gray-500">
              Easy returns and replacements because your satisfaction is our top
              priority. Not happy with your order? We'll make it right, no
              questions asked.
            </p>
            <div className="flex bg-green-500 text-white font-poppins font-medium px-4 py-2 gap-x-2 w-fit rounded-xl">
              <i>🎁</i>
              <p> 100% Satisfaction</p>
            </div>
            <div className="absolute top-7 left-[458px]">
              <motion.p
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                className="px-7 text-white text-2xl  font-bold font-poppins bg-green-300 rounded-full py-5"
              >
                4
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* timeline */}
    </div>
  );
};

export default Journey;
