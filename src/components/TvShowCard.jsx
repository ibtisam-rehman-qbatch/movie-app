/* eslint-disable react/prop-types */
import React, { useState } from "react";
import DeleteConfirmation from "./DeleteConfirmation";
import { Link } from "react-router-dom";
import { calculateYear } from "../utilities/utils";

const TvShowCard = (props) => {
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);

  const startDate = props.data.start_date;
  const endDate = props.data.end_date;

  return (
    <>
      <div
        className="w-full max-w-xs bg-white border flex justify-center border-gray-200 rounded-lg shadow"
        style={{
          backgroundImage: `url(${props.data.image_thumbnail_path})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 200px",
        }}
      >
        <div className="px-5 w-11/12 mt-36 pt-4 pb-8 bg-gray-50 shadow-lg hover:shadow-xl shadow-black-600 rounded-lg">
          <a href="#">
            <p className="text-xl  font-bold text-gray-900  overflow-hidden whitespace-nowrap overflow-ellipsis">
              {props.data.name}{" "}
            </p>
            {endDate ? (
              <p className="text-l font-semibold tracking-tight text-gray-400">
                {calculateYear(startDate)} - {calculateYear(endDate)}
              </p>
            ) : (
              <p className="text-l font-semibold tracking-tight text-gray-400">
                {calculateYear(startDate)} - Present
              </p>
            )}
          </a>

          <div className="pt-4 items-center justify-between flex ">
            <button
              onClick={() => setConfirmationVisible(true)}
              className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white rounded-lg bg-gradient-to-r from-red-700 via-red-800 to-red-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Delete
            </button>

            {props.data?.myDate ? (
              <button
                onClick={() =>
                  window.alert("You don't have any details of your own TV-Show")
                }
                className="inline-flex items-center px-2.5 py-2 text-xs font-medium text-center text-white rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                <svg
                  className="-ml-0.5 mr-2 h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 14"
                >
                  <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                </svg>
                Details
              </button>
            ) : (
              <Link
                to={`/tv-show-details/${props.data.id}`}
                // className="inline-flex items-center px-2.5 py-2 text-xs font-medium text-center text-black border border-black rounded-lg hover:bg-blue hover:text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-700"
                className="inline-flex items-center px-2.5 py-2 text-xs font-medium text-center text-white rounded-lg bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                <svg
                  className="-ml-0.5 mr-2 h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 14"
                >
                  <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                </svg>
                Details
              </Link>
            )}
            {isConfirmationVisible && (
              <DeleteConfirmation
                data={{ id: props.data.id, setConfirmationVisible }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TvShowCard;

{
  /* <div className="flex items-center mt-2.5 mb-5">
<svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
<svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
<svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
<svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
<svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
</svg>
<span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
</div> */
}
