import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Manatee from "../Manatee/Manatee";
import Narwhal from "../Narwhal/Narwhal";
import Whale from "../Whale/Whale";

import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <h1>Marine Mammals</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/manatee">Manatee</Link>
            </li>
            <li>
              <Link to="/narwhal">Narwhal</Link>
            </li>
            <li>
              <Link to="/whale">Whale</Link>
            </li>
            <li>
              <Link to="/whale/beluga">Beluga Whale</Link>
            </li>
            <li>
              <Link to="/whale/blue">Blue Whale</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/manatee" element={<Manatee />} />
          <Route path="/narwhal" element={<Narwhal />} />
          <Route path="/whale" element={<Whale />} />
          <Route path="/whale/:type" element={<Whale />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
