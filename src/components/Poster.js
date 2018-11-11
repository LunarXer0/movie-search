import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadInitialMovie } from "../actions/movie";

class Poster extends Component {
  componentDidMount() {
    this.props.loadInitialMovie();
  }
  render() {
    return <div>Image goes here</div>;
  }
}

const mapStateToProps = state => ({
  initialLoad: state.movie.initialLoad,
  initialMovie: state.movie.initialMovie
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
)(Poster);
