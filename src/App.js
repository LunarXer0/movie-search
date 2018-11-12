import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./reducers/rootReducer";

import "./App.css";

import AppLayout from "./components/AppLayout";

const middleware = [logger, thunk];

const movie = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

const App = () => (
  <Provider store={movie}>
    <AppLayout />
  </Provider>
);

export default App;
