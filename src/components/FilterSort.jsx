import React from "react";

const FilterSort = ({ showGreased, setShowGreased, sortBy, setSortBy }) => {
    return (
        <div className="ui segment">
            <div className="ui form">
                <div className="field">
                    <input
                        type="checkbox"
                        id="greased-filter"
                        checked={showGreased}
                        onChange={(e) => setShowGreased(e.target.checked)}
                    />
                    <label htmlFor="greased-filter">Greased Pigs Only?</label>
                </div>
                <div className="field">
                    <label htmlFor="sort-select">Sort by:</label>
                    <select 
                        id="sort-select"
                        value={sortBy} 
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="">None</option>
                        <option value="name">Name</option>
                        <option value="weight">Weight</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default FilterSort;
