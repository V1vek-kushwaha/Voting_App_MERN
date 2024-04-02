import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Auth/AuthContext";

const Login = () => {
  const { register, handleSubmit, getValues } = useForm();
  const {signIn}=useContext(AuthContext)

  const SignInHandler =()=>{
    signIn(getValues(["aadhaar","password"]))
  }
  return (
    <>
      <div className="container mx-auto p-8 flex">
        <div className="max-w-md w-full mx-auto mt-12">
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
            <Link to="/" className="flex justify-center">
              <img src={Logo} className="h-12" alt="Flowbite Logo" />
            </Link>
            <div className="p-8">
              <form onSubmit={handleSubmit(SignInHandler)}>
                <div className="mb-5">
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-600"
                  >
                    Aadhaar
                  </label>
                  <input
                    type="text"
                    name="aadhaar"
                    className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                    {...register("aadhaar")}
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                    {...register("password")}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow"
                >
                  Login
                </button>
              </form>
            </div>
            <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
              <Link to="/signup" className="font-medium text-indigo-500">
                Create account
              </Link>
              <Link to="/forgotpassword" className="text-gray-600">
                Forgot password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
