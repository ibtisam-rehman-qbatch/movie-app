import Axios from "axios";
import actions from "./actions";

const isResponseSuccessful = (response) => {
  return response.status >= 200 && response.status < 300;
};

const fetchAllTvShows = (pNum) => {
  return async (dispatch) => {
    try {
      dispatch(actions.fetchTvShowsBegin());
      const response = await Axios.get(
        `https://www.episodate.com/api/most-popular?page=${pNum}`
      );
      if (isResponseSuccessful(response)) {
        dispatch(actions.fetchTvShowsSuccess(response.data));
      }
    } catch (error) {
      console.log("Error during fetching TV-Shows:  ", error);
      dispatch(actions.fetchTvShowsError());
    }
  };
};

const addTvShow = (data) => {
  return async (dispatch) => {
    try {
      dispatch(actions.addTvShowBegin());

      dispatch(actions.addTvShowSuccess(data));
    } catch (error) {
      console.log("Error during adding tv-show: ", error);
      dispatch(actions.addTvShowsError());
    }
  };
};

const removeTvShow = (id) => {
  return async (dispatch) => {
    try {
      dispatch(actions.deleteTvShowBegin());

      dispatch(actions.deleteTvShowSuccess(id));
    } catch (error) {
      console.log("Error in removing tv-show: ", error);
      dispatch(actions.addTvShowsError());
    }
  };
};

const editTvShow = (id, updatedTvShow) => {
  return async (dispatch) => {
    try {
      dispatch(actions.editTvShowBegin());

      dispatch(actions.editTvShowSuccess(id, updatedTvShow));
    } catch (error) {
      console.log("Error during editing tv-show: ", error);
      dispatch(actions.addTvShowsError());
    }
  };
};

const searchTvShowAPI = (searchQuery) => {
  return async (dispatch) => {
    try {
      dispatch(actions.searchTvShowsAPIBegin());

      const response = await Axios.get(
        `https://www.episodate.com/api/search?q=${searchQuery}`
      );

      dispatch(actions.searchTvShowsAPISuccess(response.data.tv_shows));
    } catch (error) {
      console.log("Error during searching tv-show: ", error);
      dispatch(actions.addTvShowsError());
    }
  };
};

const tvShowDetails = (searchQuery) => {
  return async (dispatch) => {
    try {
      dispatch(actions.tvShowDetailsBegin());
      const response = await Axios.get(
        `https://www.episodate.com/api/show-details?q=${searchQuery}`
      );

      dispatch(actions.tvShowDetailsSuccess(response.data.tvShow));
    } catch (error) {
      console.log("Error during Finding Tv-Show details");
      dispatch(actions.addTvShowsError());
    }
  };
};

export {
  fetchAllTvShows,
  addTvShow,
  removeTvShow,
  editTvShow,
  searchTvShowAPI,
  tvShowDetails,
};
