import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { searchMovies, getOption } from "../actions/movie";

import { AutoComplete } from "antd";

//const TMDBLogo = "../images/logo.png";

// export const TMDBSvg = () => (
//   <img
//     src="../images/logo.png"
//     alt="The Online Movie Database Logo"
//     height="300px"
//   />
// );

const Search = ({ searchMovies, movies, getOption }) => (
  <AutoComplete
    style={{
      gridColumn: "2 / -1",
      backgroundColor: "transparent",
      marginBottom: "100px"
    }}
    placeholder="Movie Title"
    onSelect={value => getOption(value)}
    onChange={value => (value ? searchMovies(value) : "")}
  >
    {movies.map((movie, index) => (
      <AutoComplete.Option
        style={{ backgroundColor: "#343434", color: "#fafafa" }}
        key={`movie-result-${index}`}
        value={movie.id.toString()}
      >
        {movie.title}
      </AutoComplete.Option>
    ))}
  </AutoComplete>
);

const mapStateToProps = store => ({
  movies: store.movie.movies
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchMovies,
      getOption
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
