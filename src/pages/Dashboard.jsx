import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";
import TotalStudentsCount from "../components/TotalStudentsCount";
import LiveRegistration from "../components/LiveRegistration";
import DownloadButton from "../components/DownloadButton";
import StateWiseChart from "../components/StateWiseChart";
const DashboardPage = () => {
  const totalStudents = 120;
  const stateData = { "Karnataka": 50, "J&K": 30, "Delhi": 20, "UP": 20 };
  const latestStudents = [
    { name: "Ali Khan", state: "Karnataka" },
    { name: "Ahmed Hussain", state: "J&K" },
    { name: "Fatima Sheikh", state: "Delhi" },
    { name: "Mohammed Yousuf", state: "Karnataka" },
  ];

  const handleDownload = () => {
    alert("Download Started");
  };

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <div className="flex-1 p-10 bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Welcome</h1>
        <TotalStudentsCount count={totalStudents} />
        <div className="my-6">
          <StateWiseChart data={stateData} />
        </div>
        <LiveRegistration students={latestStudents} />
        <div className="mt-6">
          <DownloadButton onDownload={handleDownload} />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;