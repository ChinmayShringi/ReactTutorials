import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
function Routing() {
  return (
    <Router>
      <div>
        <ul>
          {/* BELOW LINK IS USED FOR ROUTING */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <Routes>
          {/* BELOW ROUTE WILL DISPLAY THE CONTENT */}

          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default Routing;
