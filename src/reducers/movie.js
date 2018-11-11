export const GET_MOVIE = "GET_MOVIE";
export const LOAD_INITIAL_MOVIE = "LOAD_INITIAL_MOVIE";

const initialState = {
  initialLoad: false,
  initialMovie: [],
  movies: []
};

const movie = (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case LOAD_INITIAL_MOVIE:
      return {
        ...state,
        initialLoad: true,
        initialMovie: data
      };
    case GET_MOVIE:
      return state;
    default:
      return state;
  }
};

export default movie;
