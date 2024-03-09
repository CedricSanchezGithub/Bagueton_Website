import React, { useState, useEffect } from 'react';

export default function Arrow() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      // Affiche le bouton si le défilement est supérieur à 20px
      if (!showScroll && window.scrollY > 20) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 20) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);

    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {showScroll && (
        <button id="scrollTop" onClick={scrollTop} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
          ↑
        </button>
      )}
    </div>
  );
}
