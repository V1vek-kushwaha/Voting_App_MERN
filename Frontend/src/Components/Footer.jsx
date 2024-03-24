import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/*Footer container*/}
      <footer className="flex flex-col items-center bg-[#0a4275] text-center text-white">
        <div className="container p-6">
          <div className>
            <p className="flex items-center justify-center">
              <span className="me-4">Register for free</span>
              <Link to="/signup">
                {" "}
                <button
                  type="button"
                  className="inline-block rounded-full border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  Sign up!
                </button>
              </Link>
            </p>
          </div>
        </div>
        {/*Copyright section*/}
        <div className="w-full bg-black/20 p-4 text-center">
          © 2024 Copyright: Election Man
        </div>
      </footer>
    </div>
  );
};

export default Footer;
