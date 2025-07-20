import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { label: '📢 Discussions', value: 12 },
    { label: '📚 Study Materials', value: 8 },
    { label: '💬 Live Chats Today', value: 5 },
    { label: '✍️ Your Posts', value: 6 },
  ];

  const shortcuts = [
    { label: 'Start Discussion', path: '/group-discussion' },
    { label: 'Join Live Chat', path: '/live-chat' },
    { label: 'View Materials', path: '/study-materials' },
    { label: 'Upload Notes', path: '/upload-notes' },
  ];

  const recentActivity = [
    'You replied to "React vs Angular"',
    'Bob uploaded "DSA Handbook"',
    'New topic: "ML Project Ideas"',
  ];

  const trending = [
    { title: 'Best DSA Resources', replies: 14 },
    { title: 'ML Roadmap 2025', replies: 9 },
    { title: 'Frontend Interview Questions', replies: 11 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-white p-8">
      <h1 className="text-4xl font-bold text-blue-800 mb-10 text-center">📊 Dashboard</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((s, idx) => (
          <div
            key={idx}
            className="bg-white border border-blue-200 rounded-2xl p-6 shadow hover:shadow-lg transition"
          >
            <div className="text-3xl font-bold text-blue-700 mb-1">{s.value}</div>
            <div className="text-sm text-gray-700 font-medium">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">⚡ Quick Actions</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {shortcuts.map((item, idx) => (
          <button
            key={idx}
            onClick={() => navigate(item.path)}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition w-full"
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Recent Activity */}
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">🕓 Recent Activity</h2>
      <ul className="bg-white p-6 rounded-xl border border-blue-200 shadow-inner mb-12 space-y-3">
        {recentActivity.map((activity, idx) => (
          <li key={idx} className="text-gray-700">• {activity}</li>
        ))}
      </ul>

      {/* Trending Topics */}
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">🔥 Trending Discussions</h2>
      <div className="grid gap-4">
        {trending.map((item, idx) => (
          <div
            key={idx}
            onClick={() => navigate('/group-discussion')}
            className="bg-blue-100 p-5 rounded-xl shadow hover:shadow-md transition cursor-pointer"
          >
            <h3 className="text-lg font-bold text-blue-800">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.replies} replies</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
