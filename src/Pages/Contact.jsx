import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="bg-green-500 flex flex-col items-center h-96 pt-24 relative">
        <div>
          <h1 className="font-bold text-5xl text-center font-poppins text-white">
            Let's Connect!
          </h1>
        </div>
        <div className="text-center pt-3">
          <p className="text-center font-poppins tracking-wide text-white text-lg w-[500px] mx-auto">
            Have questions? We're here to help. Reach out to our friendly team
            anytime.
          </p>
        </div>
      </div>

      <div className="flex items-center mx-80 gap-x-7 absolute bottom-16">
        <div className=" p-7 py-10 space-y-3 rounded-lg shadow mb-3 bg-white hover:-mt-9 hover:shadow-lg duration-700">
          <div>
            <i className="font-poppins text-[3rem] mb-2">📞</i>
          </div>
          <div>
            <h1 className="font-poppins text-3xl font-bold">Call Us</h1>
          </div>

          <div>
            <p className="text-[14px] text-gray-600 font-poppins">
              Speak directly with our customer support team. We're available
              Monday to Saturday from 9 AM to 8 PM IST.
            </p>
          </div>
          <div>
            <h2 className="text-green-600 font-poppins font-bold">
              1800-123-456
            </h2>
          </div>
        </div>
        <div className="p-7 py-10 space-y-3 rounded-lg shadow mb-3 bg-white hover:-mt-9 hover:shadow-lg duration-700">
          <div>
            <i className="font-poppins text-[3rem] mb-2">✉️</i>
          </div>
          <div>
            <h1 className="font-poppins text-3xl font-bold">Email Support</h1>
          </div>

          <div>
            <p className="text-[14px] text-gray-600 font-poppins">
              Send us your queries and we'll respond within 24 hours. Perfect
              for detailed questions and documentation.
            </p>
          </div>
          <div>
            <h2 className="text-green-600 font-poppins font-bold">
              support@smilecart.com
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-green-50">
        <div className="border-black mx-8 pt-64 space-y-8">
          <div>
            <h1 className="font-poppins font-bold text-2xl">📍 Visit Our Office</h1>
          </div>

          <div className=" border-l-[10px]  border-green-300 w-fit ml-8 p-5 rounded-lg bg-green-100">
            <div>
              <h1 className="uppercase font-poppins text-lg text-green-500 font-medium tracking-wide pb-3">smilecart headquarters</h1>
              <p className="font-poppins text-gray-500 font-medium w-[570px] leading-7">
                123, E-Commerce Avenue, Tech Park, Coimbatore - 8187188
                TamilNadu, India
              </p>
            </div>
          </div>
        </div>

        <div className="w-fit space-y-4 ml-8 mt-9 pb-6">
          <div>
            <h1 className="text-xl font-poppins font-bold mt-2 tracking-wide">🕐 Business Hours </h1>
            <h2 className="text-lg font-poppins text-gray-500 ml-10 mt-3 "> Monday - saturday</h2>
            <p className="text-lg font-poppins text-gray-500 ml-10 mt-2">9:00 AM - 8:00 PM IST</p>
          </div>

          <div>
            <h1 className="text-lg font-poppins text-gray-500 ml-10 mt-3">Sunday</h1>
            <p className="text-lg font-poppins text-gray-500 ml-10 mt-2">10:00 AM - 6:00 PM IST</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
