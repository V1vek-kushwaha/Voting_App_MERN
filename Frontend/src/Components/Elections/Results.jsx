import React, { useEffect, useState } from "react";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";
import axios, * as others from 'axios';

const data = {
  labels: ["INC", "BJP", "AAP", "SP", "JAP", "TMC", "BSP"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3, 10],
      borderWidth: 1,
      backgroundColor: [
        "#19aaed",
        "#f5821f",
        "#97c5ed",
        "red",
        "#A0153E",
        "#58A399",
        "#124076",
      ],
    },
  ],
};

const Results = () => {
  const [cdata,setCData]=useState([])

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_BASE_URL}candidate/votecount`)
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
  return (
    <div className="grid md:grid-cols-2 gap-4 py-10">
      <ul className="  divide-y md:w-2/4 w-fit mx-auto divide-gray-200  ">
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
                Vivek Kushwaha
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                Party Name
              </p>
            </div>
            <p className="text-[#00263a]  font-bold text-lg">200</p>
          </div>
        </li>
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
                Vivek Kushwaha
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                Party Name
              </p>
            </div>
            <p className="text-[#00263a]  font-bold text-lg">200</p>
          </div>
        </li>
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
                Vivek Kushwaha
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                Party Name
              </p>
            </div>
            <p className="text-[#00263a]  font-bold text-lg">200</p>
          </div>
        </li>
      </ul>
      <div className=" md:w-3/4 w-fit m-auto">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default Results;
