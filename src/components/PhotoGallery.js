import React, { useState, useEffect } from 'react';
import './PhotoGallery.css';

function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  // Placeholder images - replace these URLs with your actual photos
  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&h=600&fit=crop',
      caption: 'Our First Adventure Together'
    },
    {
      url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop',
      caption: 'That Perfect Sunset'
    },
    {
      url: 'https://images.unsplash.com/photo-1522673607193-d2f8e04cf1af?w=800&h=600&fit=crop',
      caption: 'Your Beautiful Smile'
    },
    {
      url: 'https://images.unsplash.com/photo-1524601500432-1e1a4c71d692?w=800&h=600&fit=crop',
      caption: 'Making Memories'
    },
    {
      url: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&h=600&fit=crop',
      caption: 'Forever My Favorite'
    },
    {
      url: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&h=600&fit=crop',
      caption: 'You and Me'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector('.photo-gallery');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [photos.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className={`photo-gallery ${visible ? 'visible' : ''}`}>
      <div className="gallery-container">
        <h2 className="gallery-title">Our Precious Moments</h2>
        <div className="divider"></div>

        <div className="slideshow-container">
          <button className="gallery-btn prev" onClick={goToPrev}>
            ‹
          </button>

          <div className="slides-wrapper">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`slide ${index === currentIndex ? 'active' : ''}`}
                style={{ backgroundImage: `url(${photo.url})` }}
              >
                <div className="slide-caption">{photo.caption}</div>
              </div>
            ))}
          </div>

          <button className="gallery-btn next" onClick={goToNext}>
            ›
          </button>

          <div className="dots-container">
            {photos.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>

        <p className="gallery-subtitle">
          Every moment with you is a treasure I hold close to my heart
        </p>
      </div>
    </section>
  );
}

export default PhotoGallery;
