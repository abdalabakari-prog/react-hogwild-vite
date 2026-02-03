import React from "react";

const FilterSort = ({ showGreased, setShowGreased, sortBy, setSortBy }) => {
    return (
        <div className="ui segment">
            <div className="ui form">
                <div className="field">
                    <input
                        type="checkbox"
                        id="greased"
                        checked={showGreased}
                        onChange={(e) => setShowGreased(e.target.checked)}
                    />
                    <label htmlFor="greased">Show Greased Hogs Only</label>
                </div>
                <div className="field">
                    <label>Sort By:</label>
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
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
