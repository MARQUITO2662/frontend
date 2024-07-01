import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleEditClick = () => {
    navigate('/edit-profile');
  };

  const handleLogout = () => {
    // Implement logout logic, e.g., clear localStorage, reset state, etc.
    navigate('/login'); // Navigate to login page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl px-8 flex items-center justify-between mb-8">
        <img className="w-20 h-10" src="/challengeee.webp" alt="Logo" />
        <div className="text-center">
          <h2 className="text-xl font-extrabold text-gray-900">Personal info</h2>
          <p className="mt-2 text-sm text-gray-600">
            Basic info, like your name and photo.
          </p>
        </div>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-2" src="/challane.jpg" alt="User Profile" />
          <div className="flex items-center">
            <h2 className="text-xl font-extrabold text-gray-900 mr-2">Xanthe Neal</h2>
            <button onClick={handleMenuToggle} className="text-sm text-indigo-600 hover:text-indigo-500">
              <span>&#9662;</span>
            </button>
            {showMenu && (
              <div className="ml-2 bg-white shadow-lg rounded-md">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleEditClick}>My Profile</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Group Chat</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-xl">
        <form className="space-y-6">
          <div className="border p-4 rounded">
            <h3 className="text-lg font-medium text-gray-900">Profile</h3>
            <p className="text-sm text-gray-500">Some info may be visible to other people</p>
            <button type="button" onClick={handleEditClick} className="float-right mt-2 px-4 py-1 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100">
              Edit
            </button>
          </div>
          <div className="border-t border-gray-200 pt-4 space-y-4">
            {/* Photo section */}
            <div className="border p-4 rounded">
              <label className="block text-sm font-medium text-gray-700">Photo</label>
              <img src="/challane.jpg" alt="Profile" className="mt-2 w-20 h-20 rounded-full" />
            </div>
            
            {/* Name section */}
            <div className="border p-4 rounded flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <p className="mt-1 text-sm text-gray-900">Xanthe Neal</p>
            </div>

            {/* Bio section */}
            <div className="border p-4 rounded">
              <label className="block text-sm font-medium text-gray-700">Bio</label>
              <p className="mt-1 text-sm text-gray-900">I am a software developer and a big fan of devchallenges.</p>
            </div>

            {/* Phone section */}
            <div className="border p-4 rounded">
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <p className="mt-1 text-sm text-gray-900">908249274292</p>
            </div>

            {/* Email section */}
            <div className="border p-4 rounded">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="mt-1 text-sm text-gray-900">xanthe.neal@gmail.com</p>
            </div>

            {/* Password section */}
            <div className="border p-4 rounded">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <p className="mt-1 text-sm text-gray-900">********</p>
            </div>
          </div>
        </form>
      </div>

      {/* Footer section */}
      <footer className="mt-8 text-center text-sm text-gray-500 flex justify-between items-center w-full max-w-4xl px-8">
        <p>created by username</p>
        <p>devChallenges.io</p>
      </footer>
    </div>
  );
};

export default Dashboard;
