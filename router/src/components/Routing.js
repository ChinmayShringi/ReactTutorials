import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { navigate } from "@reach/router";
import About from "./About";
import Home from "./Home";

function Routing(props) {
  const handleOnSubmit = (event) => {
    // event.preventDefault();
    navigate("/about");
  };
  return (
    <Router>
      <div>
        <ul>
          {/* BELOW LINK IS USED FOR ROUTING */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <p onClick={handleOnSubmit}>About</p>
          </li>
        </ul>

        <Routes>
          {/* BELOW ROUTE WILL DISPLAY THE CONTENT */}

          <Route path="/" element={<Home name="data" />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default Routing;
