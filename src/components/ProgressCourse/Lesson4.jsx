import React, { useState } from 'react';

const Lesson4 = () => {
  // Dummy data for the slides
  const slides = [
    {
      id: 1,
      lesson: 'Lesson 1',
      title: 'Introduction to Solana’s Architecture',
      description: 'Overview of blockchain architecture Key differences between Solana and other blockchains',
      imageSrc: 'https://cryptologos.cc/logos/solana-sol-logo.png?v=035',
    },
    {
        id: 2,
        lesson: 'Introduction to Solana’s Architecture',
        title: 'Lesson Description:',
        description: 'In this lesson, we will introduce the fundamental concepts of Solana\'s architecture. We will explore the unique characteristics that distinguish Solana from other blockchain platforms and set the stage for deeper discussions on its components, including consensus mechanisms, node roles, and transaction processing. This foundational knowledge will help learners understand how Solana achieves its high performance and scalability.',
        imageSrc: '',
      },
      {
        id: 3,
        lesson: 'Introduction to Solana’s Architecture',
        title: 'Learning Objectives',
        description: 'Understand the basic concepts of blockchain architecture. Identify the key features that make Solana unique compared to other blockchains.Recognize the components of Solana’s architecture.Establish a framework for understanding how Solana operates at a high level.',
        imageSrc: '',
      },
      {
        id: 4,
        lesson: 'Introduction to Solana’s Architecture',
        title: 'Key Features of Solana',
        description: 'Speed and performance metrics. Low transaction costs. Scalability and high throughput capabilities',
        imageSrc: '',
      },
      {
        id: 5,
        lesson: 'Quiz',
        title: 'Which of the following is a primary advantage of using Solana?',
        description: 'A) High transaction fees B) Low transaction speeds C) High throughput and scalability D) Limited development support Answer: C) High throughput and scalability',
        imageSrc: '',
      },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="flex justify-center items-center pt-24">
      <div className="bg-white p-6 rounded-md shadow-lg w-4/5 max-w-md text-center h-96 flex flex-col justify-center items-center space-y-4">
        {/* Image */}
        <img
          src={slides[currentSlide].imageSrc}
          alt={slides[currentSlide].title}
          className="w-28 h-28 object-cover rounded-md"
        />
        
        {/* Lesson */}
        <h2 className="text-2xl font-bold">
          {slides[currentSlide].lesson}
        </h2>
        
        {/* Title */}
        <h1 className="text-xl font-semibold ">
          {slides[currentSlide].title}
        </h1>

        {/* Description */}
        <p className="text-gray-600 ">
          {slides[currentSlide].description}
        </p>
        
        {/* Next Button */}
        <button
          onClick={handleNextClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Lesson4;
