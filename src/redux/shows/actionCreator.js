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
        console.log("response.data: ", response.data.tv_shows);
        dispatch(actions.fetchShowsSuccess(response.data.tv_shows));
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
    } catch (error) {
      console.log("Error during adding tv-show: ", error);
      dispatch(actions.addShowsError());
    }
  };
};

const removeTvShow = (id) => {
  return async (dispatch) => {
    try {
      dispatch(actions.deleteShowBegin());

      dispatch(actions.deleteShowSuccess(id));
    } catch (error) {
      console.log("Error in removing tv-show: ", error);
      dispatch(actions.addShowsError());
    }
  };
};

const editTvShow = (id, updatedTvShow) => {
  return async (dispatch) => {
    try {
      dispatch(actions.editShowBegin());

      dispatch(actions.editShowSuccess(id, updatedTvShow));
    } catch (error) {
      console.log("Error during editing tv-show: ", error);
      dispatch(actions.addShowsError());
    }
  };
};

export { fetchAllShows, addTvShow, removeTvShow, editTvShow };
