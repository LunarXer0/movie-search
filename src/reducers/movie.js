export const SEARCH_MOVIE = "SEARCH_MOVIE";
export const LOAD_INITIAL_MOVIE = "LOAD_INITIAL_MOVIE";
export const GET_MOVIE_FROM_OPTION = "GET_MOVIE_FROM_OPTION";

const initialState = {
  initialLoad: false,
  displayedMovie: [],
  movies: []
};

const movie = (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case LOAD_INITIAL_MOVIE:
      return {
        ...state,
        initialLoad: true,
        displayedMovie: data
      };
    case SEARCH_MOVIE:
      return {
        ...state,
        movies: data
      };
    case GET_MOVIE_FROM_OPTION:
      return {
        ...state,
        displayedMovie: data
      };
    default:
      return state;
  }
};

export default movie;
