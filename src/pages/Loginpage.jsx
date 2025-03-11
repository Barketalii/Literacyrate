import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    } else {
      alert("Please enter both email and password!");
    }
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 min-h-screen overflow-hidden relative">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 transform transition-all duration-500 hover:scale-105">
        <div className="text-center">
          <img src="/logo.jpeg" alt="logo" className="w-20 mx-auto mb-4 rounded-full shadow-lg" />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
          <p className="text-gray-600 mb-6">Login to continue your journey</p>
        </div>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:ring-4 focus:ring-purple-300 transition duration-300"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-2 rounded-lg border border-gray-300 focus:ring-4 focus:ring-purple-300 transition duration-300"
        />

        <p 
          className="text-right text-purple-500 cursor-pointer hover:underline text-sm mb-4"
          onClick={() => navigate("/forgot-password")}
        >
          Forgot Password?
        </p>

        <button
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-lg shadow-lg hover:scale-105 transition duration-300"
        >
          Sign In
        </button>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{' '}
          <span
            className="text-purple-500 cursor-pointer hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
