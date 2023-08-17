import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllShows } from "../redux/shows/actionCreator";
import AllShows from "./AllShows";

const FetchData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Dispatch called");
    dispatch(fetchAllShows());
  }, []);
  return <AllShows />;
};

export default FetchData;
