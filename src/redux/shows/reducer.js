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

    case actions.ADD_SHOW_BEGIN:
      return { ...state, loading: true, success: null, error: null };

    case actions.ADD_SHOW_SUCCESS:
      return { ...state, tvShows: [...state.tvShows, payload], loading: false };

    case actions.EDIT_SHOW_BEGIN:
      return { ...state, loading: true, success: null, error: null };

    case actions.EDIT_SHOW_SUCCESS: {
      const { id, updatedTvShow } = payload;
      const tvShowIndex = state.tvShows.findIndex((tvShow) => tvShow.id === id);
      if (tvShowIndex !== -1) {
        const updatedTvShows = [...state.tvShows];
        updatedTvShows[tvShowIndex] = {
          ...updatedTvShows[tvShowIndex],
          ...updatedTvShow,
        };
        return {
          ...state,
          tvShows: updatedTvShows,
          loading: false,
        };
      }
      return state;
    }

    case actions.DELETE_SHOW_BEGIN:
      return { ...state, loading: true, success: null, error: null };

    case actions.DELETE_SHOW_SUCCESS: {
      const updatedTvShows = state.tvShows.filter(
        (show) => show.id !== payload
      );

      return {
        ...state,
        tvShows: updatedTvShows,
        loading: false,
      };
    }

    // case actions.API_ERROR:

    default:
      return state;
  }
};
