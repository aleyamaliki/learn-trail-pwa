import React, { useState } from 'react';
import { FaBars, FaChevronDown, FaCoins } from 'react-icons/fa'; // Hamburger and Down-arrow icons from react-icons

const CourseNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="fixed w-full bg-white shadow-md p-4 flex justify-between items-center">
      {/* Left Side: Hamburger Icon */}
      <div className="flex items-center">
        <FaBars size={24} className="text-gray-700" /> {/* Hamburger Icon */}
      </div>

      {/* Center: Course Title with Dropdown */}
      <div className="relative">
        <button 
          className="flex items-center text-lg font-bold text-gray-700 focus:outline-none" 
          onClick={toggleDropdown}
        >
          Course Title {/* Displaying the current course */}
          <FaChevronDown className="ml-2" /> {/* Down Arrow */}
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Course 1</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Course 2</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Course 3</li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Right Side: Placeholder for potential icons or profile */}
      <div className="flex items-center">
        <FaCoins size={24} className="text-yellow-500" /> {/* Token Logo */}
        <span className="ml-2 text-lg font-semibold text-gray-700">100 Tokens</span>
      </div>
    </div>
  );
};

export default CourseNavbar;
