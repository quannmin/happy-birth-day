import React, { useEffect, useState } from 'react';
import './QuoteSection.css';

function QuoteSection() {
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

    const section = document.querySelector('.quote-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className={`quote-section ${visible ? 'visible' : ''}`}>
      <div className="quote-container">
        <div className="quote-mark">"</div>
        <p className="quote-text">
          No matter where life takes us,<br />
          my heart will always celebrate you.
        </p>
        <div className="quote-mark closing">"</div>

        <div className="quote-hearts">
          <span>💖</span>
        </div>

        <p className="quote-footer">
          Happy Birthday, My Love<br />
          <span className="quote-date">Forever & Always</span>
        </p>
      </div>
    </section>
  );
}

export default QuoteSection;
