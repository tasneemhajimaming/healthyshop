import React from 'react';
import { Carousel } from 'react-carousel';

export default function Dashboard() {
  const mock = [
    'url_to_your_image_1',
    'url_to_your_image_2',
    'url_to_your_image_3',
    // Add more image URLs as needed
  ];
  
  return (
    <div className="w-full relative">
      <Carousel autoplay={3000} wrapAround={true}>
        {mock.map((slide, index) => (
          <div key={index} className="carousel__item">
            <img src={slide} alt={`slide ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
