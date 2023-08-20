import React from "react";
import { useSelector } from "react-redux";
import TvShowCard from "../components/TvShowCard";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";

const AllTvShows = () => {
  let allShows = useSelector((shows) => shows.showsReducer);

  return (
    <>
      {" "}
      {allShows?.loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
