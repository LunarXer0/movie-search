import React, { Fragment } from "react";
import { connect } from "react-redux";

const MovieDetails = ({ displayedMovie, initialLoad }) => (
  <div>
    {!initialLoad ? (
      <h1>Loading..</h1>
    ) : (
      <Fragment>
        <h1 style={{ color: "#fafafa" }}>{displayedMovie.title}</h1>
        <span style={{ color: "#00FC87", fontSize: "1.3em" }}>
          {displayedMovie.tagline}
        </span>
        <p style={{ color: "#fafafa", marginBottom: "1rem" }}>
          {displayedMovie.overview}
        </p>
        <span style={{ color: "#00FC87", fontSize: "1.4em" }}>
          {handleGenres(displayedMovie.genres)}
        </span>
      </Fragment>
    )}
  </div>
);

function handleGenres(genres) {
  console.log(genres);
  let genreArr = [],
    string;
  if (genres !== undefined) {
    genres.forEach(genre => {
      genreArr.push(genre.name);
    });
  }
  string = genreArr.join(",");
  console.log(string);
  return string;
}

const mapStateToProps = state => ({
  initialLoad: state.movie.initialLoad,
  displayedMovie: state.movie.displayedMovie
});

export default connect(mapStateToProps)(MovieDetails);
