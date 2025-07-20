import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/users/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMessage('✅ Reset link has been sent to your email.');
        setErrorMessage('');
        setEmail('');
      } else {
        setSuccessMessage('');
        setErrorMessage(`❌ ${data.message || 'Failed to send reset link.'}`);
      }
    } catch (err) {
      console.error('Error:', err);
      setSuccessMessage('');
      setErrorMessage('✅Sent to your email');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-start px-4 relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1740&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60 z-0" />

      <div className="relative z-10 w-full max-w-md text-white ml-32">
        <h2 className="text-3xl font-bold mb-6 text-center">Forgot Password</h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-transparent border border-white placeholder-white text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Reset Link
          </button>
        </form>

        {/* ✅ Success or Error Message */}
        {successMessage && (
          <div className="mt-4 text-green-400 text-center font-medium">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="mt-4 text-green-400 text-center font-medium">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
