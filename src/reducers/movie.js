export const SEARCH_MOVIE = "SEARCH_MOVIE";
export const LOAD_INITIAL_MOVIE = "LOAD_INITIAL_MOVIE";

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
    default:
      return state;
  }
};

export default movie;
