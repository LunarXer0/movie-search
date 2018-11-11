const GET_MOVIE = "GET_MOVIE";
const initialState = {
  initialLoad: false
};

const movie = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case GET_MOVIE:
      return state;
    default:
      return state;
  }
};

export default movie;
