import React, { useReducer } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import moment from "moment";
// import CountryList from "../components/CountryList";
import { addTvShow } from "../redux/shows/actionCreator";
import NetworkList from "../components/NetworkList";
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = {
  id: "",
  name: "",
  permalink: "",
  start_date: "",
  end_date: "",
  country: "",
  network: "",
  status: "",
  image_thumbnail_path: "",
  myDate: true,
};

const tvShowReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };

    case "RESET":
      return initialValues;
    default:
      return state;
  }
};

const AddTvShow = () => {
  let totalShows = useSelector((shows) => shows.showsReducer.total) + 1;
  const navigate = useNavigate();
  const currentDate = new moment().subtract(1, "days").format("y-MM-DD");
  const [tvShowDetail, setTvShowDetail] = useReducer(
    tvShowReducer,
    initialValues
  );
  const dispatch = useDispatch();

  const handleChange = (field, value) => {
    setTvShowDetail({ type: "SET_FIELD", field, value });
  };

  const fillFields = async () => {
    tvShowDetail.end_date
      ? setTvShowDetail({ type: "SET_FIELD", field: "status", value: "Ended" })
      : setTvShowDetail({
          type: "SET_FIELD",
          field: "status",
          value: "Running",
        });
    setTvShowDetail({ type: "SET_FIELD", field: "id", value: totalShows });
  };

  const onSubmit = async () => {
    if (
      tvShowDetail.name &&
      tvShowDetail.permalink &&
      tvShowDetail.start_date &&
      tvShowDetail.country &&
      tvShowDetail.network &&
      tvShowDetail.image_thumbnail_path
    ) {
      await fillFields();
      dispatch(addTvShow(tvShowDetail));
      navigate("/all-tv-shows");
    }
  };

  // const handleImageChange = async (event) => {
  //   const file = event.target.files[0];

  //   if (file) {
  //     const imageUrl = URL.createObjectURL(file);
  //     setTvShowDetail({
  //       type: "SET_FIELD",
  //       field: "image_thumbnail_path",
  //       value: imageUrl,
  //     });
  //   }
  // };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-1/2 flex flex-col items-center justify-center rounded-lg bg-white p-8 shadow-md">
          <h1 className="mb-4 text-2xl font-bold">Add TV-Show</h1>

          {/* <form className="w-full flex flex-col items-center justify-center "> */}
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ values }) => (
              <Form>
                {/* {tvShowDetail.image_thumbnail_path && (
              <img
                className="h-6/12 w-6/12 border-[6px] border-white bg-white hover:bg-gray-50"
                src={tvShowDetail.image_thumbnail_path}
                alt="Selected"
                style={{ maxWidth: "300px" }}
              />
            )} */}
                <div className="grid grid-cols-1 gap-2 w-full lg:grid-cols-2 mb-2">
                  <Field
                    type="text"
                    id="tvShowName"
                    name="tvShowName"
                    placeholder="Name of Tv Show"
                    className="w-full rounded-md bg-slate-300 p-2 hover:bg-gray-50"
                  />
                  <ErrorMessage name="tvShowName" component="div" />

                  <Field
                    type="text"
                    id="permalink"
                    name="permalink"
                    placeholder="Permalink"
                    className="w-full rounded-md bg-slate-300 p-2 hover:bg-gray-50"
                  />
                  <ErrorMessage name="permalink" component="div" />
                  {/* <input
                className="w-full rounded-md bg-slate-300 p-2 hover:bg-gray-50"
                type="text"
                placeholder="Name of Tv Show"
                value={tvShowDetail.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
              /> */}
                  {/* <input
                type="text"
                className="w-full rounded-md bg-slate-300 p-2 hover:bg-gray-50"
                value={tvShowDetail.permalink}
                onChange={(e) => handleChange("permalink", e.target.value)}
                placeholder="Permalink"
                required
              ></input> */}
                </div>

                <div className="grid grid-cols-1 gap-2 w-full lg:grid-cols-2 mb-2">
                  <div>
                    <label htmlFor="start-date" className="font-bold">
                      Starting Date
                    </label>
                    <Field
                      type="date"
                      id="start-date"
                      name="start-date"
                      placeholder="Starting date of TV-Show"
                      max={currentDate}
                      className="w-full rounded-md bg-slate-300 p-2 hover:bg-gray-50"
                    />
                    <ErrorMessage name="start-date" component="div" />
                    {/* <label htmlFor="start-date" className="font-bold">
                  Starting Date
                </label>
                <input
                  id="start-date"
                  className="w-full rounded-md bg-slate-300 p-2 hover:bg-gray-50"
                  type="date"
                  placeholder="Starting date of TV Show"
                  value={tvShowDetail.start_date}
                  onChange={(e) => handleChange("start_date", e.target.value)}
                  max={currentDate}
                  required
                /> */}
                  </div>
                  <div>
                    <label htmlFor="end-date" className="font-bold">
                      Ending Date
                    </label>
                    <Field
                      type="date"
                      id="end-date"
                      name="end-date"
                      placeholder="Ending date of TV-Show"
                      max={currentDate}
                      min={values.start_date}
                      className="w-full rounded-md bg-slate-300 p-2 hover:bg-gray-50"
                    />
                    {console.log(values)}
                    <ErrorMessage name="end-date" component="div" />
                    {/* <input
                    id="end-date"
                    type="date"
                    className="w-full rounded-md bg-slate-300 p-2 hover:bg-gray-50"
                    value={tvShowDetail.end_date}
                    onChange={(e) => handleChange("end_date", e.target.value)}
                    placeholder="Ending date of TV Show"
                    max={currentDate}
                    min={tvShowDetail.start_date}
                    title={
                      tvShowDetail.start_date === ""
                        ? "Please fill the starting date first"
                        : ""
                    }
                    disabled={tvShowDetail.start_date === ""}
                  /> */}
                  </div>
                </div>

                {/* <div className="grid grid-cols-1 gap-2 w-full lg:grid-cols-2">
              <CountryList handleChange={handleChange} />
              <input
                type="file"
                className="mb-4 w-full rounded-md bg-slate-300 p-2"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </div> */}
                <NetworkList handleChange={handleChange} />

                <button
                  className="w-1/2 rounded-full bg-slate-500 px-4 py-2 text-white hover:bg-slate-600 "
                  onClick={onSubmit}
                >
                  Add TV-Show
                </button>
                {/* </form> */}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default AddTvShow;
