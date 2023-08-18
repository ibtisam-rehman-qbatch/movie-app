import React, { useReducer, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTvShow } from "../redux/shows/actionCreator";
import CountryList from "./CountryList";
import moment from "moment";

const initialState = {
  id: "",
  name: "",
  permalink: "",
  start_date: "",
  end_date: "",
  country: "",
  network: "",
  status: "",
  image_thumbnail_path: "",
};

const newTvShowReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.fieldName]: action.fieldData };
    default:
      return state;
  }
};
const AddTvShow = () => {
  const dispatch = useDispatch();
  const currentDate = new moment().subtract(1, "days").format("y-MM-DD");

  const [tvShowDetails, setTvShowDetails] = useReducer(
    newTvShowReducer,
    initialState
  );

  const handleInputChange = (fieldName, fieldData) => {
    setTvShowDetails({ type: "SET_FIELD", fieldName, fieldData });
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      console.log("Url of img: ", imageUrl);
      setTvShowDetails({
        type: "SET_FIELD",
        fieldName: "image_thumbnail_path",
        fieldData: imageUrl,
      });
    }
  };

  useEffect(() => {
    console.log("Show details: ", tvShowDetails);
  }, [tvShowDetails]);

  const handleAddTvShow = () => {
    dispatch(addTvShow(tvShowDetails));
  };

  return (
    <div>
      <h2>Add a TV Show</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={tvShowDetails.name}
            onChange={(e) => handleInputChange("name", e.target.value)}

            required
          />
        </label>

        <label>
          Start Date:
          <input
            type="date"
            name="start_date"
            value={tvShowDetails.start_date}
            onChange={(e) => handleInputChange("start_date", e.target.value)}
            max={currentDate}

            required
          />
        </label>

        <label>
          End Date:
          <input
            type="date"
            name="end_date"
            value={tvShowDetails.end_date}
            onChange={(e) => handleInputChange("end_date", e.target.value)}
            max={currentDate}
          />
        </label>
        <CountryList />

        <input type="file" accept="image/*" onChange={handleImageChange} required/>
        {tvShowDetails.image_thumbnail_path && (
          <img
            src={tvShowDetails.image_thumbnail_path}
            alt="Selected"
            style={{ maxWidth: "300px" }}
          />
        )}

        {/* Add more input fields for other TV show details */}
        <button type="button" onClick={handleAddTvShow}>
          Add TV Show
        </button>
      </form>
    </div>
  );
};

export default AddTvShow;
