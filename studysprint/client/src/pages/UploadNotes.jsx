import React, { useState } from 'react';

const UploadNotes = () => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleUpload = (e) => {
    e.preventDefault();
    if (!title || !file) {
      setMessage('Please enter a title and select a file.');
      return;
    }

    // You would normally send the file to a backend here.
    setMessage(`✅ "${title}" uploaded successfully!`);
    setTitle('');
    setFile(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-50 flex items-center justify-center px-6 py-12">
      <div className="bg-white p-8 rounded-3xl shadow-xl max-w-xl w-full">
        <h1 className="text-2xl font-bold text-blue-700 mb-6 text-center">📤 Upload Study Notes</h1>

        <form onSubmit={handleUpload} className="space-y-5">
          <input
            type="text"
            placeholder="Title for the notes..."
            className="w-full border border-gray-300 px-4 py-3 rounded-xl"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="file"
            className="w-full border border-gray-300 px-4 py-3 rounded-xl"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Upload
          </button>
        </form>

        {message && (
          <p className="text-green-600 text-sm mt-4 text-center font-medium">{message}</p>
        )}
      </div>
    </div>
  );
};

export default UploadNotes;
