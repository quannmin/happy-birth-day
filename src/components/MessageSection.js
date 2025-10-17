import React, { useEffect, useState } from 'react';
import './MessageSection.css';

function MessageSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector('.message-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className={`message-section ${visible ? 'visible' : ''}`}>
      <div className="message-container">
        <div className="message-header">
          <h2>A Letter From Your Heart</h2>
          <div className="divider"></div>
        </div>

        <div className="message-content">
          <p className="message-paragraph">
            My Dearest Love,
          </p>

          <p className="message-paragraph">
            As the sun rises on this special day, I find myself overwhelmed with gratitude
            for having you in my life. Your presence is like a gentle melody that makes
            every moment more beautiful, every challenge more bearable, and every joy more meaningful.
          </p>

          <p className="message-paragraph">
            You are the embodiment of strength and grace. The way you face life with such
            unwavering positivity inspires me every single day. Your dreams are not just
            aspirations—they are reflections of your beautiful soul, full of hope, ambition,
            and endless possibilities. I believe in every single one of them, just as I believe in you.
          </p>

          <p className="message-paragraph">
            Your smile has the power to brighten the darkest days, and your laughter is
            the soundtrack to my happiest memories. The kindness in your heart, the wisdom
            in your words, and the love in your eyes remind me constantly that I am the
            luckiest person alive to call you mine.
          </p>

          <p className="message-paragraph">
            On this birthday, I wish for you all the happiness that your heart can hold.
            May your path be filled with success, your days with laughter, and your life
            with love. May you achieve every dream you've ever whispered to the stars,
            and may you always remember how incredibly special you are.
          </p>

          <p className="message-paragraph">
            You are my inspiration, my joy, my everything. Thank you for being the amazing
            person you are. Thank you for sharing your light with me.
          </p>

          <p className="message-signature">
            Forever yours,<br />
            <span className="signature-name">Your Loving Boyfriend</span>
          </p>
        </div>

        <div className="floating-hearts-small">
          <span className="small-heart">💕</span>
          <span className="small-heart">💕</span>
          <span className="small-heart">💕</span>
        </div>
      </div>
    </section>
  );
}

export default MessageSection;
