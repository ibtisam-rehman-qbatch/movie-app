/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";

const Page404 = ({ errorMsg }) => {
  return (
    <section className=" dark:bg-gray-900 ">
      <div className="container flex mt-6 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <p className=" text-sm font-medium text-gray-500 rounded-full bg-gray-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </p>
          <h1 className=" text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            {errorMsg ? errorMsg : "Page not found"}
          </h1>
          {!errorMsg && (
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              The page you are looking for doesn&apos;t exist.
            </p>
          )}

          <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <NavLink
              to="/all-tv-shows"
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-gray-800  rounded-lg shrink-0 sm:w-auto hover:bg-gray-600 "
            >
              Take me home
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page404;
