import React from 'react';
import { FaCoins } from 'react-icons/fa';
import Profile from '../../assets/learn-trail/nouns-profile.png'

const HomeNavbar = () => {
  return (
    <div className="fixed w-full bg-bgBar shadow-md p-4 flex justify-between items-center">
      {/* Left Side */}
      <div>
        <img
          src={Profile}
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover bg-white border-2 border-gray-300"
        />
      </div>
     {/* Right Side */}
      <div className="flex items-center">
        <FaCoins size={24} className="text-yellow-500" /> 
        <span className="ml-2 text-lg font-semibold text-white">100 Tokens</span> 
      </div>
    </div>
  );
};

export default HomeNavbar;
