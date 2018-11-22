import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// We created a component with a simple arrow function.
const Header = props => {
  const { title = "Routes en React" } = props;

  return (
    <header className="App-header">
      <h1 className="App-title">{title}</h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/notes">Notes</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

// Even with Functional Components we are able to validate our PropTypes.
Header.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default Header;
