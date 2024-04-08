import React, { useContext, useState } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { useForm } from "react-hook-form";
import { Axios } from "axios";

const Profile = () => {
  const {userInfo,token}=useContext(AuthContext)
  const [toggle ,setToggle]=useState(false)
  const { register, handleSubmit, getValues } = useForm();



  const handleToggle =()=>{
    console.log("inside")
    setToggle(!toggle)
    
  }
  const handleChangePass =async()=>{
    let config = {
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    }
    await Axios
      .post(`${import.meta.env.VITE_BASE_URL}profile/password`,config, {
        currentPassword: getValues("cpassword"),
        newPassword: getValues("npassword"),       
      })
      .then(function (response) {
        console.log(response);
        
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(data);
  }

  return (
    <div>
      <div className="p-16">
        <div className="p-8 bg-white shadow mt-24">
          {" "}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {" "}
            <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              {" "}
              <div>
                {" "}
                <p className="font-bold text-gray-700 text-xl">22</p>{" "}
                <p className="text-gray-400">Friends</p>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="font-bold text-gray-700 text-xl">10</p>{" "}
                <p className="text-gray-400">Photos</p>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="font-bold text-gray-700 text-xl">89</p>{" "}
                <p className="text-gray-400">Comments</p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="relative">
              {" "}
              <div className="w-48 h-48 bg-slate-900 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <img className=" p-2  rounded-full" src="https://xsgames.co/randomusers/avatar.php?g=male" />
              </div>{" "}
            </div>{" "}
            <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
              <button onClick={handleToggle} className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              Change Password
              </button>{" "}
              <button className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                {" "}
                Message
              </button>{" "}
            </div>
          </div>{" "}
          <div className="mt-20 text-center border-b pb-12">
            {" "}
            <h1 className="text-4xl font-medium text-gray-700">
              {userInfo.name}
              <span className="font-light text-gray-500 ms-4">{userInfo.age}</span>
            </h1>{" "}
            <p className="font-light text-gray-600 mt-3">              {userInfo.address}
</p>
           
            
          </div>{" "}
          <div className="mt-12 flex flex-col justify-center">
            {" "}
            <p className="text-gray-600 text-center font-light lg:px-16">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </p>{" "}
            <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
              {" "}
              Show more
            </button>
          </div>
        </div>
      </div>


      {/* Modal  */}

      

<div>
{toggle && 
 <div  className=" overflow-y-auto bg-gray-500/50 overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
 <div className="relative p-4 m-auto w-full max-w-md max-h-full">
   {/* Modal content */}
   <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
     {/* Modal header */}
     <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
       <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
         Change Password
       </h3>
       <button onClick={handleToggle} type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
         <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
         </svg>
         <span className="sr-only">Close modal</span>
       </button>
     </div>
     {/* Modal body */}
     <div className="p-4 md:p-5">
       <form onSubmit={handleSubmit(handleChangePass)}  className="space-y-4" action="#">
         <div>
           <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Passwords</label>
           <input {...register("cpassword")} type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  required />
         </div>
         <div>
           <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New password</label>
           <input {...register("npassword")} type="password" name="password" id="password"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
         </div>
        
         <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Change Password</button>
        
       </form>
     </div>
   </div>
 </div>
</div>
}
  {/* Main modal */}
 
</div>

    </div>
  );
};

export default Profile;
