import React, { useState, useContext } from 'react';
import axios from '../services/api';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/users/login', { email, password });
      login(response.data.token);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error:', error);
      setError('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-xl mt-12">
        <div className="text-left">
          <img className="w-22 h-10 mb-6" src="/challengeee.webp" alt="Logo" />
          <h2 className="text-3xl font-extrabold text-gray-900">
            Login
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm">
            <div className="flex items-center border border-gray-300 rounded-t-md focus-within:ring-indigo-500 focus-within:border-indigo-500">
              <img className="w-6 h-6 ml-2" src="/email.png" alt="Email Icon" />
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-4 rounded-md shadow-sm">
            <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-indigo-500 focus-within:border-indigo-500">
              <img className="w-6 h-6 ml-2" src="/password.png" alt="Password Icon" />
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
          {error && <p className="mt-2 text-center text-sm text-red-600">{error}</p>}
        </form>
        <div className="flex items-center justify-center mt-6">
          <span className="border-b w-1/5 lg:w-1/4"></span>
          <span className="text-xs text-center text-gray-500 uppercase">or continue with these social profiles</span>
          <span className="border-b w-1/5 lg:w-1/4"></span>
        </div>
        <div className="flex justify-center space-x-4 mt-6">
          <button aria-label="Log in with Google" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200">
            <img className="w-6 h-6" src="/google_icon-icons.webp" alt="Google Icon" />
          </button>
          <button aria-label="Log in with Facebook" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200">
            <img className="w-6 h-6" src="/facebook icon.png" alt="Facebook Icon" />
          </button>
          <button aria-label="Log in with Twitter" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200">
            <img className="w-6 h-6" src="/TWITTER_icon-icons.webp" alt="Twitter Icon" />
          </button>
          <button aria-label="Log in with GitHub" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200">
            <img className="w-6 h-6" src="/githuub.png" alt="GitHub Icon" />
          </button>
        </div>
        <p className="mt-8 text-center text-sm text-gray-600">
          Not a member? <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">Register</Link>
        </p>
      </div>

      {/* Footer section */}
      <footer className="mt-8 mb-4 text-center text-sm text-gray-500 flex justify-between items-center w-full max-w-4xl px-8">
        <p>created by username</p>
        <p className="ml-2">devChallenges.io</p>
      </footer>
    </div>
  );
};

export default LoginForm;
