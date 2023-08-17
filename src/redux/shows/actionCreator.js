import Axios from "axios";
import actions from "./actions";

const isResponseSuccessful = (response) => {
  return response.status >= 200 && response.status < 300;
};

const fetchAllShows = () => {
  return async (dispatch) => {
    try {
      console.log("Going to get data");
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

export { fetchAllShows };
