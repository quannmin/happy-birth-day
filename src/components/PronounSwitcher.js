import React, { useState } from "react";
import { usePronoun } from "../contexts/PronounContext";
import "./PronounSwitcher.css";

function PronounSwitcher() {
    const { isAlternate, togglePronoun } = usePronoun();
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {
        setIsAnimating(true);
        togglePronoun();
        setTimeout(() => setIsAnimating(false), 600);
    };

    return (
        <button
            className={`pronoun-switcher ${isAnimating ? "animating" : ""}`}
            onClick={handleClick}
            title="Switch between anh-em and tớ-cậu"
        >
            <span className="switcher-icon">🔄</span>
            <span className="switcher-text">
                {isAlternate ? "switch content" : "switch content"}
            </span>
        </button>
    );
}

export default PronounSwitcher;
