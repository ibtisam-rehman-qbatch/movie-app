import React from "react";
import { useRef } from "react";
// import { searchTvShowAPI } from "../redux/shows/actionCreator";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";
const SearchBar = () => {
  const searchInputRef = useRef();
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchInputRef.current.value) {
      // dispatch(searchTvShowAPI(searchInputRef.current.value));
      navigate(`/all-tv-shows?search=${searchInputRef.current.value}`);
    } else {
      navigate(`/all-tv-shows`);
    }
  };

  const debouncedHandleSearch = debounce(handleSearch, 900);
  return (
    <div className="flex md:order-2">
      <button
        type="button"
        data-collapse-toggle="navbar-search"
        aria-controls="navbar-search"
        aria-expanded="false"
        className="md:hidden text-white hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 mr-1"
      >
        <span className="sr-only">Search</span>
      </button>

      <div className="relative w-full sm: px-12">
        <input
          type="search"
          className=" p-2.5  w-full  text-sm text-gray-900 bg-white rounded-lg  border border-gray-300  focus:border-blue-500 "
          placeholder="Search..."
          ref={searchInputRef}
          onChange={(e) => debouncedHandleSearch(e.target.value)}
          required
        />
        <button
          type="submit"
          onClick={() => handleSearch()}
          className="absolute top-0  p-2.5 text-sm font-medium h-full text-black rounded-r-lg   focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
