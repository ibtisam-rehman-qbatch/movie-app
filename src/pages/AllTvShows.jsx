import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TvShowCard from "../components/TvShowCard";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import FilterSection from "../components/FilterSection";

import { reInit } from "../redux/shows/actionCreator";

const AllTvShows = () => {
  const dispatch = useDispatch();
  const [tvShowList, setTvShowList] = useState(null);
  let allShows = useSelector((shows) => shows.showsReducer);

  useEffect(() => {
    if (allShows?.error) {
      window.alert(allShows?.error);
      dispatch(reInit);
    }
  }, [allShows?.error]);

  useEffect(() => {
    if (allShows?.success) {
      window.alert(allShows?.success);
      dispatch(reInit());
    }
  }, [allShows?.success]);

  return (
    <>
      <FilterSection allShows={allShows} setTvShowList={setTvShowList} />
      {allShows?.loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 items-center pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {tvShowList
            ? tvShowList?.map((tvShow, index) => (
                <div key={index}>
                  <TvShowCard data={tvShow} key={index} />
                </div>
              ))
            : allShows.tvShows?.map((tvShow, index) => (
                <div key={index}>
                  <TvShowCard data={tvShow} key={index} />
                </div>
              ))}
        </div>
      )}
      <Pagination restore={setTvShowList} />
    </>
  );
};

export default AllTvShows;
