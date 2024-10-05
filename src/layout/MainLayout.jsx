import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TabNav from '../components/TabNav';
import HomeNavbar from '../components/NavBar/HomeNavBar';
import CourseNavbar from '../components/NavBar/CourseNavBar';

const MainLayout = () => {
    const location = useLocation();

    let headerBar;
    switch (location.pathname) {
        case '/course':
            headerBar = <CourseNavbar />;
            break;
        default:
            headerBar = <HomeNavbar />;
    }
  return (
    <div className="flex flex-col justify-between bg-gray-100">
        <header className="flex shrink-0">
            {headerBar}
        </header>


      <div className="flex-grow overflow-y-auto">
        <Outlet />
      </div>

      <footer className="flex-shrink-0">
            <TabNav />
        </footer>
    </div>
  );
};

export default MainLayout;
