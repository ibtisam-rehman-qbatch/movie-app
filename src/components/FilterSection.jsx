/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import NetworkList from "./NetworkList";
import { orderBy, toNumber, groupBy, intersection } from "lodash";
import { calculateYear } from "../utilities/utils";
import { Formik, Form } from "formik";

const FilterSection = (props) => {
  const networkWiseShows = groupBy(props.data.allShows, "network");
  const availableNetworks = Object.keys(networkWiseShows);

  const countryWiseShows = groupBy(props.data.allShows, "country");
  const availableCountries = Object.keys(countryWiseShows);

  const [sortByYear, setSortByYear] = useState(props.data.isSorted);
  const [countrySelected, setCountry] = useState(props.data.country);
  const [networkSelected, setNetwork] = useState(props.data.network);

  useEffect(() => {
    handleChangeFilters({
      country: props.data.country,
      network: props.data.network,
      sorted: props.data.isSorted,
    });
  }, [props.data.country, props.data.network, props.data.isSorted]);

  const handleChangeFilters = ({ country, network, sorted }) => {
    let filteredShows = props.data.allShows;

    if (country) {
      filteredShows = intersection(countryWiseShows[country], filteredShows);
    }

    if (network) {
      filteredShows = intersection(networkWiseShows[network], filteredShows);
    }

    if (sorted) {
      filteredShows = orderBy(
        filteredShows,
        (show) => toNumber(calculateYear(show?.start_date)),
        "desc"
      );
    }

    setCountry(country);
    setNetwork(network);
    setSortByYear(sorted);
    props.data.setTvShowList(filteredShows);
  };

  const handleChangeCheckbox = (event) => {
    const isChecked = event.target.checked;
    handleChangeFilters({
      country: countrySelected,
      network: networkSelected,
      sorted: isChecked,
    });
  };

  const handleChangeCountry = (name) => {
    handleChangeFilters({
      country: name,
      network: networkSelected,
      sorted: sortByYear,
    });
  };

  const handleChangeNetwork = (name) => {
    handleChangeFilters({
      country: countrySelected,
      network: name,
      sorted: sortByYear,
    });
  };

  return (
    <div>
      <div className="lg:px-8 flex flex-col lg:flex-row justify-between">
        <div className="flex pt-4 lg:pt-0 items-center">
          <input
            id="checked-checkbox"
            type="checkbox"
            checked={sortByYear}
            onChange={handleChangeCheckbox}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
          />
          <label
            htmlFor="checked-checkbox"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Sort By Year
          </label>
        </div>

        <Formik>
          <Form>
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
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FilterSection;
