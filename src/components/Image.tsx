import React, { useState, useEffect } from 'react';

const FadingImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  return (
    <img
      src={src}
      alt={alt}
      className={`fade-in ${loaded ? 'loaded' : ''}`}
    />
  );
};

export default FadingImage;