import React from 'react';

const CourseList = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      {/* Container for S-shaped buttons */}
      <div className="relative w-full max-w-md h-screen p-4">
        
        {/* S-shaped structure */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between space-y-6">
          
          {/* First button in the S-shape */}
          <div className="w-full flex justify-start">
            <button className="w-24 h-10 bg-blue-500 text-white font-bold rounded-lg">Button 1</button>
          </div>
          
          {/* Second button in the S-shape */}
          <div className="w-full flex justify-center">
            <button className="w-24 h-10 bg-blue-500 text-white font-bold rounded-lg">Button 2</button>
          </div>
          
          {/* Third button in the S-shape */}
          <div className="w-full flex justify-end">
            <button className="w-24 h-10 bg-blue-500 text-white font-bold rounded-lg">Button 3</button>
          </div>
          
          {/* Fourth button in the S-shape */}
          <div className="w-full flex justify-center">
            <button className="w-24 h-10 bg-blue-500 text-white font-bold rounded-lg">Button 4</button>
          </div>
          
          {/* Fifth button in the S-shape */}
          <div className="w-full flex justify-start">
            <button className="w-24 h-10 bg-blue-500 text-white font-bold rounded-lg">Button 5</button>
          </div>
          
          {/* Sixth button in the S-shape */}
          <div className="w-full flex justify-center">
            <button className="w-24 h-10 bg-blue-500 text-white font-bold rounded-lg">Button 6</button>
          </div>
          
          {/* Seventh button in the S-shape */}
          <div className="w-full flex justify-end">
            <button className="w-24 h-10 bg-blue-500 text-white font-bold rounded-lg">Button 7</button>
          </div>
          
          {/* Eighth button in the S-shape */}
          <div className="w-full flex justify-center">
            <button className="w-24 h-10 bg-blue-500 text-white font-bold rounded-lg">Button 8</button>
          </div>
          
          {/* Ninth button in the S-shape */}
          <div className="w-full flex justify-start">
            <button className="w-24 h-10 bg-blue-500 text-white font-bold rounded-lg">Button 9</button>
          </div>
          
          {/* Tenth button in the S-shape */}
          <div className="w-full flex justify-center">
            <button className="w-24 h-10 bg-blue-500 text-white font-bold rounded-lg">Button 10</button>
          </div>    
        </div>
      </div>
    </div>
  );
};

export default CourseList;
