import React from 'react'

const explores = [
    { id: 1, title: 'React Native for Beginners', description: 'Learn the basics of React Native.' },
    { id: 2, title: 'Data Structures in Python', description: 'Master data structures with Python.' },
  ];

const Explore = () => {
  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Explore</h2>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {explores.map((explore) => (
          <div key={explore.id} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">{explore.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{explore.description}</p>
            <button className="bg-blue-500 text-white text-sm py-2 px-4 rounded hover:bg-blue-600">
              Continue
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Explore