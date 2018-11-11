import React from "react";

import { Input } from "antd";

const TMDBLogo = "../images/logo.png";

export const TMDBSvg = () => (
  <img
    src="../images/logo.png"
    alt="The Online Movie Database Logo"
    height="300px"
  />
);

const Search = () => <Input placeholder="Movie Title" size="small" />;

export default Search;
