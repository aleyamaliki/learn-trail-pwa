import React from 'react';

const courses = [
  { id: 1, title: 'Advanced JavaScript', description: 'Master JavaScript and ES6+ features.' },
  { id: 2, title: 'UI/UX Design Fundamentals', description: 'Design beautiful user interfaces.' },
];


const CurrentCourses = () => {
  return (
    <div className="p-4 bg-gray-100 ">
      <h2 className="text-2xl font-bold mb-4">Current Courses</h2>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {courses.map((course) => (
          <div key={course.id} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{course.description}</p>
            <button className="bg-blue-500 text-white text-sm py-2 px-4 rounded hover:bg-blue-600">
              Continue
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentCourses;
