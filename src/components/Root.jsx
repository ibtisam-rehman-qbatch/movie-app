import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";

const Root = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-50 h-screen">
        <main className="mx-12 md:mx-8 lg:mx-24">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Root;
