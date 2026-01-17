import React from "react";

function FilterSort({ showGreased, setShowGreased, sortBy, setSortBy }) {
  function handleGreasedChange(event) {
    setShowGreased(event.target.checked);
  }

  function handleSortChange(event) {
    setSortBy(event.target.value);
  }

  return (
    <div className="ui segment" style={{ margin: "20px" }}>
      <div className="ui form">
        <div className="inline fields">
          <div className="field">
            <div className="ui checkbox">
              <input 
                type="checkbox" 
                id="greased"
                checked={showGreased}
                onChange={handleGreasedChange}
              />
              <label htmlFor="greased">Show Greased Hogs Only</label>
            </div>
          </div>
          
          <div className="field">
            <label htmlFor="sort">Sort By:</label>
            <select 
              id="sort"
              value={sortBy}
              onChange={handleSortChange}
              className="ui dropdown"
            >
              <option value="none">None</option>
              <option value="name">Name</option>
              <option value="weight">Weight</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterSort;
