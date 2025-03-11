import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import GlobalStats from "./pages/GlobalStats";
import StudentRegistrationForm from "./pages/StudentRegistrationForm";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WhyLiteracyMatters from "./pages/WhyLiteracyMatters";
import LoginPage from "./pages/Loginpage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  
  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
  }, []);

 
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" replace />;
  };

  return (
    <Router>
      <Routes>
       
        <Route path="/" element={isAuthenticated ? <Navigate to="/Home" replace /> : <LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        
        <Route path="/home" element={<ProtectedRoute><Layout><Home /></Layout></ProtectedRoute>} />
        <Route path="/global-stats" element={<ProtectedRoute><Layout><GlobalStats /></Layout></ProtectedRoute>} />
        <Route path="/studentRegistrationForm" element={<ProtectedRoute><Layout><StudentRegistrationForm /></Layout></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><Layout><About /></Layout></ProtectedRoute>} />
        <Route path="/contact" element={<ProtectedRoute><Layout><Contact /></Layout></ProtectedRoute>} />
        <Route path="/why-literacy-matters" element={<ProtectedRoute><Layout><WhyLiteracyMatters /></Layout></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Layout><Dashboard /></Layout></ProtectedRoute>} />

        
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
