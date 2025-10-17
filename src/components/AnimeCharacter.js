import React from "react";
import "./AnimeCharacter.css";

function AnimeCharacter({ pose = "wave", size = "large" }) {
    const poses = {
        wave: (
            <div className={`anime-character ${size}`}>
                <div className="character-body">
                    <div className="head">
                        <div className="hair male"></div>
                        <div className="face">
                            <div className="eyes">
                                <div className="eye left">
                                    <div className="pupil"></div>
                                    <div className="shine"></div>
                                </div>
                                <div className="eye right">
                                    <div className="pupil"></div>
                                    <div className="shine"></div>
                                </div>
                            </div>
                            <div className="blush left"></div>
                            <div className="blush right"></div>
                            <div className="mouth happy"></div>
                        </div>
                    </div>
                    <div className="body">
                        <div className="outfit male"></div>
                        <div className="cardigan"></div>
                        <div className="arm left wave">
                            <div className="hand">👋</div>
                        </div>
                        <div className="arm right"></div>
                    </div>
                </div>
            </div>
        ),
        smile: (
            <div className={`anime-character ${size}`}>
                <div className="character-body">
                    <div className="head">
                        <div className="hair male"></div>
                        <div className="face">
                            <div className="eyes">
                                <div className="eye left">
                                    <div className="pupil"></div>
                                    <div className="shine"></div>
                                </div>
                                <div className="eye right">
                                    <div className="pupil"></div>
                                    <div className="shine"></div>
                                </div>
                            </div>
                            <div className="blush left"></div>
                            <div className="blush right"></div>
                            <div className="mouth happy"></div>
                        </div>
                    </div>
                    <div className="body">
                        <div className="outfit male"></div>
                        <div className="cardigan"></div>
                        <div className="arm left"></div>
                        <div className="arm right"></div>
                    </div>
                </div>
            </div>
        ),
        gift: (
            <div className={`anime-character ${size}`}>
                <div className="character-body">
                    <div className="head">
                        <div className="hair male"></div>
                        <div className="face">
                            <div className="eyes">
                                <div className="eye left closed"></div>
                                <div className="eye right closed"></div>
                            </div>
                            <div className="blush left"></div>
                            <div className="blush right"></div>
                            <div className="mouth happy"></div>
                        </div>
                    </div>
                    <div className="body">
                        <div className="outfit male"></div>
                        <div className="cardigan"></div>
                        <div className="arm left holding"></div>
                        <div className="arm right holding"></div>
                        <div className="gift-box">🎁</div>
                    </div>
                </div>
            </div>
        ),
    };

    return poses[pose] || poses.smile;
}

export default AnimeCharacter;
