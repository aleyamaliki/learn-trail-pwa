import React from 'react';
import LightLogo from '../assets/light-logo.png'

const LoadingScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center">
        <img 
          src="LightLogo" 
          alt="logo" 
          className="w-24 h-24 mb-4 animate-spin-slow"
        />
        <p className="text-lg text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
