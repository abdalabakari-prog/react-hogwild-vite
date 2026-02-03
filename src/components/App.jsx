import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogList from "./HogList";
import FilterSort from "./FilterSort";
import HogForm from "./HogForm";

function App() {
    const [hogData, setHogData] = useState(hogs);
    const [showGreased, setShowGreased] = useState(false);
    const [sortBy, setSortBy] = useState("");

    const addHog = (newHog) => {
        setHogData([...hogData, newHog]);
    };

    const getFilteredAndSortedHogs = () => {
        let displayHogs = [...hogData];

        if (showGreased) {
            displayHogs = displayHogs.filter(hog => hog.greased);
        }

        if (sortBy === "name") {
            displayHogs.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === "weight") {
            displayHogs.sort((a, b) => a.weight - b.weight);
        }

        return displayHogs;
    };

    return (
        <div className="App">
            <Nav />
            <FilterSort 
                showGreased={showGreased}
                setShowGreased={setShowGreased}
                sortBy={sortBy}
                setSortBy={setSortBy}
            />
            <HogForm addHog={addHog} />
            <HogList hogs={getFilteredAndSortedHogs()} />
        </div>
    );
}

export default App;
