import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselBar() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgb(24, 24, 24)',
              width: '100%',
            }}
          >
            <img
              style={{ height: '300px', width: 'auto' }}
              src="/img/carousel/carousel_1.jpeg"
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgb(24, 24, 24)',
              width: '100%',
            }}
          >
            <img
              style={{ height: '300px', width: 'auto' }}
              src="/img/carousel/carousel_2.png"
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgb(24, 24, 24)',
              width: '100%',
            }}
          >
            <img
              style={{ height: '300px', width: 'auto' }}
              src="/img/carousel/carousel_3.webp"
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgb(24, 24, 24)',
              width: '100%',
            }}
          >
            <img
              style={{ height: '300px', width: 'auto' }}
              src="/img/carousel/carousel_4.jpeg"
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgb(24, 24, 24)',
              width: '100%',
            }}
          >
            <img
              style={{ height: '300px', width: 'auto' }}
              src="/img/carousel/carousel_5.jpeg"
              alt="First slide"
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgb(24, 24, 24)',
              width: '100%',
            }}
          >
            <img
              style={{ height: '300px', width: 'auto' }}
              src="/img/carousel/carousel_6.jpeg"
              alt="First slide"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselBar;
