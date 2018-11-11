import { API_KEY } from "../utils/api";
import { LOAD_INITIAL_MOVIE } from "../reducers/movie";

export function loadInitialMovie() {
  return async function(dispatch) {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=Baby%20Driver&page=1&include_adult=false`
    );
    const movie = await res.json();
    return dispatch({
      type: LOAD_INITIAL_MOVIE,
      data: movie.results
    });
  };
}
