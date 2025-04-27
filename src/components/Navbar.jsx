import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Token remove karna
    localStorage.removeItem("token");

    // Login page pe redirect
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/dashboard" className="text-white text-2xl font-bold">
          Dashboard
        </Link>

        <div className="space-x-4 flex items-center">
          <Link to="/task-board" className="text-white">Task Board</Link>
          <Link to="/login" className="text-white">Login</Link>
          <Link to="/register" className="text-white">Register</Link>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
