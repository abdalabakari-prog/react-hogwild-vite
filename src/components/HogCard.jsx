import React, { useState } from "react";

function HogCard({ hog, onHideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  function handleClick() {
    setShowDetails(!showDetails);
  }

  function handleHide() {
    onHideHog(hog.name);
  }

  return (
    <div className="ui eight wide column" aria-label="hog card">
      <div className="ui card">
        <div className="image" onClick={handleClick} style={{ cursor: "pointer" }}>
          <img src={hog.image} alt={hog.name} />
        </div>
        <div className="content">
          <h3 className="header" onClick={handleClick} style={{ cursor: "pointer" }}>
            {hog.name}
          </h3>
          
          {showDetails && (
            <div className="description">
              <p><strong>Specialty:</strong> {hog.specialty}</p>
              <p><strong>Weight:</strong> {hog.weight}</p>
              <p><strong>Greased:</strong> {hog.greased ? "Yes" : "No"}</p>
              <p><strong>Highest Medal:</strong> {hog["highest medal achieved"]}</p>
            </div>
          )}
          
          <div className="extra content">
            <button className="ui button red" onClick={handleHide}>
              Hide Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HogCard;
