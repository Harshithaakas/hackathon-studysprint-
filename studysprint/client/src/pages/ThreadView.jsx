// src/pages/ThreadView.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ThreadView = () => {
  const { title } = useParams();
  const navigate = useNavigate();

  const [replies, setReplies] = useState([
    { user: "Alice", text: "Focus on LeetCode daily!" },
    { user: "Bob", text: "Use visualgo.net for learning." },
  ]);
  const [input, setInput] = useState("");

  const handleReply = () => {
    if (input.trim()) {
      setReplies([...replies, { user: "You", text: input }]);
      setInput("");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-100 to-blue-50 px-6 py-12 flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white p-6 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">🧵 {decodeURIComponent(title)}</h2>

        <div className="space-y-4 mb-6">
          {replies.map((reply, idx) => (
            <div key={idx} className="bg-blue-100 p-3 rounded-lg">
              <strong>{reply.user}</strong>: {reply.text}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            className="flex-grow border border-gray-300 px-4 py-2 rounded-lg"
            placeholder="Add a reply..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleReply}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Reply
          </button>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="mt-6 text-sm text-blue-500 hover:underline"
        >
          ← Back to Discussions
        </button>
      </div>
    </div>
  );
};

export default ThreadView;
