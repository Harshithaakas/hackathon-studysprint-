import React, { useState } from "react";
import { Link } from "react-router-dom";

const Groups = () => {
  const [openGroupIndex, setOpenGroupIndex] = useState(null);

  const groups = [
    { name: "DSA Warriors", subject: "Data Structures & Algorithms", members: 18 },
    { name: "Frontend Masters", subject: "HTML, CSS, React", members: 25 },
    { name: "AI Revolution", subject: "Machine Learning & AI", members: 20 },
    { name: "System Design Hub", subject: "System Architecture & Microservices", members: 12 },
    { name: "Cloud Ninjas", subject: "DevOps, AWS, Docker", members: 17 },
    { name: "Full Stack Crew", subject: "MERN Stack Development", members: 22 },
    { name: "Communication Champs", subject: "Communication Skills", members: 15 },
    { name: "Cyber Sentinels", subject: "Cyber Security", members: 14 },
    { name: "Database Wizards", subject: "SQL & NoSQL Databases", members: 19 },
    { name: "Pythonistas", subject: "Python Programming", members: 21 },
    { name: "Java League", subject: "Java & OOPs", members: 16 },
    { name: "Math Minds", subject: "Engineering Mathematics", members: 13 },
    { name: "Soft Skill Circle", subject: "Soft Skills & Career Prep", members: 10 },
    { name: "AI Ethics Guild", subject: "AI Ethics & Responsible Tech", members: 9 },
    { name: "Networking Ninjas", subject: "Computer Networks", members: 11 },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center py-16 px-6 relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1740&q=80')",
      }}
    >
      {/* Optional overlay to improve readability */}
      <div className="absolute inset-0 bg-white bg-opacity-70 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12">
          📘Explore Study Groups
        </h1>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-blue-100 text-left"
            >
              <h2 className="text-2xl font-bold text-blue-600 mb-2">{group.name}</h2>
              <p className="text-gray-600"><strong>Subject:</strong> {group.subject}</p>
              <p className="text-gray-500 mb-4"><strong>Members:</strong> {group.members}</p>

              <button
                onClick={() => setOpenGroupIndex(openGroupIndex === index ? null : index)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                {openGroupIndex === index ? "Leave Group" : "Join Group"}
              </button>

              {openGroupIndex === index && (
                <div className="mt-6 bg-blue-50 border-t pt-4 border-blue-200 rounded-lg px-4">
                  <p className="text-blue-700 font-semibold mb-3">📢 Group Tools</p>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="bg-white p-3 rounded shadow hover:bg-blue-100 transition">
                      <Link to="/live-chat">
                        💬<strong>Live Chat</strong>: Chat instantly with group members.
                      </Link>
                    </li>
                    <li className="bg-white p-3 rounded shadow hover:bg-blue-100 transition">
                      <Link to="/group-discussion">
                        🧠<strong>Group Discussions</strong>: Collaborate and share ideas.
                      </Link>
                    </li>
                    <li className="bg-white p-3 rounded shadow hover:bg-blue-100 transition">
                      <Link to="/study-materials">
                        📚<strong>Study Materials</strong>: Access notes and shared files.
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Groups;
