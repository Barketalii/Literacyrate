import React from "react";
import { Link } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div className="w-64 bg-green-700 text-white h-full p-5">
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
      <ul className="space-y-4">
        <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
        <li><Link to="/dashboard/students" className="hover:underline">Students</Link></li>
        <li><Link to="/dashboard/global-stats" className="hover:underline">Global Stats</Link></li>
        <li><Link to="/dashboard/feedback" className="hover:underline">Feedback</Link></li>
        <li><Link to="/login" className="hover:underline">Logout</Link></li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;