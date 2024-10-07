import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import TabNav from '../components/TabNav';
import HomeNavbar from '../components/NavBar/HomeNavBar';
import CourseNavbar from '../components/NavBar/CourseNavBar';
import ProfileNavbar from '../components/NavBar/ProfileNavBar';

const MainLayout = () => {
    const location = useLocation();

    let headerBar;
    switch (location.pathname) {
        case '/course':
            headerBar = <CourseNavbar />;
            break;
        case '/profile':
            headerBar = <ProfileNavbar />;
            break;
        default:
            headerBar = <HomeNavbar />;
    }
  return (
    <div className="flex flex-col justify-between bg-bg">
        <header className="flex shrink-0">
            {headerBar}
        </header>


      <div className="flex-grow p-4 pt-16 overflow-y-auto">
        <Outlet />
      </div>

            <TabNav />
    </div>
  );
};

export default MainLayout;
