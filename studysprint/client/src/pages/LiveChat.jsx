import React, { useState } from 'react';

const LiveChat = () => {
  const [messages, setMessages] = useState([
    { user: "Alice", text: "Hey, ready to revise DSA?", time: "10:01 AM" },
    { user: "Bob", text: "Yes! Let’s start with linked lists.", time: "10:02 AM" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setMessages([...messages, { user: "You", text: input, time }]);
      setInput("");
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-r from-blue-100 to-blue-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl h-full bg-white p-6 rounded-3xl shadow-2xl flex flex-col">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">💬 Live Chat</h1>

        <div className="flex-1 overflow-y-auto bg-white px-4 py-4 rounded-lg border border-blue-200 shadow-inner space-y-3">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.user === "You" ? 'justify-end' : 'justify-start'}`}
            >
              <div className="max-w-xs bg-blue-200 text-gray-800 px-4 py-2 rounded-xl">
                <p className="font-medium">{msg.text}</p>
                <span className="text-sm text-gray-600 block mt-1">
                  — {msg.user}, {msg.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 mt-4">
          <input
            type="text"
            className="flex-grow border border-gray-300 px-4 py-2 rounded-xl"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
