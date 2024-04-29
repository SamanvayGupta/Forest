// components/ExampleCarouselImage.js
import React from 'react';

const ExampleCarouselImage = ({ text, image }) => {
  return (
    <img
      className="d-block w-[100vw] h-[95vh] object-cover"
      src={image}
      alt={text}
    />
  );
};

export default ExampleCarouselImage;
