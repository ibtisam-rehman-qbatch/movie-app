import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllTvShows } from "../redux/shows/actionCreator";
import { Outlet } from "react-router";
import Header from "./Header";

const FetchData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Dispatch called");
    dispatch(fetchAllTvShows());
  }, []);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default FetchData;
