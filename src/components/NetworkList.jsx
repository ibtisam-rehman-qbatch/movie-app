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
      className={`float-right
       shadow-sm pr-10 pl-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none  
      bg-[linear-gradient(45deg,transparent_50%,gray_50%),linear-gradient(135deg,gray_50%,transparent_50%),linear-gradient(to_right,#ccc,#ccc)] 
      bg-[calc(100%_-_20px)_calc(1em_+_2px),calc(100%_-_15px)_calc(1em_+_2px),calc(100%_-_2.5em)_0.5em] 
      bg-[5px_5px,5px_5px,1px_1.5em] 
      bg-no-repeat appearance-none mb-4 w-full rounded-md ${
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
