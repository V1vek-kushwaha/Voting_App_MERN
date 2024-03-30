import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import axios from "axios";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, handleSubmit, getValues } = useForm();

  const handleSignup = async () => {
    await axios
      .post(`${process.env.REACT_APP_BASE_URL}user/signup`, {
        name: getValues("name"),
        age: getValues("age"),
        email: getValues("email"),
        mobile: getValues("mobile"),
        address: getValues("address"),
        aadhaarCardNumber: getValues("aadhaar"),
        password: getValues("password"),
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    // console.log(data);
  };

  return (
    <div>
      <div className="container mx-auto  flex">
        <div className="max-w-lg w-full mx-auto mt-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
            <Link to="/" className="flex justify-center">
              <img src={Logo} className="h-12" alt="Flowbite Logo" />
            </Link>
            <div className="px-8 py-2">
              <form onSubmit={handleSubmit(handleSignup)}>
                <div className="grid gap-4 grid-cols-2">
                  <div className="mb-2">
                    <label
                      htmlFor="text"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                      {...register("name")}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="text"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Age
                    </label>
                    <input
                      type="text"
                      className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                      {...register("age")}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="text"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Mobile
                    </label>
                    <input
                      type="text"
                      className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                      {...register("mobile")}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="text"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                      {...register("email")}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="text"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                      {...register("address")}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="text"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Aadhaar No.
                    </label>
                    <input
                      type="text"
                      className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                      {...register("aadhaarno")}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Password
                    </label>
                    <input
                      type="text"
                      className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                      {...register("password")}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow"
                >
                  SignUp
                </button>
              </form>
            </div>
            <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
              <Link to="/login" className="font-medium text-indigo-500">
                Already Have Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
