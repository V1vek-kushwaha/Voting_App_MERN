import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate  } from 'react-router-dom';



const SignUp = () => {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  

  const handleSignup = async (data) => {
    // console.log(data);
    setLoading(true)

    await axios
      .post(`${import.meta.env.VITE_BASE_URL}user/signup`, {
        name: getValues("name"),
        age: getValues("age"),
        email: getValues("email"),
        mobile: getValues("mobile"),
        address: getValues("address"),
        aadhaarCardNumber: getValues("aadhaar"),
        password: getValues("password"),
      })
      .then(function (response) {
        // console.log(response);
      setLoading(false)

     toast.success('Signup Successfully')
     navigate('/');
     window.location.reload()

        
      })
      .catch(function (error) {
        console.log(error);
      setLoading(false)

      toast.error(error.response.data.error)

      });
    // console.log(data);
  };

  return (
    <>

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
                      {...register("name" , {                        
                        required: "name is required",
                      })}
                    />
                     {errors.name && <p role="alert" className="text-red-500">{errors.name.message}</p>}

                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="text"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Age
                    </label>
                    <input
                      type="number"
                      className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
               
                      {...register("age", {
                        min: 18, max: 99,
                        required: "age is required",
                    })}
                    aria-invalid={errors.age ? "true" : "false"}

                    />
                     {errors.age && <p role="alert" className="text-red-500">{errors.age.message}</p>}

                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="number"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Mobile
                    </label>
                    <input
                      type="text"
                      className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                      
                      {...register("mobile", {required: "mobile is required",
                      pattern: {
                        value:/^[0]?[789]\d{9}$/ ,
                        message:"Please enter a valid mobile no."
                      }
                    
                    })}
                      aria-invalid={errors.mobile ? "true" : "false"}
                    />
                     {errors.mobile && <p role="alert" className="text-red-500">{errors.mobile.message}</p>}

                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="text"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                      {...register("email", { required: "email  is required",
                      
                      pattern: {
                        value:/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/ ,
                        message:"Please enter a valid email."
                      }                      
                      })}
                      aria-invalid={errors.email ? "true" : "false"}
                  
        

                    />
                     {errors.email && <p role="alert" className="text-red-500">{errors.email.message}</p>}
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
                      {...register("address" , {required: "address  is required"})}
                    />
                     {errors.address && <p role="alert" className="text-red-500">{errors.address.message}</p>}

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
                      {...register("aadhaarno" , {required: "aadhaar is required",
                      pattern: {
                        value:/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/ ,
                        message:"Please enter a valid aadhaar."

                      }  
                    
                    
                    })}
                      
                    />
                     {errors.aadhaarno && <p role="alert" className="text-red-500">{errors.aadhaarno.message}</p>}

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
                      {...register("password" , { required: "password is required",
                    
                      pattern: {
                        value:/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/ ,
                        message:"should contain upper case, numeric, and special character"


                      }  
                    })}
                    />
                     {errors.password && <p role="alert" className="text-red-500">{errors.password.message}</p>}

                  </div>
                </div>
                {loading === true ?
              <button disabled type="button"  className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow">
              <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
              </svg>
              Loading...
              </button>
              :
              <button
                  type="submit"
                  className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow"
                >
                  SignUp
                </button>
             }  
               
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
      <Toaster />

    </>
  );
};

export default SignUp;
