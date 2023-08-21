import Axios from "axios";
import actions from "./actions";
import { slackNotification } from "../../utilities/utils";

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
      dispatch(actions.tvShowsError(error));

      var raw = '{"text": "There\'s error during fetching Tv-Shows"}';
      slackNotification(raw);
    }
  };
};

const addTvShow = (data) => {
  return async (dispatch) => {
    try {
      dispatch(actions.addTvShowBegin());

      dispatch(actions.addTvShowSuccess(data));
    } catch (error) {
      dispatch(actions.tvShowsError(error));

      var raw = '{"text": "There\'s error during adding a Tv-Show"}';
      slackNotification(raw);
    }
  };
};

const removeTvShow = (id) => {
  return async (dispatch) => {
    try {
      dispatch(actions.deleteTvShowBegin());

      dispatch(actions.deleteTvShowSuccess(id));
    } catch (error) {
      dispatch(actions.tvShowsError(error));

      var raw = '{"text": "There\'s error during removing a Tv-Show"}';
      slackNotification(raw);
    }
  };
};

const editTvShow = (id, updatedTvShow) => {
  return async (dispatch) => {
    try {
      dispatch(actions.editTvShowBegin());

      dispatch(actions.editTvShowSuccess(id, updatedTvShow));
    } catch (error) {
      dispatch(actions.tvShowsError(error));

      var raw = '{"text": "There\'s error during editing a Tv-Show Details"}';
      slackNotification(raw);
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
      dispatch(actions.tvShowsError(error));
      var raw = '{"text": "There\'s error during showing Searching a Tv Show"}';
      slackNotification(raw);
    }
  };
};

const sortTvShows = (field = "start_date") => {
  return async (dispatch) => {
    try {
      dispatch(actions.sortTvShowsBegin());

      dispatch(actions.sortTvShowsSuccess(field));
    } catch (error) {
      dispatch(actions.tvShowsError(error));

      var raw = '{"text": "There\'s error during Sorting Tv-Shows"}';
      slackNotification(raw);
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
      dispatch(actions.tvShowsError(error));

      var raw = '{"text": "There\'s error during showing Tv-Show Details"}';
      slackNotification(raw);
    }
  };
};

const reInit = () => {
  return async (dispatch) => {
    try {
      dispatch(actions.reinitializeSuccess());
    } catch (error) {
      dispatch(actions.tvShowsError(error));
      var raw =
        '{"text": "There\'s error during reinitializing Tv-Show state"}';
      slackNotification(raw);
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
  sortTvShows,
  reInit,
};
