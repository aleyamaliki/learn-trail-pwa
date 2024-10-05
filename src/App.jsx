import React, { useEffect, useState } from 'react'
import './App.css'
//import TabNav from './components/TabNav'
//import HomeNavbar from './components/NavBar/HomeNavBar'
//import CourseNavbar from './components/NavBar/CourseNavBar'
import Course from './components/CourseList'
//import LoadingScreen from './components/LoadingScreen'
import Home from './pages/Home'
import { createBrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Search from './pages/Search'
import Profile from './pages/Profile'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "/search",
          element: <Search />
        },
        {
          path: "/course",
          element: <Course />
        },
        {
          path: "/profile",
          element: <Profile />
        },
      ]
    }
  ])
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Simulate a delay (for example, fetching data)
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000); // Set your loading duration here
  // }, []);

  return <RouterProvider router={router} />;
  // (
  //   <>
  //     {isLoading ? <LoadingScreen /> : <Home />}
  //   </>
  // )
}

export default App
