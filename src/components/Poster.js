import React from "react";
import { connect } from "react-redux";

const Poster = ({ displayedMovie, initialLoad }) => (
  <div>
    {!initialLoad ? (
      <h1>Test</h1>
    ) : (
      <img
        src={`http://image.tmdb.org/t/p/w300${displayedMovie.poster_path}`}
        alt="Movie Poster"
      />
    )}
  </div>
);

const mapStateToProps = state => ({
  initialLoad: state.movie.initialLoad,
  displayedMovie: state.movie.displayedMovie
});

export default connect(mapStateToProps)(Poster);
