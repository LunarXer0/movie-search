import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Search from "./Search";
import Poster from "./Poster";
import MovieDetails from "./MovieDetails";
import { loadInitialMovie } from "../actions/movie";

import { Row, Col, Layout } from "antd";

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
    const { Content } = Layout;
    const { displayedMovie } = this.props;
    return (
      <Fragment>
        <Search />

        <Poster />

        <MovieDetails />
      </Fragment>
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
