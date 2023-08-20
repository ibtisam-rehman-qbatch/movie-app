import React, { useEffect, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { tvShowDetails } from "../redux/shows/actionCreator";
// import ImageSlider from "../components/ImageSlider";
import Loader from "../components/Loader";

const ImageSlider = React.lazy(() => import("../components/ImageSlider"));

const TvShowDetails = () => {
  const dispatch = useDispatch();
  const stateData = useSelector((tvShow) => tvShow.showsReducer);
  console.log("Show Det: ", stateData);
  const params = useParams();

  useEffect(() => {
    dispatch(tvShowDetails(params.id));
  }, []);

  return (
    <>
      {stateData?.loading ? (
        <Loader />
      ) : (
        <div>
          <div className="grid place-items-center p-4">
            <h1 className="text-4xl font-extrabold">
              {stateData?.tvShowDetail?.name}
            </h1>
            <div />
            <div className="flex  p-12 justify-between lg:space-x-12  lg:space-y lg:flex-row md:flex-col md:items-center md:space-y-8 sm:items-center sm:space-y-8 sm:flex-col  xs:items-center xs:space-y-6 xs:flex-col">
              <Suspense fallback={<div>loading...</div>}>
                <ImageSlider images={stateData?.tvShowDetail?.pictures} />
              </Suspense>
              <div className="h-full lg:w-2/3">
                <p className="mb-4 text-lg  dark:text-gray-400 font-bold">
                  When will be {stateData?.tvShowDetail?.name} next episode air
                  date? Is {stateData?.tvShowDetail?.name} renewed or cancelled?
                  Where to countdown {stateData?.tvShowDetail?.name} air dates?
                  Is {stateData?.tvShowDetail?.name} worth watching?
                </p>
                <p className="text-lg  dark:text-gray-400 font-normal ">
                  {stateData?.tvShowDetail?.description}
                </p>
                <hr />
              </div>
            </div>
          </div>

          <div className="lg:px-24">
            <h1 className="mb-4 text-2xl dark:text-gray-400 font-bold">
              Genres:{" "}
              {stateData?.tvShowDetail?.genres?.map((genre, id) => (
                <span key={id}>
                  {id > 0 && (
                    <span className="text-black mx-1 font-normal">|</span>
                  )}

                  <span className="text-red-600 font-normal">{genre}</span>
                </span>
              ))}
            </h1>
            <h1 className="mb-4 text-2xl dark:text-gray-400 font-bold">
              Station:{" "}
              <span className=" font-normal">
                {stateData?.tvShowDetail?.network} (
                {stateData?.tvShowDetail?.country})
              </span>
            </h1>
            <h1 className="mb-4 text-2xl dark:text-gray-400 font-bold">
              Rating:{" "}
              <span className=" font-normal">
                <span className="text-red-600">
                  {" "}
                  {stateData?.tvShowDetail?.rating}/10{" "}
                </span>{" "}
                from{" "}
                <span className="text-red-600">
                  {stateData?.tvShowDetail?.rating_count}
                </span>{" "}
                users
              </span>
            </h1>
          </div>
        </div>
      )}
    </>
  );
};

export default TvShowDetails;

// Genres: Drama | Action | Science-Fiction
// Station: The CW (US)
// Rating: 9.31/10 from 1614 users
// Status: Ended
// Start: 2014-10-07
