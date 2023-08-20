// import React, { useReducer, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { addTvShow } from "../redux/shows/actionCreator";
// import CountryList from "./CountryList";
// import moment from "moment";

// const initialState = {
//   id: "",
//   name: "",
//   permalink: "",
//   start_date: "",
//   end_date: "",
//   country: "",
//   network: "",
//   status: "",
//   image_thumbnail_path: "",
// };

// const newTvShowReducer = (state, action) => {
//   switch (action.type) {
//     case "SET_FIELD":
//       return { ...state, [action.fieldName]: action.fieldData };
//     default:
//       return state;
//   }
// };
// const AddTvShow = () => {
//   const dispatch = useDispatch();
//   const currentDate = new moment().subtract(1, "days").format("y-MM-DD");

//   const [tvShowDetails, setTvShowDetails] = useReducer(
//     newTvShowReducer,
//     initialState
//   );

//   const handleInputChange = (fieldName, fieldData) => {
//     setTvShowDetails({ type: "SET_FIELD", fieldName, fieldData });
//   };

//   const handleImageChange = async (event) => {
//     const file = event.target.files[0];

//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       console.log("Url of img: ", imageUrl);
//       setTvShowDetails({
//         type: "SET_FIELD",
//         fieldName: "image_thumbnail_path",
//         fieldData: imageUrl,
//       });
//     }
//   };

//   useEffect(() => {
//     console.log("Show details: ", tvShowDetails);
//   }, [tvShowDetails]);

//   const handleAddTvShow = () => {
//     dispatch(addTvShow(tvShowDetails));
//   };

//   return (
//     <div>
//       <h2>Add a TV Show</h2>
//       <form>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={tvShowDetails.name}
//             onChange={(e) => handleInputChange("name", e.target.value)}

//             required
//           />
//         </label>

//         <label>
//           Start Date:
//           <input
//             type="date"
//             name="start_date"
//             value={tvShowDetails.start_date}
//             onChange={(e) => handleInputChange("start_date", e.target.value)}
//             max={currentDate}

//             required
//           />
//         </label>

//         <label>
//           End Date:
//           <input
//             type="date"
//             name="end_date"
//             value={tvShowDetails.end_date}
//             onChange={(e) => handleInputChange("end_date", e.target.value)}
//             max={currentDate}
//           />
//         </label>
//         <CountryList />

//         <input type="file" accept="image/*" onChange={handleImageChange} required/>
//         {tvShowDetails.image_thumbnail_path && (
//           <img
//             src={tvShowDetails.image_thumbnail_path}
//             alt="Selected"
//             style={{ maxWidth: "300px" }}
//           />
//         )}

//         {/* Add more input fields for other TV show details */}
//         <button type="button" onClick={handleAddTvShow}>
//           Add TV Show
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddTvShow;

/* eslint-disable react/prop-types */
import React, { useReducer } from "react";
// import { fetchAllCategory } from "../redux/Categories/actionCreator";
// import { addProduct, editProduct } from "../redux/Products/actionCreator";
import "../App.css";
// import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import CountryList from "./CountryList";

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

const tvShowReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };

    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const AddTvShow = () => {
  const currentDate = new moment().subtract(1, "days").format("y-MM-DD");
  const [tvShowDetail, setTvShowDetail] = useReducer(
    tvShowReducer,
    initialState
  );
  // const category = useSelector((state) => state.Categories);
  // const dispatch = useDispatch();
  console.log(tvShowDetail);

  const handleChange = (field, value) => {
    setTvShowDetail({ type: "SET_FIELD", field, value });
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setTvShowDetail({
        type: "SET_FIELD",
        field: "image_thumbnail_path",
        value: imageUrl,
      });
    }
  };

  return (
    <>
      <div className="flex h-auto items-center justify-center">
        <div className="w-1/2 flex flex-col items-center justify-center rounded-lg bg-white p-8 shadow-md">
          <h1 className="mb-4 text-2xl font-bold">Add TV-Show</h1>

          <form className="w-full flex flex-col items-center justify-center">
            {tvShowDetail.image_thumbnail_path && (
              <img
                className="h-6/12 w-6/12 border-[6px] border-white bg-white"
                src={tvShowDetail.image_thumbnail_path}
                alt="Selected"
                style={{ maxWidth: "300px" }}
              />
            )}
            <div className="grid grid-cols-1 gap-2 w-full lg:grid-cols-2 mb-2">
              <input
                className="w-full rounded-md bg-slate-300 p-2"
                type="text"
                placeholder="Name of Tv Show"
                value={tvShowDetail.title}
                onChange={(e) => handleChange("name", e.target.value)}
                required
              />
              <input
                type="text"
                className="w-full rounded-md bg-slate-300 p-2"
                value={tvShowDetail.permalink}
                onChange={(e) => handleChange("permalink", e.target.value)}
                placeholder="Permalink"
                required
              ></input>
            </div>

            <div className="grid grid-cols-1 gap-2 w-full lg:grid-cols-2 mb-2">
              <div>
                <label htmlFor="start-date" className="font-bold">
                  Starting Date
                </label>
                <input
                  id="start-date"
                  className="w-full rounded-md bg-slate-300 p-2"
                  type="date"
                  placeholder="Starting date of TV Show"
                  value={tvShowDetail.start_date}
                  onChange={(e) => handleChange("start_date", e.target.value)}
                  max={currentDate}
                  required
                />
              </div>
              <div>
                <label htmlFor="end-date" className="font-bold">
                  Ending Date
                </label>
                <input
                  id="end-date"
                  type="date"
                  className="w-full rounded-md bg-slate-300 p-2"
                  value={tvShowDetail.end_date}
                  onChange={(e) => handleChange("end_date", e.target.value)}
                  placeholder="Ending date of TV Show"
                  max={currentDate}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 w-full lg:grid-cols-2">
              {/* <select
                className="mb-4 w-full rounded-md bg-slate-300 p-2"
                id="country"
                value={tvShowDetail.country}
                onChange={(e) => handleChange("country", e.target.value)}
                required
              >
                <option value="">Select Country</option>
              </select> */}
              <CountryList />
              <input
                type="file"
                className="mb-4 w-full rounded-md bg-slate-300 p-2"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            <button
              className="w-1/2 rounded-full bg-slate-500 px-4 py-2 text-white hover:bg-slate-600"
              type="button"
              // onClick={handleSubmit}
            >
              Add TV-Show
            </button>
          </form>
          <p className="mt-4">
            <Link to="/all" className=" text-blue-500 underline">
              ALL
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default AddTvShow;
