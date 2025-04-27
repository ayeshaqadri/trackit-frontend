import React, { useState } from "react";
import axios from "axios"; // Make sure axios is installed
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://microfinance-backend-production.up.railway.app/api/auth/login", {
        email,
        password,
      });

      // Handle successful login
      console.log("Login successful:", response.data);

      // Store the JWT token (if you are using one) in localStorage or sessionStorage
      localStorage.setItem("token", response.data.token); // assuming JWT token is returned

      // Navigate to the dashboard page after login
      navigate("/dashboard"); // Redirect to the dashboard
    } catch (err) {
      setError("Invalid credentials"); // Or log the actual error message
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f7fafc]">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h2>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
            <strong>Error: </strong> {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:text-blue-700">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
