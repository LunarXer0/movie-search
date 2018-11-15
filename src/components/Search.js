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
    style={{ gridColumn: "1 / -1" }}
    placeholder="Movie Title"
    dataSource={handleMovies(movies)}
    onSelect={value => console.log(value)}
    onChange={value => (value ? searchMovies(value) : "")}
  />
);

function handleMovies(movies) {
  let moviesArr = [];
  moviesArr = movies.map(movie => movie.title);
  return moviesArr;
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
