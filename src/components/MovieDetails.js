import React, { Fragment } from "react";
import { Row, Col } from "antd";
import { connect } from "react-redux";
import styled from "styled-components";

const MovieDetails = ({ displayedMovie, initialLoad }) => (
  <DetailsDiv>
    {!initialLoad ? (
      <h1>Loading..</h1>
    ) : (
      <Fragment>
        <h1>{displayedMovie.title}</h1>
        <span className="tagline">{displayedMovie.tagline}</span>
        <p className="overview">{displayedMovie.overview}</p>
        <span className="genres">{handleGenres(displayedMovie.genres)}</span>
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
  </DetailsDiv>
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

const DetailsDiv = styled.div`
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  padding: 25px;
  color: #fafafa;

  h1 {
    color: #fafafa;
  }

  .tagline {
    font-size: 1.3em;
    color: #00fc87;
  }

  .overview {
    marginbottom: 1rem;
  }

  .genres {
    color: #00fc87;
    font-size: 1.4em;
  }
`;

const Stats = styled.div`
  display: grid;
`;
