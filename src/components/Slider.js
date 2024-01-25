import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from './images/Image1.jpg'
import Image2 from './images/Image2.webp'
import Image3 from './images/Image3.jpg'
import Image4 from './images/Image4.jpg'
import Image5 from './images/Image5.jpg'
import Image6 from './images/Image6.webp'
import Image7 from './images/Image7.webp'



const Slider = () => {
    return (
        <div className='carousel'>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{
                            maxHeight: '90vh',
                            objectFit: 'cover'
                        }}
                        className='d-block w-100'
                        src={Image1}
                        alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>

                    <img
                        style={{
                            maxHeight: '90vh',
                            objectFit: 'cover'

                        }}
                        className='d-block w-100'
                        src={Image2}
                        alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{
                            height: '90vh',
                            objectFit: 'cover'

                        }}
                        className='d-block w-100'
                        src={Image3}
                        alt="Third slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{
                            maxHeight: '90vh',
                            objectFit: 'cover',

                        }}
                        className='d-block w-100'
                        src={Image4}
                        alt="Fourth slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{
                            maxHeight: '90vh',
                            objectFit: 'cover',

                        }}
                        className='d-block w-100'
                        src={Image5}
                        alt="Fifth slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{
                            maxHeight: '90vh',
                            objectFit: 'cover',

                        }}
                        className='d-block w-100'
                        src={Image6}
                        alt="sixth slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{
                            maxHeight: '90vh',
                            objectFit: 'cover',

                        }}
                        className='d-block w-100'
                        src={Image7}
                        alt="seventh slide" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slider;