/* eslint-disable react/prop-types */
import React, { useState } from "react";
import NetworkList from "./NetworkList";
import { orderBy, toNumber, groupBy } from "lodash";
import { calculateYear } from "../utilities/utils";

const FilterSection = ({ allShows, setTvShowList }) => {
  const networkWiseShows = groupBy(allShows.tvShows, "network");
  const availableNetworks = Object.keys(networkWiseShows);

  const countryWiseShows = groupBy(allShows.tvShows, "country");
  const availableCountries = Object.keys(countryWiseShows);

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

  const sortedShows = orderBy(
    allShows.tvShows,
    (show) => toNumber(calculateYear(show?.start_date)),
    "desc"
  );

  const handleChangeCountry = (name) => {
    if (name) {
      setTvShowList(countryWiseShows[name]);
    } else {
      setTvShowList(allShows?.tvShows);
    }
  };

  const handleChangeNetwork = (name) => {
    if (name) {
      setTvShowList(networkWiseShows[name]);
    } else {
      setTvShowList(allShows?.tvShows);
    }
  };

  return (
    <div>
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

        <div className="flex items-center space-x-4 mr-4 pt-4">
          <NetworkList
            handleChange={handleChangeNetwork}
            availableNetworks={availableNetworks}
            labelText="Select Network"
          />
          <NetworkList
            handleChange={handleChangeCountry}
            availableNetworks={availableCountries}
            labelText="Select Country"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
