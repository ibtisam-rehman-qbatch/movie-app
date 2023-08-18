import actions from "./actions";
const initialState = {
  tvShows: [],
  loading: false,
  success: null,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.FETECH_TV_SHOWS_BEGIN:
      return { ...state, loading: true, success: null, error: null };

    case actions.FETECH_TV_SHOWS_SUCCESS:
      return { ...state, tvShows: payload, loading: false };

    case actions.ADD_TV_SHOW_BEGIN:
      return { ...state, loading: true, success: null, error: null };

    case actions.ADD_TV_SHOW_SUCCESS:
      return { ...state, tvShows: [...state.tvShows, payload], loading: false };

    case actions.EDIT_TV_SHOW_BEGIN:
      return { ...state, loading: true, success: null, error: null };

    case actions.EDIT_TV_SHOW_SUCCESS: {
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

    case actions.DELETE_TV_SHOW_BEGIN:
      return { ...state, loading: true, success: null, error: null };

    case actions.DELETE_TV_SHOW_SUCCESS: {
      const updatedTvShows = state.tvShows.filter(
        (show) => show.id !== payload
      );

      return {
        ...state,
        tvShows: updatedTvShows,
        loading: false,
      };
    }

    case actions.SEARCH_TV_SHOWS_BEGIN:
      return { ...state, loading: true, success: null, error: null };

    case actions.SEARCH_TV_SHOWS_SUCCESS: {
      const filteredTvShows = state.tvShows.filter((show) =>
        show.name.toLowerCase().includes(payload.toLowerCase())
      );

      return {
        ...state,
        tvShows: filteredTvShows,
        loading: false,
      };
    }

    case actions.SEARCH_TV_SHOWS_API_BEGIN:
      return { ...state, loading: true, success: null, error: null };

    case actions.SEARCH_TV_SHOWS_API_SUCCESS:
      return { ...state, tvShows: payload, loading: false };

    // case actions.API_ERROR:

    default:
      return state;
  }
};
