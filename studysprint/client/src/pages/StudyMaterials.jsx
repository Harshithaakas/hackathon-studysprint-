import React from 'react';

const StudyMaterials = () => {
  const materials = [
    {
      title: "DSA Handbook",
      description: "Comprehensive guide covering core Data Structures & Algorithms.",
      link: "#"
    },
    {
      title: "React Notes PDF",
      description: "Quick summary of React.js fundamentals and hooks.",
      link: "#"
    },
    {
      title: "Machine Learning Basics",
      description: "Starter material for ML including regression, classification, and models.",
      link: "#"
    },
  ];

  return (
    <div className="w-full h-screen bg-gradient-to-r from-blue-100 to-blue-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl h-full bg-white p-8 rounded-3xl shadow-2xl flex flex-col">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">📚 Study Materials</h1>

        <div className="flex-1 overflow-y-auto space-y-6 bg-white p-6 rounded-xl border border-blue-200 shadow-inner">
          {materials.map((item, idx) => (
            <div
              key={idx}
              className="bg-blue-50 border border-blue-200 p-5 rounded-xl shadow hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h2>
              <p className="text-gray-700 mb-3">{item.description}</p>
              <a
                href={item.link}
                className="text-blue-600 font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                📥 Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyMaterials;
