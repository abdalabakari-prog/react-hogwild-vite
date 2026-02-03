import React, { useState } from "react";

const HogCard = ({ hog }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    if (isHidden) return null;

    return (
        <div className="ui eight wide column">
            <div aria-label="hog card" className="ui card">
                <div className="image" onClick={() => setShowDetails(!showDetails)}>
                    <img src={hog.image} alt={`Photo of ${hog.name}`} />
                </div>
                <div className="content" onClick={() => setShowDetails(!showDetails)}>
                    <h3 className="header">{hog.name}</h3>
                    {showDetails && (
                        <div className="description">
                            <p>Specialty: {hog.specialty}</p>
                            <p>Weight: {hog.weight}</p>
                            <p>Greased: {hog.greased ? "Yes" : "No"}</p>
                            <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
                        </div>
                    )}
                </div>
                <div className="extra content">
                    <button 
                        className="ui button"
                        onClick={() => setIsHidden(true)}
                    >
                        Hide Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HogCard;
