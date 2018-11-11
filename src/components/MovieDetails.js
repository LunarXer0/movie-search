import React, { Component } from "react";
import { connect } from "react-redux";
import { loadInitialMovie } from "../actions/movie";

class MovieDetails extends Component {
  componentDidMount() {
    loadInitialMovie();
  }
  render() {
    return <div>Movie Details</div>;
  }
}

const mapStateToProps = dispatch => {};
export default connect()(MovieDetails);
