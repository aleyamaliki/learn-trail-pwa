import React from 'react';
import { FaCoins } from 'react-icons/fa'; // Token icon from react-icons

const HomeNavbar = () => {
  return (
    <div className="fixed w-full bg-white shadow-md px-4 py-2 flex justify-between items-center">
      {/* Left Side */}
      <div>
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover border-2 border-gray-300" // Profile Logo in a Circle
        />
      </div>
     {/* Right Side */}
      <div className="flex items-center">
        <FaCoins size={24} className="text-yellow-500" /> {/* Token Logo */}
        <span className="ml-2 text-lg font-semibold text-gray-700">100 Tokens</span> {/* Token Total */}
      </div>
    </div>
  );
};

export default HomeNavbar;
