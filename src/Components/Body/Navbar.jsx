import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to={"/addcountry"}>
        <button>Add Country</button>
      </Link>
      <Link to={"/addcity"}>
        <button>Add City</button>
      </Link>
    </div>
  );
}
