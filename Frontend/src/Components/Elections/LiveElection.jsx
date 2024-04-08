import axios, * as others from 'axios';
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from '../../Auth/AuthContext';

const LiveElection = () => {
  const [cdata,setCData]=useState([])
  const {token}=useContext(AuthContext)

  useEffect(()=>{
     axios.get(`${import.meta.env.VITE_BASE_URL}candidate`)
    .then(function (response) {
      // handle success
      setCData(response.data)
      console.log(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  },[])


  const handleVote = async(id)=>{
    
    await axios   
    .get(`${import.meta.env.VITE_BASE_URL}candidate/vote/${id}`,{
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    }
  )
    .then(function (response) {
      console.log(response);
      
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  return (
    <div className="my-4 ">
      <ul className="max-w-4xl divide-y mx-auto divide-gray-200 shadow p-5 rounded-md ">
      {cdata.map((data)=>(
       
       <li className="pb-3 sm:pb-4">
       
       <div  className="flex items-center space-x-4 rtl:space-x-reverse">
       <div className="flex-shrink-0">
         <img
           className="w-8 h-8 rounded-full"
           src="https://xsgames.co/randomusers/avatar.php?g=male"
           alt="Neil image"
         />
       </div>
       <div className="flex-1 min-w-0">
         <p className="text-sm font-medium text-gray-900 truncate ">
           {data.name}
         </p>
         <p className="text-sm text-gray-500 truncate dark:text-gray-400">
         {data.party}
         </p>
       </div>
       <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
         <button
           type="button"
           className="inline-block rounded-full border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal bg-[#00263a] text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
           data-twe-ripple-init
           data-twe-ripple-color="light"
           onClick={()=>handleVote(data._id)}
         >
           Vote
         </button>
       </div>
     </div>
             
             
             </li>
      ))}
        
      </ul>
    </div>
  );
};

export default LiveElection;
