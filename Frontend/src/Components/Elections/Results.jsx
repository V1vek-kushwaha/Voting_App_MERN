import React, { useEffect, useState } from "react";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";
import axios, * as others from 'axios';

const data = {
  labels: ["INC", "BJP", ],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19,],
      borderWidth: 1,
      backgroundColor: [
        "#19aaed",
        "#f5821f",
       
      ],
    },
  ],
};

const Results = () => {
  const [cdata,setCData]=useState([])
  const [loading,setLoading]=useState(false)


  useEffect(()=>{
    setLoading(true)

    axios.get(`${import.meta.env.VITE_BASE_URL}candidate/votecount`)
   .then(function (response) {
     // handle success
     setCData(response.data)
    //  console.log(response.data)
    setLoading(false)

   })
   .catch(function (error) {
     // handle error
     console.log(error);
    setLoading(false)

   })
 },[])
  return (
  <>
  {loading && (
  <div className="text-center my-4">
    <div role="status">
      <svg
        aria-hidden="true"
        className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  </div>
)}
    <div className="grid md:grid-cols-2 gap-4 py-10">





      <ul className="  divide-y md:w-3/4 w-fit mx-auto divide-gray-200  ">
      {cdata.map((data)=>(
        <li className="pb-3 sm:pb-4">
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className="flex-shrink-0">
            <img
              className="w-8 h-8 rounded-full"
              src="https://xsgames.co/randomusers/avatar.php?g=male"
              alt="Neil image"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate ">
              {data.CandidateName}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {data.party}
            </p>
          </div>
          <p className="text-[#00263a]  font-bold text-lg"> {data.count}</p>
        </div>
      </li>
      ))}  
      
      </ul>
    {!loading && (
        <div className=" md:w-3/4 sm:w-w-3/4 m-auto">
        <Pie data={data} />
      </div>
    )}
    </div>
  </>
  );
};

export default Results;
