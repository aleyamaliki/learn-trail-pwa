import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { AiFillHome } from 'react-icons/ai';
import { FaSearch, FaUser } from 'react-icons/fa'; // Icons from react-icons
import { RiBook2Fill } from 'react-icons/ri';

const TabNav = () => {
  const [activeTab, setActiveTab] = useState('home');
  const navigate = useNavigate(); // Initialize navigate function

  const handleTabClick = (tab, route) => {
    setActiveTab(tab);
    navigate(route); // Navigate to the specified route
  };

  return (
    <div className="w-full fixed bottom-0 bg-white shadow-md">
      <div className="flex justify-around">
        {/* Home Tab */}
        <button
          onClick={() => handleTabClick('home', '/home')}
          className={`p-4 w-full flex flex-col items-center ${
            activeTab === 'home' ? 'text-blue-500' : 'text-gray-500'
          }`}
        >
          <AiFillHome size={24} />
          <span className="text-sm">Home</span>
        </button>

        {/* Search Tab */}
        <button
          onClick={() => handleTabClick('search', '/search')}
          className={`p-4 w-full flex flex-col items-center ${
            activeTab === 'search' ? 'text-blue-500' : 'text-gray-500'
          }`}
        >
          <FaSearch size={24} />
          <span className="text-sm">Search</span>
        </button>

        {/* Courses Tab */}
        <button
          onClick={() => handleTabClick('courses', '/course')}
          className={`p-4 w-full flex flex-col items-center ${
            activeTab === 'courses' ? 'text-blue-500' : 'text-gray-500'
          }`}
        >
          <RiBook2Fill size={24} />
          <span className="text-sm">Courses</span>
        </button>

        {/* Profile Tab */}
        <button
          onClick={() => handleTabClick('profile', '/profile')}
          className={`p-4 w-full flex flex-col items-center ${
            activeTab === 'profile' ? 'text-blue-500' : 'text-gray-500'
          }`}
        >
          <FaUser size={24} />
          <span className="text-sm">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default TabNav;
