import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-green-400 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
        <img
  src="/logo.png" // Yeh PNG Wali Transparent Image Hai
  alt="Logo"
  className="w-24 mx-auto "
/>



          <h1 className="text-2xl font-bold">AL-MOMIN GROUP</h1>
        </div>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/global-stats" className="hover:underline">
            LiteracyStatus
          </Link>
          <Link to="/studentRegistrationForm" className="hover:underline">
            RegistrationForm
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <Link to="/dashboard" className="hover:underline">
  Dashboard
</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
