import React from 'react';

const UserProfile = ({ user }) => {
  if (!user) {
    return <p className="text-center text-gray-600">Please log in to view your profile.</p>;
  }

  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-xl">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">User Profile</h2>
      
      <div className="mb-4">
        <strong className="text-gray-600">Name: </strong>
        <span className="text-gray-800">{user.name}</span>
      </div>

      <div className="mb-4">
        <strong className="text-gray-600">Email: </strong>
        <span className="text-gray-800">{user.email}</span>
      </div>

      <div className="mb-4">
        <strong className="text-gray-600">Joined: </strong>
        <span className="text-gray-800">{new Date(user.joinedAt).toLocaleDateString()}</span> {/* Display the join date */}
      </div>
    </div>
  );
};

export default UserProfile;
