import React from "react";
import { useSelector, useDispatch } from "react-redux";

import TvShowCard from "./TvShowCard";
import { removeTvShow } from "../redux/shows/actionCreator";

const AllTvShows = () => {
  const dispatch = useDispatch();
  let allShows = useSelector((shows) => shows.showsReducer);
  console.log("Complete obj", allShows);
  console.log("TvShows obj: ", allShows.tvShows);

  const handleDelete = (id) => {
    dispatch(removeTvShow(id));
  };

  return (
    <>
      {" "}
      <h1>AllShows</h1>
      {allShows?.loading ? (
        <h2>loading...</h2>
      ) : (
        allShows.tvShows?.map((tvShow, index) => (
          <li key={index}>
            <button onClick={() => handleDelete(tvShow.id)}>Delete</button>
            <TvShowCard data={tvShow} key={index} />
          </li>
        ))
      )}
    </>
  );
};

export default AllTvShows;
