import React from 'react';
import { FaStar } from 'react-icons/fa';

const CourseList = () => {
  return (
    <div className="p-2 flex justify-center items-center">
      <div className="relative w-full max-w-md h-[calc(100vh-10rem)]"> {/* Adjust the height */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between space-y-6">

          <div className="w-full flex justify-start">
            <button className="w-16 h-16 bg-third text-yellow-400 font-bold rounded-full flex items-center justify-center">
              <FaStar className="text-4xl" />
            </button>
          </div> 
          
          <div className="w-full flex justify-center">
            <button className="w-16 h-16 bg-third text-yellow-400 font-bold rounded-full flex items-center justify-center">
              <FaStar className="text-4xl" />
            </button>
          </div> 
          
          <div className="w-full flex justify-end">
            <button className="w-16 h-16 bg-third text-yellow-400 font-bold rounded-full flex items-center justify-center">
              <FaStar className="text-4xl" />
            </button>
          </div> 
          
          <div className="w-full flex justify-center">
            <button className="w-16 h-16 bg-third text-yellow-400 font-bold rounded-full flex items-center justify-center">
              <FaStar className="text-4xl" />
            </button>
          </div> 
          
          <div className="w-full flex justify-start">
            <button className="w-16 h-16 bg-third text-yellow-400 font-bold rounded-full flex items-center justify-center">
              <FaStar className="text-4xl" />
            </button>
          </div> 
          
          <div className="w-full flex justify-center">
            <button className="w-16 h-16 bg-third text-yellow-400 font-bold rounded-full flex items-center justify-center">
              <FaStar className="text-4xl" />
            </button>
          </div> 
          
          <div className="w-full flex justify-end">
            <button className="w-16 h-16 bg-third text-yellow-400 font-bold rounded-full flex items-center justify-center">
              <FaStar className="text-4xl" />
            </button>
          </div>     
        </div>
      </div>
    </div>
  );
};

export default CourseList;
