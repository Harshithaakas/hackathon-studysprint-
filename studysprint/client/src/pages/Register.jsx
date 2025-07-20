import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      console.log('Server response:', data);

      if (response.ok) {
        alert('✅ Registration successful!');
        // Optional: redirect or clear form
      } else {
        alert(`❌ ${data.message || 'Registration failed'}`);
      }
    } catch (error) {
      console.error('Error registering:', error);
      alert('Something went wrong!');
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
        <h2 className="text-3xl font-bold mb-6 text-center">
          Register for StudySprint
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-transparent border border-white placeholder-white text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-transparent border border-white placeholder-white text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-transparent border border-white placeholder-white text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-300 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
