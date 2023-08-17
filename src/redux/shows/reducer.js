import actions from "./actions";
const initialState = {
  tvShows: [],
  loading: false,
  success: null,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.FETECH_SHOWS_BEGIN:
      return { ...state, loading: true, success: null, error: null };

    case actions.FETECH_SHOWS_SUCCESS:
      return {
        ...state,
        tvShows: payload,
        loading: false,
      };

    case actions.EDIT_SHOW_BEGIN:
      return { ...state, loading: true, success: null, error: null };

    case actions.ADD_SHOW_BEGIN:
      return { ...state, loading: true, success: null, error: null };

    case actions.DELETE_SHOW_BEGIN:
      return { ...state, loading: true, success: null, error: null };

    // case actions.ADD_SHOW:
    //   return [...state, { payload }];

    // case actions.DELETE_SHOW:
    //   return state.filter((show) => show.id !== payload.id);

    // case actions.API_ERROR:

    default:
      return state;
  }
};
