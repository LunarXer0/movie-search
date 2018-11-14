import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";

import Search from "./Search";
import Poster from "./Poster";
import MovieDetails from "./MovieDetails";
import { loadInitialMovie } from "../actions/movie";

class AppLayout extends Component {
  componentDidMount() {
    const { initialLoad, displayedMovie, loadInitialMovie } = this.props;
    if (initialLoad === false) {
      loadInitialMovie();
    } else {
      document.body.style.background = `url(http://image.tmdb.org/t/p/w1280${
        displayedMovie.backdrop_path
      })`;
    }
  }
  render() {
    return (
      <Grid>
        {/* <Search /> */}

        <Poster />

        <MovieDetails />
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  initialLoad: state.movie.initialLoad,
  displayedMovie: state.movie.displayedMovie
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadInitialMovie
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppLayout);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .details {
    height: 100%;
    background: rgba(0, 0, 0, 0.85);
    padding: 25px;
  }
`;
