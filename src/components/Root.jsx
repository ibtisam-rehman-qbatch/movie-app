import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllTvShows } from "../redux/shows/actionCreator";
import { Outlet } from "react-router";
import Header from "./Header";

const Root = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllTvShows());
  }, []);
  return (
    <>
      <Header />
      <main className="xs:mx-4 sm:mx-4 md:mx-8 lg:mx-24">
        <Outlet />
      </main>
    </>
  );
};

export default Root;
