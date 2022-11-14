import React from "react";
import { FilterPanel } from "./FilterPanel";
import Hits from "./Hits";
import { SearchBar } from "./SearchBar";

const Home = () => {
  return (
    <div className="App_Home">
      {/* Search Bar */}
      <SearchBar />
      <div className="App_Home_panelHits-wrap">
        <div className="App_Home_panel-wrap">
          {/* Side Panel */}
          <FilterPanel />
        </div>
        <div className="App_Home_hits-wrap">
          {/* Hits or Empty Results */}
          <Hits />
        </div>
      </div>
    </div>
  );
};

export default Home;
