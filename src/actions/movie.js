import { API_KEY } from "../utils/api";
import {
  LOAD_INITIAL_MOVIE,
  SEARCH_MOVIE,
  GET_MOVIE_FROM_OPTION
} from "../reducers/movie";

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

export function searchMovies(title) {
  return async function(dispatch) {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`
    );
    const { results } = await res.json();
    return dispatch({
      type: SEARCH_MOVIE,
      data: results
    });
  };
}

export function getOption(id) {
  return async function(dispatch) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    const movie = await res.json();
    return dispatch({
      type: GET_MOVIE_FROM_OPTION,
      data: movie
    });
  };
}
