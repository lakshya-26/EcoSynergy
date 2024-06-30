// carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Example images, replace with your own images
const images = [
  "image/food.jpg",
  "image/transport.jfif",
  "image/water.jfif",
  "image/waste.jpg",
  "image/energy2.jfif",
];

const Carousel = ({ isSidebarCollapsed }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const imageStyle = isSidebarCollapsed
    ? { height: '70%', padding: '4%', marginInline: '5%', marginTop: '-20%' }
    : { height: '50%', padding: '6%', marginInline: '10%', marginTop: '-28%' };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Carousel Image ${index + 1}`} style={imageStyle} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
