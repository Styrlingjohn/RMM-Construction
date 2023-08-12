import * as React from 'react';
import ImageSlider from './ImageSlider';
import Image1 from './images/Image1.jpg';
import Image2 from './images/Image2.jpg';
import Image3 from './images/Image3.jpg';
import Image4 from './images/Image4.jpg';
import Image5 from './images/Image5.jpg';


const Slider = () => {
  const slides = [
    { url: Image3, title: 'Image 3' },
    { url: Image1, title: 'Image 1' },
    { url: Image2, title: 'Image 2' },
    { url: Image4, title: 'Image 4' },
    { url: Image5, title: 'Image 5' },

  ]

  const containerStyles = {
    width: '1000px',
    height: '480px',
    margin: 'auto',
    'max-width': '100%'
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