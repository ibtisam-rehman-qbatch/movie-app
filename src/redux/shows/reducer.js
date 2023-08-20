import actions from "./actions";
import { calculateYear } from "../../utilities/utils";
import { sortBy, toNumber } from "lodash";
const initialState = {
  tvShows: [],
  summary: {},
  tvShowDetail: {},
  loading: false,
  success: null,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.FETECH_TV_SHOWS_BEGIN:
      return { ...state, loading: true, success: null, error: null };

    case actions.FETECH_TV_SHOWS_SUCCESS:
      return {
        ...state,
        tvShows: payload.tv_shows,
        summary: {
          pages: payload.pages,
          page: payload.page,
          total: payload.total,
        },
        loading: false,
      };

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

    case actions.TV_SHOW_DETAILS_BEGIN:
      return { ...state, loading: true, success: null, error: null };

    case actions.TV_SHOW_DETAILS_SUCCESS:
      return {
        ...state,
        tvShowDetail: payload,
        loading: false,
      };

    case actions.SORT_TV_SHOWS_BEGIN:
      return { ...state, loading: true, success: null, error: null };

    case actions.SORT_TV_SHOWS_SUCCESS:
      return {
        ...state,
        tvShows: sortBy(state.tvShows, (show) =>
          toNumber(calculateYear(show.start_date))
        ),

        loading: false,
      };
    // case actions.API_ERROR:

    default:
      return state;
  }
};
