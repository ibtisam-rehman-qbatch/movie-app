import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TvShowCard from "../components/TvShowCard";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import { sortTvShows } from "../redux/shows/actionCreator";

const AllTvShows = () => {
  let allShows = useSelector((shows) => shows.showsReducer);
  const dispatch = useDispatch();

  const sortByYear = () => {
    dispatch(sortTvShows());
  };

  return (
    <>
      <div className="px-8">
        <button
          onClick={() => sortByYear()}
          className="text-black hover:bg-blue-900 hover:text-white border border-black focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-md text-xs px-5 py-2.5 mr-2 text-center inline-flex items-center"
        >
          Sort by Year
        </button>
      </div>{" "}
      {allShows?.loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-2 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {allShows.tvShows?.map((tvShow, index) => (
            <div key={index}>
              <TvShowCard data={tvShow} key={index} />
            </div>
          ))}
        </div>
      )}
      <Pagination />
    </>
  );
};

export default AllTvShows;
