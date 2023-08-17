const actions = {
  FETECH_SHOWS_BEGIN: "FETECH_SHOWS_BEGIN",
  FETECH_SHOWS_SUCCESS: "FETECH_SHOWS_SUCCESS",

  EDIT_SHOW_BEGIN: "EDIT_SHOW_BEGIN",
  EDIT_SHOW_SUCCESS: "EDIT_SHOW_SUCCESS",

  ADD_SHOW_BEGIN: "ADD_SHOW_BEGIN",
  ADD_SHOW_SUCCESS: "ADD_SHOW_SUCCESS",

  DELETE_SHOW_BEGIN: "DELETE_SHOW_BEGIN",
  DELETE_SHOW_SUCCESS: "DELETE_SHOW_SUCCESS",

  API_ERROR: "API_ERROR",

  fetchShowsBegin: () => {
    return {
      type: actions.FETECH_SHOWS_BEGIN,
    };
  },
  fetchShowsSuccess: (data) => {
    return {
      type: actions.FETECH_SHOWS_SUCCESS,
      payload: data,
    };
  },

  editShowBegin: () => {
    return {
      type: actions.EDIT_SHOW_BEGIN,
    };
  },

  editShowSuccess: (id, updatedTvShow) => {
    return {
      type: actions.EDIT_SHOW_SUCCESS,
      payload: {
        id,
        updatedTvShow,
      },
    };
  },

  addShowBegin: () => {
    return {
      type: actions.ADD_SHOW_BEGIN,
    };
  },

  addShowSuccess: (data) => {
    return {
      type: actions.ADD_SHOW_SUCCESS,
      payload: data,
    };
  },

  deleteShowBegin: () => {
    return {
      type: actions.DELETE_SHOW_BEGIN,
    };
  },

  deleteShowSuccess: (data) => {
    return {
      type: actions.DELETE_SHOW_SUCCESS,
      payload: data,
    };
  },

  fetchShowsError: (error) => {
    return {
      type: actions.API_ERROR,
      payload: error,
    };
  },

  addShowsError: (error) => {
    return {
      type: actions.API_ERROR,
      payload: error,
    };
  },
};

export default actions;
