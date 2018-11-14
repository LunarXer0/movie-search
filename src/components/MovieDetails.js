import React, { Fragment } from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux";

const MovieDetails = ({ displayedMovie, initialLoad }) => (
  <div className="details">
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
        <span
          style={{ color: "#fafafa", display: "block", marginBottom: "20px" }}
        >
          {handleGenres(displayedMovie.production_companies)}
        </span>
        <Row style={{ marginBottom: "20px" }}>
          <Col span={10}>
            <span style={{ color: "#fafafa" }}>Original Release:</span>
            <span
              style={{
                color: "#00FC87",
                fontSize: "1.6em",
                lineHeight: "1.1em",
                display: "block"
              }}
            >
              {displayedMovie.release_date}
            </span>
          </Col>
          <Col span={10}>
            <span style={{ color: "#fafafa" }}>Running Time:</span>
            <span
              style={{
                color: "#00FC87",
                fontSize: "1.6em",
                lineHeight: "1.1em",
                display: "block"
              }}
            >
              {displayedMovie.runtime} mins
            </span>
          </Col>
        </Row>
        <Row>
          <Col span={10}>
            <span style={{ color: "#fafafa" }}>Box Office:</span>
            <span
              style={{
                color: "#00FC87",
                fontSize: "1.6em",
                lineHeight: "1.1em",
                display: "block"
              }}
            >
              {displayedMovie.revenue}
            </span>
          </Col>
          <Col span={10}>
            <span style={{ color: "#fafafa" }}>Vote Average:</span>
            <span
              style={{
                color: "#00FC87",
                fontSize: "1.6em",
                lineHeight: "1.1em",
                display: "block"
              }}
            >
              {displayedMovie.vote_average} / 10
            </span>
          </Col>
        </Row>
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
