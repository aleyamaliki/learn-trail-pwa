import React from 'react';
import { FaArrowAltCircleLeft, FaArrowLeft, FaCog, FaHeart } from 'react-icons/fa'; // Import the settings icon

const LessonNavbar = () => {
  return (
    <div className="fixed flex w-full items-center justify-between p-4 bg-bgBar shadow-md">
        <button className="flex justify-between gap-2 p-2 text-white hover:text-blue-500">
            <FaArrowLeft size={24} />
        </button>
      <h1 className="text-2xl font-bold text-center text-white flex-grow">Solana Architecture</h1>
      <button className="flex justify-between gap-2 p-2 text-red-600">
        <FaHeart size={24} />
        <FaHeart size={24} />
        <FaHeart size={24} />
      </button>
    </div>
  );
};

export default LessonNavbar;
