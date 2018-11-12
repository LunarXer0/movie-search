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
        <Layout
          style={{
            minHeight: "100vh",
            background: `url(http://image.tmdb.org/t/p/w1280${
              displayedMovie.backdrop_path
            })`
          }}
        >
          <Content style={{ marginTop: "100px" }}>
            <Row type="flex" justify="center" align="middle">
              <Col
                style={{ textAlign: "center", background: "green" }}
                span={6}
              >
                {/* <TMDBSvg /> */}
              </Col>
              <Col
                style={{ textAlign: "center", background: "#ddd" }}
                span={10}
              >
                <Search />
              </Col>
            </Row>
            <Row type="flex" justify="center" align="start">
              <Col span={6}>
                <Poster />
              </Col>
              <Col
                style={{ background: "rgba(0,0,0,.85)", padding: "25px" }}
                span={10}
              >
                <MovieDetails />
              </Col>
            </Row>
          </Content>
        </Layout>
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
