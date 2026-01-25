import { useState } from "react";
import { motion } from "framer-motion";
import { login } from "../Api/Api";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [error, setError] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  // input login form
  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  // form login submit button

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await login(credentials);
      console.log(result);
      if (result.role === "admin") {
        navigate("/admin/AdminDashboard");
      } else {
        navigate("/home-page");
      }
    } catch (error) {
      setError(true);
    }
  };

  const signUp = () => {
    navigate("/registration");
  };
  return (
    <>
      <form onSubmit={handleSubmit} method="post">
        <div className="flex items-center w-fit mx-auto rounded-lg mt-32 shadow-xl">
          {/* left part starts */}
          <div className="bg-green-500 h-[500px] px-10 rounded-l-lg">
            <div className="mt-[7rem]">
              <div className="text-center">
                <motion.i
                  animate={{
                    x: [0, 40],
                    y: [0, -20, 0],
                    rotate: [10],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                  className="text-[60px] inline-block"
                >
                  🛍️
                </motion.i>
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
            <div className="flex items-center font-poppins gap-x-3 mt-8 ml-10">
              <i className="text-xl">🛒</i>
              <h1 className="text-green-600 font-semibold text-2xl">
                smileCart
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-3xl font-poppins font-semibold tracking-normal text-center">
                welcome back!
              </h1>
            </div>
            <div className="mt-2">
              <p className="font-poppins text-[15px] text-gray-500 font-medium tracking-wider text-center">
                Sign to continue shopping
              </p>
            </div>

            <div className="mt-5 space-y-2">
              <label
                htmlFor="email"
                className="capitalize text-[15px] font-bold tracking-wider text-gray-600 font-poppins"
              >
                email
              </label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                required
                value={credentials.email}
                onChange={handleChange}
                className="bg-gray-100 rounded ml-4 py-[3px] px-[16px] border-2 border-gray-200 outline-none"
              />
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
                name="password"
                required
                value={credentials.password}
                onChange={handleChange}
                className="bg-gray-100 rounded ml-4 py-[3px] px-[16px] border-2 border-gray-200 outline-none"
              />
            </div>

            <div className="text-center mt-3">
              <button
                type="submit"
                className="text-white font-poppins font-semibold bg-green-400 mt-4 px-10 py-1 text-center capitalize rounded-lg"
              >
                sign in
              </button>
            </div>

            <div className="flex gap-x-1 mt-8">
              <p className="font-poppins text-gray-400 font-medium ">
                don't have an account ?
              </p>
              <p
                onClick={signUp}
                className="font-poppins text-green-500 capitalize font-semibold hover:cursor-pointer"
              >
                sign up
              </p>
            </div>
            <div>
              <span>
                {error && (
                  <div>
                    <h1 className="text-red-400 font-bold capitalize mt-1 text-center duration-800">
                      ! failed to login !
                    </h1>
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

export default LoginPage;
