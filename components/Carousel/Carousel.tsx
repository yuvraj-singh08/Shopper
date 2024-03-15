'use client'
import React, { useState, useRef, useEffect } from 'react';
import './Carousel.css'

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 3; 
  const carouselWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      showSlide(currentIndex + 1);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);


  useEffect(() => {
    // Ensure that carouselWrapperRef.current is not null before accessing properties
    if (carouselWrapperRef.current) {
      const translateValue = -currentIndex * 100 + '%';
      carouselWrapperRef.current.style.transform = 'translateX(' + translateValue + ')';
    }
  }, [currentIndex]);

  const showSlide = (index: number) => {
    if (index < 0) {
      index = totalSlides - 1;
    } else if (index >= totalSlides) {
      index = 0;
    }

    setCurrentIndex(index);
  };

  const nextSlide = () => {
    showSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    showSlide(currentIndex - 1);
  };

  // setInterval(nextSlide, 3000);

  return (
    <>
      <div className="carousel-container">
        <div className="carousel-wrapper" ref={carouselWrapperRef}>
          <div className="carousel-item">
            <img className='carousel-img' src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/e8afba7feffa58f9.jpg?q=20" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img className='carousel-img' src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/0d1366a919fff51b.jpg?q=20" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img className='carousel-img' src="carouselPic3.jpg" alt="Slide 3" />
          </div>
        </div>

        <div className='left-0 right-0 absolute flex justify-between top-1/2'>
          <button className="carousel-button" onClick={prevSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16"> <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" /> </svg>
          </button>
          <button className="carousel-button" onClick={nextSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16"> <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" /> </svg>
          </button>
        </div>
      </div>
    </>
  );
}
