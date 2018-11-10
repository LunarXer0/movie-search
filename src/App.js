import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Row, Col, Layout } from "antd";

class App extends Component {
  render() {
    const { Content } = Layout;
    return (
      <Fragment>
        <Layout style={{ minHeight: "100vh" }}>
          <Content style={{ marginTop: "100px" }}>
            <Row type="flex" justify="space-around" align="middle">
              <Col
                style={{ textAlign: "center", background: "#ddd" }}
                span={16}
              >
                Search Component
              </Col>
            </Row>
            <Row type="flex" justify="center" align="middle">
              <Col
                style={{ textAlign: "center", background: "green" }}
                span={6}
              >
                Image
              </Col>
              <Col style={{ textAlign: "center", background: "red" }} span={10}>
                Movie Details
              </Col>
            </Row>
          </Content>
        </Layout>
      </Fragment>
    );
  }
}

export default App;
