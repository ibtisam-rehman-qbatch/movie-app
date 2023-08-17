import React from "react";
import { useSelector } from "react-redux";

import ShowCard from "./ShowCard";

const AllShows = () => {
  const allShows = useSelector((shows) => shows.showsReducer);
  console.log("Complete obj", allShows);
  console.log("TvShows obj: ", allShows.tvShows);
  console.log("Only shows: ", allShows.tvShows?.tv_shows?.[0]);

  return (
    <>
      {" "}
      <h1>AllShows</h1>
      {allShows?.loading ? (
        <h2>loading...</h2>
      ) : (
        allShows.tvShows?.tv_shows?.map((tvShow, index) => (
          <ShowCard data={tvShow} key={index} />
        ))
      )}
    </>
  );
};

export default AllShows;
// {allShows?.tvShows?.tv_shows?.[0]}
