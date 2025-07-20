import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link

const GroupDiscussion = () => {
  const [topics, setTopics] = useState([
    {
      title: "How to master DSA in 2 months?",
      author: "Alice",
      replies: 4,
      lastReply: "1 hour ago",
    },
    {
      title: "Is React better than Angular for beginners?",
      author: "Bob",
      replies: 3,
      lastReply: "2 hours ago",
    },
  ]);
  const [input, setInput] = useState("");

  const handlePost = () => {
    if (input.trim() !== "") {
      setTopics([
        ...topics,
        { title: input, author: "You", replies: 0, lastReply: "Just now" },
      ]);
      setInput("");
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-r from-blue-100 to-blue-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl h-full bg-white p-6 rounded-3xl shadow-2xl flex flex-col">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">🗣️ Group Discussions</h1>

        <div className="flex-1 overflow-y-auto bg-white p-4 rounded-xl border border-blue-200 shadow-inner space-y-4">
          {topics.map((topic, idx) => (
            <div
              key={idx}
              className="bg-blue-100 p-4 rounded-xl shadow hover:shadow-md transition flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold text-blue-800">{topic.title}</h2>
                <p className="text-sm text-gray-600">
                  Posted by <strong>{topic.author}</strong> • {topic.replies} replies • Last reply: {topic.lastReply}
                </p>
              </div>
              {/* ✅ Use Link to navigate to ThreadView */}
              <Link to={`/thread/${encodeURIComponent(topic.title)}`}>
                <button className="bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-blue-700">
                  View Thread
                </button>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-6">
          <input
            type="text"
            className="flex-grow border border-gray-300 px-4 py-3 rounded-xl"
            placeholder="Start a new discussion topic..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handlePost}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupDiscussion;
