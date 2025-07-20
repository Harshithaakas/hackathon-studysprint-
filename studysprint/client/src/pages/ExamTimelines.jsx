import React from 'react';
import { Link } from 'react-router-dom';

const ExamTimelines = () => {
  const exams = [
    {
      title: "Data Structures Midterm",
      date: "Aug 5, 2025",
      time: "10:00 AM – 12:00 PM",
      route: "/exam/data-structures",
    },
    {
      title: "Web Development Final",
      date: "Aug 12, 2025",
      time: "2:00 PM – 5:00 PM",
      route: "/exam/web-development",
    },
    {
      title: "Machine Learning Project",
      date: "Aug 20, 2025",
      time: "Submit before 11:59 PM",
      route: "/exam/machine-learning",
    },
    {
      title: "Computer Networks Midterm",
      date: "Aug 25, 2025",
      time: "9:00 AM – 11:00 AM",
      route: "/exam/computer-networks",
    },
    {
      title: "Operating Systems Final",
      date: "Sept 2, 2025",
      time: "1:00 PM – 3:00 PM",
      route: "/exam/operating-systems",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex flex-col items-center justify-start p-8"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=1740&q=80')", // Home desk / study vibe
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-blue-100 bg-opacity-70 backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10 drop-shadow">
          📅 Full Exam Timeline
        </h1>
        <div className="grid gap-6">
          {exams.map((exam, idx) => (
            <Link to={exam.route} key={idx}>
              <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {exam.title}
                </h3>
                <p className="text-gray-600">📆 {exam.date}</p>
                <p className="text-gray-600">🕒 {exam.time}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamTimelines;
