import React from 'react';
import { FaCog } from 'react-icons/fa'; // Import the settings icon

const ProfileNavbar = () => {
  return (
    <div className="fixed flex w-full items-center justify-between p-4 bg-white shadow-md">
      <h1 className="text-lg font-bold text-center flex-grow">Profile</h1>
      <button className="p-2 text-gray-600 hover:text-blue-500">
        <FaCog size={24} />
      </button>
    </div>
  );
};

export default ProfileNavbar;
