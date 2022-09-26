import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div>
      <h2>Not Found 404</h2>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default NoMatch;
