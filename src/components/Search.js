import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { searchMovies } from "../actions/movie";

import { AutoComplete } from "antd";

//const TMDBLogo = "../images/logo.png";

// export const TMDBSvg = () => (
//   <img
//     src="../images/logo.png"
//     alt="The Online Movie Database Logo"
//     height="300px"
//   />
// );

const Search = ({ searchMovies, movies }) => (
  <AutoComplete
    placeholder="Movie Title"
    dataSource={handleMovies(movies)}
    onSelect={value => console.log(value)}
    onChange={value => searchMovies(value)}
  />
);

function handleMovies(movies) {
  let moviesArr = [];
  return (moviesArr = movies.map(movie => movie.title));
}

const mapStateToProps = state => ({
  movies: state.movie.movies
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchMovies
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
