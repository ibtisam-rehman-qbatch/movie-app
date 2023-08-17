const actions = {
  FETECH_MOVIES_BEGIN: "FETECH_MOVIES_BEGIN",
  FETECH_MOVIES_SUCCESS: "FETECH_MOVIES_SUCCESS",

  ADD_MOVIE: "ADD_MOVIE",
  DELETE_MOVIE: "DELETE_MOVIE",
  EDIT_MOVIE: "EDIT_MOVIE",

  fetchMoviesBegin: () => {
    return {
      type: actions.FETECH_MOVIES_BEGIN,
    };
  },
  fetchMoviesSuccess: (data) => {
    return {
      type: actions.FETECH_MOVIES_SUCCESS,
      data,
    };
  },
};
