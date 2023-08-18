const actions = {
  FETECH_TV_SHOWS_BEGIN: "FETECH_TV_SHOWS_BEGIN",
  FETECH_TV_SHOWS_SUCCESS: "FETECH_TV_SHOWS_SUCCESS",

  EDIT_TV_SHOW_BEGIN: "EDIT_TV_SHOW_BEGIN",
  EDIT_TV_SHOW_SUCCESS: "EDIT_TV_SHOW_SUCCESS",

  ADD_TV_SHOW_BEGIN: "ADD_TV_SHOW_BEGIN",
  ADD_TV_SHOW_SUCCESS: "ADD_TV_SHOW_SUCCESS",

  DELETE_TV_SHOW_BEGIN: "DELETE_TV_SHOW_BEGIN",
  DELETE_TV_SHOW_SUCCESS: "DELETE_TV_SHOW_SUCCESS",

  SEARCH_TV_SHOWS_BEGIN: "SEARCH_TV_SHOWS_BEGIN",
  SEARCH_TV_SHOWS_SUCCESS: "SEARCH_TV_SHOWS_SUCCESS",

  SEARCH_TV_SHOWS_API_BEGIN: "SEARCH_TV_SHOWS_API_BEGIN",
  SEARCH_TV_SHOWS_API_SUCCESS: "SEARCH_TV_SHOWS_API_SUCCESS",

  API_ERROR: "API_ERROR",

  fetchTvShowsBegin: () => {
    return {
      type: actions.FETECH_TV_SHOWS_BEGIN,
    };
  },
  fetchTvShowsSuccess: (data) => {
    return {
      type: actions.FETECH_TV_SHOWS_SUCCESS,
      payload: data,
    };
  },

  editTvShowBegin: () => {
    return {
      type: actions.EDIT_TV_SHOW_BEGIN,
    };
  },

  editTvShowSuccess: (id, updatedTvShow) => {
    return {
      type: actions.EDIT_TV_SHOW_SUCCESS,
      payload: {
        id,
        updatedTvShow,
      },
    };
  },

  addTvShowBegin: () => {
    return {
      type: actions.ADD_TV_SHOW_BEGIN,
    };
  },

  addTvShowSuccess: (data) => {
    return {
      type: actions.ADD_TV_SHOW_SUCCESS,
      payload: data,
    };
  },

  deleteTvShowBegin: () => {
    return {
      type: actions.DELETE_TV_SHOW_BEGIN,
    };
  },

  deleteTvShowSuccess: (data) => {
    return {
      type: actions.DELETE_TV_SHOW_SUCCESS,
      payload: data,
    };
  },

  searchTvShowsBegin: () => {
    return {
      type: actions.ADD_TV_SHOW_BEGIN,
    };
  },

  searchTvShowsSuccess: (searchQuery) => {
    return {
      type: actions.SEARCH_TV_SHOWS_SUCCESS,
      payload: searchQuery,
    };
  },

  searchTvShowsAPIBegin: () => {
    return {
      type: actions.SEARCH_TV_SHOWS_API_BEGIN,
    };
  },

  searchTvShowsAPISuccess: (queryResult) => {
    return {
      type: actions.SEARCH_TV_SHOWS_API_SUCCESS,
      payload: queryResult,
    };
  },

  fetchTvShowsError: (error) => {
    return {
      type: actions.API_ERROR,
      payload: error,
    };
  },

  addTvShowsError: (error) => {
    return {
      type: actions.API_ERROR,
      payload: error,
    };
  },
};

export default actions;
