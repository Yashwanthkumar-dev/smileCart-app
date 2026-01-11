import React from "react";

const Workflow = () => {
  return (
    <div className="p-3 flex mx-44 justify-between mt-12 pb-28">
      <div className="ml-10 mt-4">
        <div className=" border-l-8 border-green-500 w-fit pl-5 space-y-2 ">
          <div>
            <p className="text-green-500 font-poppins uppercase font-medium ">
              📝 SIMPLE PROCESS
            </p>
          </div>
          <div>
            <h1 className="text-3xl font-poppins font-semibold tracking-widest">
              How It Works
            </h1>
          </div>
          <div>
            <p className="text-sm font-poppins text-gray-400">
              Your journey to the perfect gift
            </p>
          </div>
        </div>
        <div className="flex items-center mt-6 w-fit gap-x-4 space-x-3 ml-3 hover:bg-green-100 p-4 rounded-lg hover:transition-all hover:translate-x-7 duration-500 ease-in-out">
          <div className="space-y-2">
            <i className="text-3xl">🎁</i>
          </div>
          <div className="space-y-2">
            <h1 className="font-poppins font-semibold text-green-800 capitalize  ">
              Choose Your Gift
            </h1>
            <p className="text-gray-500 font-poppins w-[300px]">
              Explore 500+ customizable products perfect for every occasion and
              recipient
            </p>
          </div>
        </div>

        <div className="flex items-center mt-6 w-fit gap-x-4 space-x-3 ml-3  hover:bg-green-100 p-4 rounded-lg hover:transition-all hover:translate-x-4 duration-500">
          <div>
            <i className="text-3xl">🎨</i>
          </div>
          <div className="space-y-2">
            <h1 className="font-poppins font-semibold text-green-800 capitalize  ">
              Customize It
            </h1>
            <p className="text-gray-500 font-poppins w-[300px]">
              Use our intuitive design tools to add photos, text, and personal
              touches
            </p>
          </div>
        </div>

        <div className="flex items-center mt-6 w-fit gap-x-4 space-x-3 ml-3  hover:bg-green-100 p-4 rounded-lg hover:transition-all hover:translate-x-4 duration-500">
          <div>
            <i className="text-3xl">🚚</i>
          </div>
          <div className="space-y-2">
            <h1 className="font-poppins font-semibold text-green-800 capitalize  ">
              Fast Delivery
            </h1>
            <p className="text-gray-500 font-poppins w-[300px]">
              Get your beautifully crafted gift delivered within 3-5 days
            </p>
          </div>
        </div>
      </div>
      {/* big card */}
      <div className="sticky top-5 border p-9 bg-gradient-to-tl
       from-green-500 to-green-400  rounded-[20px] text-white font-poppins h-[450px] duration-700">
        <div>
          <h1 className=" font-semibold text-2xl tracking-wider ">
            Why We're Different
          </h1>
        </div>
        <div>
          <p className="text-sm font-medium tracking-wider mt-2">Trusted by thousands for quality and service</p>
        </div>
        <div className="mt-9">
          <h1 className="text-4xl font-poppins font-bold">10K+</h1>
          <p className="text-sm font-sans">Happy Customers</p>
        </div>
        <div className="mt-6">
          <h1 className="text-4xl font-poppins font-bold">4.9★</h1>
          <p className="font-sans">Customer Rating</p>
        </div>
        <div className="mt-6">
          <h1 className="text-4xl font-poppins font-bold">3-5</h1>
          <p className="font-sans">Days Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
