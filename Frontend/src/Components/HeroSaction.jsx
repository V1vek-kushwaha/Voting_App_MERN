import React from "react";

const HeroSaction = () => {
  return (
    <div className="grid grid-cols-2 gap-4 my-10 ">
      <div>
        <h2 className="font-medium my-5 text-slate-800">
          Trusted By Hundreds Of Organizations
        </h2>
        <h1 className="text-6xl text-[#00263a] font-bold mb-10">
          Easy Online Election Excellence
        </h1>
        <p className="font-medium mb-2 text-gray-500">
          ElectionMan guarantees election integrity, boosts voter engagement and
          saves serious hours. It's Completely Free.
        </p>
        <button
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#00263a] dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Signup free
          <svg
            className="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>

      <div>

      <img src="../imn.svg" class="object-contain  p-9"/>
      </div>
    </div>
  );
};

export default HeroSaction;
