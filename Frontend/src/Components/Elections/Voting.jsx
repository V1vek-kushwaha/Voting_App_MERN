import React from "react";

const Voting = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 my-6">
        <div className="w-full max-w-lg p-10 bg-white  rounded-lg shadow ">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center pb-10 pt-4">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 ">
                Bonnie Green
              </h5>
              <span className="text-sm text-gray-500 ">Visual Designer</span>
            </div>
            <p className="font-extrabold text-5xl m-auto text-slate-500 ">VS</p>
            <div className="flex flex-col items-center pb-10 pt-4">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 ">
                Bonnie Green
              </h5>
              <span className="text-sm text-gray-500 ">Visual Designer</span>
            </div>
          </div>
        </div>
        <div className="w-full max-w-lg p-10 bg-white  rounded-lg shadow ">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center pb-10 pt-4">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 ">
                Bonnie Green
              </h5>
              <span className="text-sm text-gray-500 ">Visual Designer</span>
            </div>
            <p className="font-extrabold text-5xl m-auto text-slate-500 ">VS</p>
            <div className="flex flex-col items-center pb-10 pt-4">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 ">
                Bonnie Green
              </h5>
              <span className="text-sm text-gray-500 ">Visual Designer</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Voting;
