import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TvShowCard from "../components/TvShowCard";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import { orderBy, toNumber, groupBy } from "lodash";
import { calculateYear } from "../utilities/utils";
import NetworkList from "../components/NetworkList";
import { reInit } from "../redux/shows/actionCreator";

const AllTvShows = () => {
  const dispatch = useDispatch();
  const [tvShowList, setTvShowList] = useState(null);
  let allShows = useSelector((shows) => shows.showsReducer);
  console.log("all: ", allShows);

  const sortedShows = orderBy(
    allShows.tvShows,
    (show) => toNumber(calculateYear(show?.start_date)),
    "desc"
  );
  const networkWiseShows = groupBy(allShows.tvShows, "network");
  const availableNetworks = Object.keys(networkWiseShows);

  const [sortByYear, setSortByYear] = useState(false);

  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setSortByYear(isChecked);
    if (isChecked) {
      setTvShowList(sortedShows);
    } else {
      setTvShowList(allShows?.tvShows);
    }
  };

  const handleChange = (name) => {
    if (name) {
      setTvShowList(networkWiseShows[name]);
    } else {
      setTvShowList(allShows?.tvShows);
    }
  };

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
      <div className="px-8 flex justify-between">
        <div className="flex items-center">
          <input
            id="checked-checkbox"
            type="checkbox"
            checked={sortByYear}
            onChange={handleCheckboxChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
          />
          <label
            htmlFor="checked-checkbox"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Sort By Year
          </label>
        </div>
        <div className="flex items-center mr-4">
          <NetworkList
            handleChange={handleChange}
            availableNetworks={availableNetworks}
          />
        </div>
      </div>

      {allShows?.loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-2 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
