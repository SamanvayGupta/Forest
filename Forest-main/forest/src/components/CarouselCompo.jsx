// components/CarouselCompo.js
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './CarouselImage'; // Adjust the import path as per your directory structure

function CarouselCompo() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" image="https://wallpapershome.com/images/pages/pic_h/578.jpg" />
        <Carousel.Caption>
          <div className="absolute left-[-15vw] w-[100vw] pb-[15vh] pt-8 bottom-[-5vh] shadow-md px-[15vw]"
              style={{
                background: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1.9))",
              }}
          >
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" image="https://wallpapershome.com/images/pages/pic_h/584.jpg"/>
        <Carousel.Caption>
        <div className="absolute left-[-15vw] w-[100vw] pb-[15vh] pt-8 bottom-[-5vh] shadow-md px-[15vw]"
              style={{
                background: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1.9))",
              }}
          >
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" image="https://wallpapershome.com/images/pages/pic_h/25592.jpg"/>
        <Carousel.Caption>
        <div className="absolute left-[-15vw] w-[100vw] pb-[15vh] pt-8 bottom-[-5vh] shadow-md px-[15vw]"
              style={{
                background: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1.9))",
              }}
          >
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselCompo;
