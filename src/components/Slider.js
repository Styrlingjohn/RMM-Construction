import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from './images/Image1.jpg'
import Image2 from './images/Image2.jpg'
import Image3 from './images/Image3.jpg'
import Image4 from './images/Image4.jpg'
import Image5 from './images/Image5.jpg'




function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    style={{
                        objectFit: 'cover',
                        height: '90vh'
                    }}
                    className='d-block w-100'
                    src={Image1}
                    alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{
                        objectFit: 'cover',
                        height: '90vh'
                    }}
                    className='d-block w-100'
                    src={Image2}
                    alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{
                        objectFit: 'cover',
                        height: '90vh'
                    }}
                    className='d-block w-100'
                    src={Image3}
                    alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{
                        objectFit: 'cover',
                        height: '90vh'
                    }}
                    className='d-block w-100'
                    src={Image4}
                    alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{
                        objectFit: 'cover',
                        height: '90vh'
                    }}
                    className='d-block w-100'
                    src={Image5}
                    alt="Second slide" />
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;