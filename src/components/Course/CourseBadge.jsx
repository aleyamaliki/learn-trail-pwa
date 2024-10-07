import React from 'react';
import CourseBadgeList from './CourseBadgeList'; // Adjust the path to your CourseBadge component

// Dummy data for courses
const coursesData = [
  {
    title: "Introduction to React",
    progress: 65,
    imageSrc: "https://via.placeholder.com/100" // Dummy image
  },
  {
    title: "Advanced JavaScript",
    progress: 85,
    imageSrc: "https://via.placeholder.com/100" // Dummy image
  },
  {
    title: "CSS Mastery",
    progress: 50,
    imageSrc: "https://via.placeholder.com/100" // Dummy image
  },
  {
    title: "Web Accessibility",
    progress: 40,
    imageSrc: "https://via.placeholder.com/100" // Dummy image
  },
  {
    title: "Full Stack Development",
    progress: 75,
    imageSrc: "https://via.placeholder.com/100" // Dummy image
  }
];

const CourseBadge = () => {
  return (
    <div className="p-4">
        <h1 className="text-xl pb-4 font-semibold">Courses Badges</h1>
        <div className="grid grid-cols-3 md:grid-cols-2 gap-4">
      {coursesData.map((course, index) => (
        <CourseBadgeList
          key={index}
          title={course.title}
          imageSrc={course.imageSrc}
        />
      ))}
        </div>
    </div>
  );
};

export default CourseBadge;
