import React from "react";
import { element } from "prop-types";
import Content from "./Content";

const App = props => [
  <h1 key="1" style={{ textAlign: "center" }}>
    Routes en React JS
  </h1>,

  <div key="2" className="App">
    <Content>{props.children}</Content>
  </div>
];

App.propTypes = {
  children: element
};

export default App;
