import React, { Fragment } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./reducers/rootReducer";

import "./App.css";

import Search, { TMDBSvg } from "./components/Search";
import { getMovie } from "./utils/api";

import { Row, Col, Layout } from "antd";
import MovieDetails from "./components/MovieDetails";

const middleware = [logger, thunk];

const movie = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

const { Content } = Layout;

const App = () => (
  <Provider store={movie}>
    <Fragment>
      <Layout style={{ minHeight: "100vh" }}>
        <Content style={{ marginTop: "100px" }}>
          <Row type="flex" justify="center" align="middle">
            <Col style={{ textAlign: "center", background: "green" }} span={6}>
              <TMDBSvg />
            </Col>
            <Col style={{ textAlign: "center", background: "#ddd" }} span={10}>
              <Search />
            </Col>
          </Row>
          <Row type="flex" justify="center" align="middle">
            <Col span={6}>Image</Col>
            <Col style={{ textAlign: "center", background: "red" }} span={10}>
              <MovieDetails />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Fragment>
  </Provider>
);

export default App;
