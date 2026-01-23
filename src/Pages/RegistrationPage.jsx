import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { registration } from "../Api/Api";
const RegistrationPage = () => {
  const navigate = useNavigate();
  const [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState(false);
  const handleChange = async (event) => {
    setUserForm({
      ...userForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await registration(userForm);
      navigate("/");
    } catch (error) {
      setError(true);
    }
  };
  const signIn = () => {
    navigate("/");
  };
  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <div className="flex items-center w-fit mx-auto rounded-lg mt-14 shadow-xl">
          {/* left part starts */}
          <div className="bg-green-500 h-[650px] px-10 rounded-l-lg">
            <div className="mt-[10rem]">
              <div className="text-center">
                <i className="text-[60px] inline-block">🛍️</i>
              </div>

              <div className="text-center my-3">
                <h1 className="text-xl font-poppins font-semibold capitalize text-white tracking-wider">
                  welcome to smileCart
                </h1>
              </div>

              <div>
                <p className="text-white w-[300px] text-center leading-relaxed">
                  Your one-stop destination for amazing deals and incredible
                  shopping experience!
                </p>
              </div>
            </div>
          </div>

          {/* left part ends */}

          {/* right part starts */}

          <div className=" px-10 rounded-r-lg  h-[500px] bg-green-50/10">
            <div className="flex items-center font-poppins gap-x-3 mt-8 w-fit mx-auto ">
              <i className="text-xl">🛒</i>
              <h1 className="text-green-600 font-semibold text-2xl ">
                smileCart
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-3xl font-poppins font-semibold tracking-normal text-center">
                Create Account
              </h1>
            </div>
            <div className="mt-2">
              <p className="font-poppins text-[15px] text-gray-500 font-medium tracking-wider text-center">
                Join thousands of happy shoppers
              </p>
            </div>
            <div className="flex gap-x-4">
              <div className="mt-5 space-y-2">
                <label
                  htmlFor="fistName"
                  className="capitalize text-[15px] font-bold tracking-wider text-gray-600 font-poppins"
                >
                  first name
                </label>
                <br />
                <input
                  type="fistName"
                  id="fistName"
                  name="firstName"
                  required
                  onChange={handleChange}
                  className="bg-gray-100 rounded py-[3px] px-[16px] border-2 border-gray-200 outline-none"
                />
              </div>
              <div className="mt-5 space-y-2">
                <label
                  htmlFor="lastName"
                  className="capitalize text-[15px] font-bold tracking-wider text-gray-600 font-poppins"
                >
                  last name
                </label>
                <br />
                <input
                  type="lastName"
                  id="lastName"
                  name="lastName"
                  onChange={handleChange}
                  className="bg-gray-100 rounded py-[3px] px-[16px] border-2 border-gray-200 outline-none"
                />
              </div>
            </div>
            <div className="flex gap-x-4">
              <div className="mt-5 space-y-2">
                <label
                  htmlFor="phoneNumber"
                  className="capitalize text-[15px] font-bold tracking-wider text-gray-600 font-poppins"
                >
                  phone number
                </label>
                <br />
                <input
                  type="phoneNumber"
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={handleChange}
                  required
                  className="bg-gray-100 rounded py-[3px] px-[16px] border-2 border-gray-200 outline-none"
                />
              </div>
              <div className="mt-5 space-y-2">
                <label
                  htmlFor="email"
                  className="capitalize text-[15px] font-bold tracking-wider text-gray-600 font-poppins"
                >
                  email Address
                </label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  required
                  className="bg-gray-100 rounded py-[3px] px-[16px] border-2 border-gray-200 outline-none"
                />
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <label
                htmlFor="password"
                className="capitalize text-[15px] font-bold tracking-wider text-gray-600 font-poppins"
              >
                password
              </label>
              <br />
              <input
                type="password"
                id="password"
                onChange={handleChange}
                name="password"
                required
                className="bg-gray-100 rounded py-[3px] px-[16px] border-2 border-gray-200 outline-none"
              />
            </div>

            <div className="text-center mt-3">
              <button
                type="submit"
                className="text-white font-poppins font-semibold bg-green-400 mt-4 px-10 py-1 text-center capitalize rounded-lg"
              >
                Register
              </button>
            </div>

            <div className="flex gap-x-1 mt-8 w-fit mx-auto ">
              <p className="font-poppins text-gray-400 font-medium ">
                Already have an account?
              </p>
              <p
                onClick={signIn}
                className="font-poppins text-green-500 capitalize font-semibold hover:cursor-pointer"
              >
                Sign In
              </p>
            </div>
            <div>
              <span>
                {error && (
                  <div>
                    <h1 className="text-center text-red-500 font-poppins font-bold capitalize mt-3">Failed to register...</h1>
                  </div>
                )}
              </span>
            </div>
          </div>
          {/* right part ends */}
        </div>
      </form>
    </>
  );
};

export default RegistrationPage;
