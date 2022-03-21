import React from "react";
import "./Match.css";

const Match = ({ isMatched, setIsMatched, person }) => {
    const handleClick = () => {
        setIsMatched(false);
    };

    return (
        <div className="match" style={{ display: isMatched ? "flex" : "none" }}>
            <h3>So we matched... but what happened after?</h3>
            <p className="match__text">{person.story}</p>
            <button onClick={handleClick}>Boy bye</button>
        </div>
    );
};

export default Match;
