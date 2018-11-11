const GET_MOVIE = "GET_MOVIE";

const movie = (state = {}, action) => {
  const { type } = action;
  switch (type) {
    case GET_MOVIE:
      return state;
    default:
      return state;
  }
};

export default movie;
