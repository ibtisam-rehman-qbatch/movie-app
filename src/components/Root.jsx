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
      <main className="mx-12 md:mx-8 lg:mx-24">
        <Outlet />
      </main>
    </>
  );
};

export default Root;
