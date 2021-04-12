import React from "react";
import { Link } from "react-router-dom";

function FourOhFour() {
  return (
    <div>
      Sorry no page matches this path
      <Link to="/">
        <button>Back To Home</button>
      </Link>
    </div>
  );
}

export default FourOhFour;
