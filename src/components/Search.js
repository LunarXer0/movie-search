import React from "react";

import { Input } from "antd";

const TMDBLogo = "../images/logo.png";

export const TMDBSvg = () => (
  <img
    src="../images/logo.png"
    alt="The Online Movie Database Logo"
    height="100px"
  />
);

const Search = () => (
  <Input
    placeholder="Movie Title"
    size="small"
    style={{ outline: "none", background: "transparent" }}
  />
);

export default Search;
