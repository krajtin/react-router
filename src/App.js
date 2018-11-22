import React from "react";
import { element } from "prop-types";
import Content from "./Content";
import Header from "./Header";
import "./App.css";

const App = props => [
  <div className="App">
    <Header />,<Content>{props.children}</Content>
  </div>
];

App.propTypes = {
  children: element
};

export default App;
