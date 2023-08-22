/* eslint-disable react/prop-types */
import React from "react";

const NetworkList = ({ handleChange, availableNetworks, labelText }) => {
  const listOfNetworks = [
    "Netflix",
    "HBO",
    "Amazon",
    "Apple",
    "Fox",
    "ABC",
    "NBC",
  ];

  const getNetworks = (networks) => {
    return networks.map((network, id) => (
      <option
        className={`mb-4 w-full rounded-md ${
          availableNetworks ? "" : "bg-slate-300"
        }  p-2`}
        value={network}
        key={id}
      >
        {network}
      </option>
    ));
  };
  return (
    <select
      className={`mb-4 w-full rounded-md ${
        availableNetworks ? "border" : "bg-slate-300"
      } p-2`}
      id="network"
      name="network"
      onChange={(e) =>
        availableNetworks
          ? handleChange(e.target.value)
          : handleChange("network", e.target.value)
      }
      required
    >
      <option
        className={`mb-4 w-full rounded-md ${
          availableNetworks ? "" : "bg-slate-300"
        } p-2`}
        value=""
      >
        {labelText ? labelText : "Select Network of Tv Show"}
      </option>
      {availableNetworks
        ? getNetworks(availableNetworks)
        : getNetworks(listOfNetworks)}
    </select>
  );
};

export default NetworkList;
