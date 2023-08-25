import React from "react";
import movie_logo from "../assets/movie_logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 w-full shadow mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="#" className="flex items-center mb-4 sm:mb-0">
            <img src={movie_logo} className="h-8 mr-3" alt="Logo" />
            <span className="self-center text-2xl text-white font-semibold whitespace-nowrap">
              CINEMA-VERSE
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 bg-gray-500 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-white sm:text-center">
          © 2023{" "}
          <a href="#" className="hover:underline">
            IUR
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
