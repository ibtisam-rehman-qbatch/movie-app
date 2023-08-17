/* eslint-disable react/prop-types */
import React from "react";

const TvShowCard = (props) => {
  return (
    <div>
      <img src={props.data.image_thumbnail_path} />
      <h3>{props.data.name}</h3>
      <span>
        {props.data.start_date} - status:{props.data.status}
      </span>
    </div>
  );
};

export default TvShowCard;
