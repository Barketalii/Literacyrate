import React from "react";

const TotalStudentsCount = ({ count }) => {
  return (
    <div className="bg-blue-500 text-white rounded-lg p-6 text-center">
      <h2 className="text-2xl font-bold">Total Students Registered</h2>
      <p className="text-4xl">{count}</p>
    </div>
  );
};

export default TotalStudentsCount;