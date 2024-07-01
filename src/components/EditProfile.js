import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const [name, setName] = useState('Xanthe Neal');
  const [bio, setBio] = useState('Soy un desarrollador de software y un gran fan de devchallenges.');
  const [phone, setPhone] = useState('908249274292');
  const [email, setEmail] = useState('xanthe.neal@gmail.com');
  const [password, setPassword] = useState('********');
  const [photo, setPhoto] = useState('/challane.jpg');
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const handleSave = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token JWT no encontrado.');
      return;
    }

    try {
      const body = { name, bio, phone, email, password };
      console.log('Sending data:', body); // Log the data being sent

      const response = await fetch('http://localhost:3000/api/users/update-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        const errorData = await response.json(); // Try to parse the error response
        console.error('Error response from server:', errorData);
        throw new Error('Error al actualizar el perfil.');
      }

      const data = await response.json();
      console.log('Perfil actualizado:', data);

      navigate('/');
    } catch (error) {
      console.error('Error al actualizar el perfil:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl px-8 flex items-center justify-between mb-8">
        <img className="w-20 h-10" src="/challengeee.webp" alt="Logo" />
        <div className="flex items-center justify-start">
          <button onClick={() => navigate('/')} className="text-blue-600 hover:text-blue-500 flex items-center mb-4">
            <span className="text-blue-600 text-lg">&#9664;</span> Back
          </button>
        </div>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-2" src={photo} alt="User Profile" />
          <div className="flex items-center">
            <h2 className="text-xl font-extrabold text-gray-900 mr-2">{name}</h2>
            <button onClick={handleMenuToggle} className="text-sm text-indigo-600 hover:text-indigo-500">
              <span>&#9662;</span>
            </button>
            {showMenu && (
              <div className="ml-2 bg-white shadow-lg rounded-md">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate('/edit-profile')}>My Profile</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Group Chat</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-xl">
        <form className="space-y-6" onSubmit={handleSave}>
          <div className="border p-4 rounded">
            <label className="block text-sm font-medium text-gray-900">Change info</label>
            <p>Changes will be reflected to every service</p>
            <div className="flex items-center mt-2 justify-between">
              <img className="w-20 h-20 rounded-full" src={photo} alt="Profile" />
              <label className="block text-sm font-medium text-gray-500">
                CHANGE PHOTO
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => setPhoto(URL.createObjectURL(e.target.files[0]))}
                />
              </label>
            </div>
          </div>
          <div className="border p-4 rounded">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 block w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="border p-4 rounded">
            <label className="block text-sm font-medium text-gray-700">Bio</label>
            <input
              type="text"
              className="mt-1 block w-full"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
          <div className="border p-4 rounded">
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              className="mt-1 block w-full"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="border p-4 rounded">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="border p-4 rounded">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="mt-1 block w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-start">
            <button type="submit" className="px-4 py-1 text-sm text-white bg-blue-600 hover:bg-blue-500 rounded-lg">Save</button>
          </div>
        </form>
      </div>

      <footer className="mt-8 text-center text-sm text-gray-500 flex justify-between items-center w-full max-w-4xl px-8">
        <p>created by username</p>
        <p>devChallenges.io</p>
      </footer>
    </div>
  );
};

export default EditProfile;
