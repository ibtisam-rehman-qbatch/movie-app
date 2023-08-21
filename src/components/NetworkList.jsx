/* eslint-disable react/prop-types */
import React from "react";

const NetworkList = ({ handleChange }) => {
  const listOfNetworks = [
    "Netflix",
    "HBO",
    "Amazon",
    "Apple",
    "Fox",
    "ABC",
    "NBC",
  ];

  const getNetworks = () => {
    return listOfNetworks.map((network, id) => (
      <option
        className="mb-4 w-full rounded-md bg-slate-300 p-2"
        value={network}
        key={id}
      >
        {network}
      </option>
    ));
  };
  return (
    <select
      className="mb-4 w-full rounded-md bg-slate-300 p-2"
      id="network"
      name="network"
      onChange={(e) => handleChange("network", e.target.value)}
      required
    >
      <option className="mb-4 w-full rounded-md bg-slate-300 p-2" value="">
        Select Network of Tv Show
      </option>
      {getNetworks()}
    </select>
  );
};

export default NetworkList;
