import * as React from 'react';
import ImageSlider from './ImageSlider';


const Slider = () => {
  const slides = [
    { url: 'http://localhost:3000/Image3.jpg', title: 'Image 3' },
    { url: 'http://localhost:3000/Image1.jpg', title: 'Image 1' },
    { url: 'http://localhost:3000/Image2.jpg', title: 'Image 2' },
    { url: 'http://localhost:3000/Image4.jpg', title: 'Image 4' },
    { url: 'http://localhost:3000/Image5.jpg', title: 'Image 5' },

  ]

  const containerStyles = {
    width: '900px',
    height: '380px',
    margin: 'auto',
  };

  return (
    <div style={containerStyles}>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};


export default Slider;