import React, { useState } from "react";
import '../../App.css';

function Hero() {
  const images = [
    "https://image01.realme.net/general/20241211/1733898603738478905c0409748719b9da4c63fe05161.jpg.webp",
    "https://image01.realme.net/general/20241118/17319211146616dfabfde755542eab85d2712fa53e67a.jpg.webp",
    "https://image01.realme.net/general/20241010/172852829912099e8a9d5e54e43a380bf5f3b55bbf1d1.jpg.webp",
    "https://image01.realme.net/general/20241010/1728528148567a515497d9f2e48e79b3dfd737fe93f70.jpg.webp",
    "https://image01.realme.net/general/20240926/17273365832450fb19e2b72fb445ab4ec808ad24217fb.jpg.webp"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slider">
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slider-image" />
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default Hero;
