import React, { useState, useEffect } from "react";
import "./MemoryGallery.css";

function MemoryGallery({ onComplete }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showButton, setShowButton] = useState(false);

    const photos = [
        {
            url: `${process.env.PUBLIC_URL}/photos/15.jpg`,
            caption: "Tấm anh thích nhất hí hí 😊",
        },
        {
            url: `${process.env.PUBLIC_URL}/photos/20.jpg`,
            caption: "Bông hoa xinh đẹp nhất cuộc đời anh 🌸",
        },
        {
            url: `${process.env.PUBLIC_URL}/photos/13.jpg`,
            caption: "Cute quá đi mất! 😍",
        },
        {
            url: `${process.env.PUBLIC_URL}/photos/1.jpg`,
            caption: "Cùng nhìn qua những thành tựu của công chúa nè! 👑",
        },
        {
            url: `${process.env.PUBLIC_URL}/photos/3.jpg`,
            caption: "Đi hà nội nè 🚆",
        },
        {
            url: `${process.env.PUBLIC_URL}/photos/9.jpg`,
            caption: "Chiếc váy anh thích nhất 💃",
        },
        {
            url: `${process.env.PUBLIC_URL}/photos/8.jpg`,
            caption: "Đoạt giải nhất nè - rực rỡ nhất 🏆",
        },
        {
            url: `${process.env.PUBLIC_URL}/photos/19.jpg`,
            caption: "Đoạt giải tiếp nè - xinh đẹp nhất 🥇",
        },
        {
            url: `${process.env.PUBLIC_URL}/photos/18.jpg`,
            caption: "Làm MC xinh đẹp nè 🎤",
        },
        {
            url: `${process.env.PUBLIC_URL}/photos/16.jpg`,
            caption: "Tốt nghiệp TESOL - xuất sắc nhất 🎓",
        },
        {
            url: `${process.env.PUBLIC_URL}/photos/17.jpg`,
            caption: "Xinh đẹp rạng ngời ngày tốt nghiệp 👗",
        },
        {
            url: `${process.env.PUBLIC_URL}/photos/7.jpg`,
            caption: "Dễ thương quá đi mất! 🥰",
        },
        {
            url: `${process.env.PUBLIC_URL}/photos/12.jpg`,
            caption: "Bên em mọi lúc - nên phải cười thật tươi như vầy nhé! 😄",
        },
        {
            url: `${process.env.PUBLIC_URL}/photos/6.jpg`,
            caption: "Bé khủng long đáng yêu của anh 🦖",
        },
        {
            url: `${process.env.PUBLIC_URL}/photos/2.jpg`,
            caption: "Ui da tim anh rụng rời rồi 💘",
        },
        {
            url: `${process.env.PUBLIC_URL}/photos/14.jpg`,
            caption: "Yêu em nhiều lắm luôn! ❤️",
        },
        {
            url: `${process.env.PUBLIC_URL}/photos/5.jpg`,
            caption: "Mãi bên anh nhé - yêu em!🤗",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % photos.length);
        }, 3500);

        setTimeout(() => {
            setShowButton(true);
        }, 8000);

        return () => clearInterval(interval);
    }, [photos.length]);

    return (
        <div className="memory-gallery">
            <h2 className="gallery-title-new">
                Những khoảnh khắc đẹp của chúng mình 💕
            </h2>

            <div className="photo-frame-container">
                <div className="photo-frame">
                    {photos.map((photo, index) => (
                        <div
                            key={index}
                            className={`photo-slide ${
                                index === currentIndex ? "active" : ""
                            }`}
                            style={{ backgroundImage: `url(${photo.url})` }}
                        >
                            <div className="photo-caption">{photo.caption}</div>
                        </div>
                    ))}
                </div>

                <div className="frame-glow"></div>
            </div>

            <div className="photo-indicators">
                {photos.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${
                            index === currentIndex ? "active" : ""
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>

            {showButton && (
                <button className="next-btn" onClick={onComplete}>
                    Xem lời nhắn của anh 💌
                </button>
            )}
        </div>
    );
}

export default MemoryGallery;
