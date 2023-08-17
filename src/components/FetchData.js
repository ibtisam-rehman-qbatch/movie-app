import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllShows } from "../redux/shows/actionCreator";
import AllTvShows from "./AllTvShows";

const FetchData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Dispatch called");
    dispatch(fetchAllShows());
  }, []);
  return <AllTvShows />;
};

export default FetchData;
