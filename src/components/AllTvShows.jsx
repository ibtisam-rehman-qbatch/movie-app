import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import TvShowCard from "./TvShowCard";
import {  searchTvShowAPI } from "../redux/shows/actionCreator";
import Loader from "./Loader";

const AllTvShows = () => {
  const dispatch = useDispatch();
  const searchInputRef = useRef();
  let allShows = useSelector((shows) => shows.showsReducer);
  console.log("Complete obj", allShows);
  console.log("TvShows obj: ", allShows.tvShows);

  // const handleDelete = (id) => {
  //   dispatch(removeTvShow(id));
  // };

  const handleSearch = () => {
    dispatch(searchTvShowAPI(searchInputRef.current.value));
  };

  return (
    <>
      {" "}
      <h1>AllShows</h1>
      <input
        type="text"
        // value={searchInputRef.current?.value}
        ref={searchInputRef}
      />
      <button onClick={handleSearch}>Search</button>
      {allShows?.loading ? (
        <Loader/>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {allShows.tvShows?.map((tvShow, index) => (
          <div key={index} >
            
            <TvShowCard data={tvShow} key={index} />
        
          </div>
        ))}
        </div>
      )}
    </>
  );
};

export default AllTvShows;
