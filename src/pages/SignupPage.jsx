import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    if (!formData.email || !formData.password) {
      alert("Please enter all required fields!");
      return;
    }

    localStorage.setItem("user", JSON.stringify(formData));
    localStorage.setItem("isAuthenticated", "true");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 min-h-screen overflow-hidden relative">
      <div className="w-full max-w-lg bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-10 transform transition-all duration-500 hover:scale-105">
        <div className="text-center mb-6">
          <img src="/logo.jpeg" alt="logo" className="w-20 mx-auto mb-4 rounded-full shadow-lg" />
          <h2 className="text-3xl font-bold text-gray-800">Create Your Account</h2>
          <p className="text-gray-600">Join us for a better future</p>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-green-300 transition duration-300"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-green-300 transition duration-300"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-green-300 transition duration-300"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-4 focus:ring-green-300 transition duration-300"
          />

          <button
            onClick={handleSignup}
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white p-3 rounded-lg shadow-lg hover:scale-105 transition duration-300"
          >
            Sign Up
          </button>

          <p className="text-center text-gray-600">
            Already have an account?{' '}
            <span
              className="text-green-500 cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-600">Or sign up with</p>
          <div className="flex justify-center gap-4 mt-3">
            <FontAwesomeIcon icon={faFacebookF} className="text-blue-600 text-lg cursor-pointer hover:opacity-75" />
            <FontAwesomeIcon icon={faTwitter} className="text-blue-400 text-lg cursor-pointer hover:opacity-75" />
            <FontAwesomeIcon icon={faGoogle} className="text-red-500 text-lg cursor-pointer hover:opacity-75" />
            <FontAwesomeIcon icon={faGithub} className="text-gray-700 text-lg cursor-pointer hover:opacity-75" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;