import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { searchMovies } from "../actions/movie";

import { Input } from "antd";

//const TMDBLogo = "../images/logo.png";

// export const TMDBSvg = () => (
//   <img
//     src="../images/logo.png"
//     alt="The Online Movie Database Logo"
//     height="300px"
//   />
// );

const Search = ({ searchMovies }) => (
  <Input
    placeholder="Movie Title"
    size="small"
    onChange={e => searchMovies(e.currentTarget.value)}
  />
);

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
