import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import FilterSort from "./FilterSort";
import HogForm from "./HogForm";
import hogs from "../porkers_data";

function App() {
  const [hogData, setHogData] = useState(hogs);
  const [showGreased, setShowGreased] = useState(false);
  const [sortBy, setSortBy] = useState("none");
  const [hiddenHogs, setHiddenHogs] = useState([]);

  // Add new hog
  function handleAddHog(newHog) {
    setHogData([...hogData, newHog]);
  }

  // Hide a hog
  function handleHideHog(hogName) {
    setHiddenHogs([...hiddenHogs, hogName]);
  }

  // Filter and sort hogs
  function getDisplayedHogs() {
    let displayedHogs = [...hogData];

    // Filter by greased
    if (showGreased) {
      displayedHogs = displayedHogs.filter(hog => hog.greased);
    }

    // Filter out hidden hogs
    displayedHogs = displayedHogs.filter(hog => !hiddenHogs.includes(hog.name));

    // Sort
    if (sortBy === "name") {
      displayedHogs.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "weight") {
      displayedHogs.sort((a, b) => a.weight - b.weight);
    }

    return displayedHogs;
  }

  return (
    <div className="App">
      <Nav />
      <FilterSort 
        showGreased={showGreased}
        setShowGreased={setShowGreased}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <HogForm onAddHog={handleAddHog} />
      <HogList hogs={getDisplayedHogs()} onHideHog={handleHideHog} />
    </div>
  );
}

export default App;
