import React, { Component, Fragment } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";

import rootReducer from "./reducers/rootReducer";

import "./App.css";

import Search, { TMDBSvg, Title } from "./components/Search";
import { getMovie } from "./utils/api";

import { Row, Col, Layout } from "antd";

const movie = createStore(rootReducer, {}, composeWithDevTools());

class App extends Component {
  componentDidMount() {
    getMovie();
  }
  render() {
    const { Content } = Layout;
    return (
      <Provider store={movie}>
        <Fragment>
          <Layout style={{ minHeight: "100vh" }}>
            <Content style={{ marginTop: "100px" }}>
              <Row type="flex" justify="center" align="middle">
                <Col
                  style={{ textAlign: "center", background: "green" }}
                  span={6}
                >
                  <TMDBSvg />
                </Col>
                <Col
                  style={{ textAlign: "center", background: "#ddd" }}
                  span={10}
                >
                  <Search />
                </Col>
              </Row>
              <Row type="flex" justify="center" align="middle">
                <Col span={6}>Image</Col>
                <Col
                  style={{ textAlign: "center", background: "red" }}
                  span={10}
                >
                  Movie Details
                </Col>
              </Row>
            </Content>
          </Layout>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
