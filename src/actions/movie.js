import { API_KEY } from "../utils/api";
import { LOAD_INITIAL_MOVIE } from "../reducers/movie";

export function loadInitialMovie() {
  return async function(dispatch) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/157336?api_key=${API_KEY}&language=en-US`
    );
    const movie = await res.json();
    console.log(movie);
    return dispatch({
      type: LOAD_INITIAL_MOVIE,
      data: movie
    });
  };
}
