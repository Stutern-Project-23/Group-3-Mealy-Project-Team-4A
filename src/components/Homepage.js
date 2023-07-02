import "../styles/homepage.css";
import "../styles/homepagenav.css";


import React from "react";

import Categories from "./Categories";

function Homepage() {


  return (
    <div className="homepage-container">
      <Categories />
    </div>
  );
}

export default Homepage;
