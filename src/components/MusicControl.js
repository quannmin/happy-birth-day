import React, { useState, useRef, useEffect } from "react";
import "./MusicControl.css";

function MusicControl() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        // Auto-play with user interaction fallback
        const playAudio = async () => {
            if (audioRef.current) {
                try {
                    await audioRef.current.play();
                    setIsPlaying(true);
                } catch (err) {
                    // Auto-play blocked, user needs to click
                    console.log("Auto-play blocked. Click to play music.");
                }
            }
        };

        playAudio();
    }, []);

    const toggleMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    return (
        <div className="music-control">
            <button className="music-btn" onClick={toggleMusic}>
                {isPlaying ? (
                    <span className="music-icon">🔊</span>
                ) : (
                    <span className="music-icon">🔇</span>
                )}
            </button>
            <audio ref={audioRef} loop>
                <source src="/happy-birthday.mp3" type="audio/mpeg" />
            </audio>
        </div>
    );
}

export default MusicControl;
