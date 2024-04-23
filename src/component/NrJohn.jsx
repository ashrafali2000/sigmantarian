"use client"
import React, { useRef } from 'react';

const RotatingImage = ({ src, alt }) => {
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const image = imageRef.current;
    const { left, top, width, height } = image.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;
    const centerX = width / 2;
    const centerY = height / 2;
    const radians = Math.atan2(mouseY - centerY, mouseX - centerX);
    const degrees = radians * (180 / Math.PI);
    image.style.transform = `rotate(${degrees}deg)`;
  };

  const handleMouseLeave = () => {
    const image = imageRef.current;
    image.style.transform = 'rotate(0deg)';
  };

  return (


    <img
      ref={imageRef}
      src={src}
      alt={alt}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform w-20 h-20"
    />
  );
};

export default RotatingImage;
