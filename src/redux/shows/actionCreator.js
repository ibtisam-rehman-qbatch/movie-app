import Axios from "axios";
import actions from "./actions";

const isResponseSuccessful = (response) => {
  return response.status >= 200 && response.status < 300;
};

const fetchAllShows = () => {
  return async (dispatch) => {
    try {
      dispatch(actions.fetchShowsBegin());
      const response = await Axios.get(
        "https://www.episodate.com/api/most-popular"
      );
      if (isResponseSuccessful(response)) {
        dispatch(actions.fetchShowsSuccess(response.data));
      }
    } catch (error) {
      console.log("Error during fetching TV-Shows:  ", error);
      dispatch(actions.fetchShowsError());
    }
  };
};

const addTvShow = (data) => {
  return async (dispatch) => {
    try {
      dispatch(actions.addShowBegin());

      dispatch(actions.addShowSuccess(data));
    } catch {
      dispatch(actions.addShowsError());
    }
  };
};

export { fetchAllShows, addTvShow };
