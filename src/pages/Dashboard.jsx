import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  // Check if user is logged in, else redirect to login page
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect to login if no token
    } else {
      // Fetch user data from API if needed (using token)
      fetchUserData(token);
    }
  }, [navigate]);

  const fetchUserData = async (token) => {
    try {
      const response = await fetch("http://localhost:5000/api/user", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token on logout
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f7fafc]">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Dashboard</h2>

        {/* Welcome Message */}
        {userData ? (
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Welcome, {userData.name}!</h3>
            <p className="text-gray-600">You are logged in and can manage your tasks.</p>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-600">Loading user data...</p>
          </div>
        )}

        {/* Logout Button */}
        <div className="mt-6 text-center">
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
