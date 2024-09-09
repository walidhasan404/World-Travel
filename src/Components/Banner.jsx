import React, { useState } from 'react';

const Banner = () => {
  const images = [
    {
      src: 'https://i.ibb.co/mhqfkxR/tropical-vacation-holiday-tourism-beach-concept-long-tail-boat-exotic-krabi-thailand-131621008.webp',
      alt: 'Tropical Vacation',
      title: 'Tropical Vacation',
    },
    {
      src: 'https://i.ibb.co/BstZ2Xf/CF-570x312-Tourism-Preto-perola-Getty-Images-i-Stock-1011241694.jpg',
      alt: 'Tourism',
      title: 'Explore Tourism',
    },
    {
      src: 'https://i.ibb.co/gMsjxNp/urban-austria-hallstatt-snow-wallpaper-preview.jpg',
      alt: 'Urban Austria',
      title: 'Urban Austria',
    },
    {
      src: 'https://i.ibb.co/Q9bYdVH/hallstatt-3609863-640.jpg',
      alt: 'Hallstatt',
      title: 'Beautiful Hallstatt',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative">
      <div className="carousel w-full overflow-hidden relative">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item w-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0 absolute'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-white text-3xl font-bold">{image.title}</h2>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &#8592;
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          &#8594;
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
