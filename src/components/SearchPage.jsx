import React, { useState } from 'react'
import dummyCourses from "../Data/CoursesData"
import { FaSearch } from 'react-icons/fa';

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCourses = dummyCourses.filter(course =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div className="p-4 bg-gray-100 min-h-screen">
        {/* Header with Search Bar */}
        <div className="flex items-center mb-4 bg-white p-2 rounded-lg shadow-md">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search for courses..."
            className="ml-2 flex-grow outline-none p-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
  
        {/* List of Dummy Courses */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-bold mb-4">Courses</h2>
          {filteredCourses.length === 0 ? (
            <p className="text-gray-500">No courses found.</p>
          ) : (
            <ul>
              {filteredCourses.map(course => (
                <li key={course.id} className="py-2 border-b last:border-b-0">
                  {course.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };

export default SearchPage