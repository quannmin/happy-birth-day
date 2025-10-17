import React, { useState, useEffect } from "react";
import "./LetterScene.css";

function LetterScene({ onComplete }) {
    const [visibleParagraphs, setVisibleParagraphs] = useState([]);
    const [showButton, setShowButton] = useState(false);

    const paragraphs = [
        "Chúc mừng sinh nhật em – cô gái tuyệt vời nhất trong cuộc đời anh.",
        "Anh mong hôm nay, không chỉ là ngày em nhận được thật nhiều lời chúc, mà còn là ngày em cảm nhận sâu sắc rằng em xứng đáng với mọi điều tốt đẹp nhất trên thế gian này.",
        "Em luôn là người sống có mục tiêu, có ước mơ, và luôn nỗ lực để vươn tới những điều mình tin tưởng. Anh thật sự ngưỡng mộ cách em kiên trì theo đuổi đam mê, dù đôi khi cuộc sống chẳng dễ dàng gì. Dù chặng đường phía trước có bao nhiêu thử thách, anh tin em vẫn sẽ mạnh mẽ, lạc quan và toả sáng theo cách rất riêng của mình.",
        "Anh mong mỗi bước đi của em đều mang theo niềm tin, sự bình an và hạnh phúc. Hãy tiếp tục sống thật trọn vẹn, dám ước mơ, dám yêu thương, và dám sống hết mình — vì thế giới này trở nên tươi đẹp hơn rất nhiều khi có em trong đó - nhất là trong cuộc đời anh.",
        "Chúc em tuổi mới thật rực rỡ, thành công trong những gì em theo đuổi, và luôn có anh ở đây — đồng hành, ủng hộ và yêu em bằng tất cả những gì anh có.",
    ];

    useEffect(() => {
        paragraphs.forEach((_, index) => {
            setTimeout(() => {
                setVisibleParagraphs((prev) => [...prev, index]);
            }, index * 2500);
        });

        setTimeout(() => {
            setShowButton(true);
        }, paragraphs.length * 2500 + 1000);
    }, [paragraphs]);

    return (
        <div className="letter-scene">
            <div className="letter-container">
                <div className="letter-header">
                    <h2>Lời nhắn từ trái tim anh 💌</h2>
                    <div className="header-divider"></div>
                </div>

                <div className="letter-content">
                    {paragraphs.map((text, index) => (
                        <p
                            key={index}
                            className={`letter-paragraph ${
                                visibleParagraphs.includes(index)
                                    ? "visible"
                                    : ""
                            }`}
                        >
                            {text}
                        </p>
                    ))}

                    <div
                        className={`letter-signature ${
                            showButton ? "visible" : ""
                        }`}
                    >
                        <p>Yêu em,</p>
                        <p className="signature-name">Anh của em ❤️</p>
                    </div>
                </div>

                {showButton && (
                    <button className="final-btn" onClick={onComplete}>
                        Tiếp tục ✨
                    </button>
                )}
            </div>

            <div className="falling-petals">
                <span className="petal">🌸</span>
                <span className="petal">🌸</span>
                <span className="petal">🌸</span>
                <span className="petal">🌸</span>
                <span className="petal">🌸</span>
                <span className="petal">🌸</span>
            </div>
        </div>
    );
}

export default LetterScene;
