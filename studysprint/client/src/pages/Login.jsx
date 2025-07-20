import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ← Add useNavigate

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // ← Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log('Login response:', data);

      if (response.ok) {
        alert('✅ Login successful!');
        navigate('/'); // ← Redirect to Home page
      } else {
        alert(`❌ ${data.message || 'Login failed'}`);
      }
    } catch (error) {
      console.error('Login error:', error);
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
          Login to StudySprint
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
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

          <div className="text-right text-sm">
            <Link to="/forgot-password" className="text-blue-300 hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Don’t have an account?{' '}
          <Link to="/register" className="text-blue-300 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
