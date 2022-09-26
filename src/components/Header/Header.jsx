import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <ul style={{ display: "flex" }}>
        <li style={{ margin: "1em", listStyle: "none" }}>
          <Link to="/">Dashboard</Link>
        </li>
        <li style={{ margin: "1em", listStyle: "none" }}>
          <Link to="/login">Login</Link>
        </li>
        <li style={{ margin: "1em", listStyle: "none" }}>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
