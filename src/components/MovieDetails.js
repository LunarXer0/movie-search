import React, { Fragment } from "react";
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
        <Stats>
          <div>
            Original Release: <br />
            <span className="highlight">{displayedMovie.release_date}</span>
          </div>

          <div>
            Running Time:
            <br />
            <span className="highlight">{displayedMovie.runtime} mins</span>
          </div>

          <div>
            Box Office:
            <br />
            <span className="highlight">{displayedMovie.revenue}</span>
          </div>

          <div>
            Vote Average:
            <br />
            <span className="highlight">
              {displayedMovie.vote_average} / 10
            </span>
          </div>
        </Stats>
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
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  .highlight {
    color: #00fc87;
    font-size: 1.6em;
    line-height: 1.1em;
  }
`;
