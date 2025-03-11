import React from "react";

const LiveRegistration = ({ students }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Latest Registrations</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index} className="border-b p-2">{student.name} - {student.country}</li>
        ))}
      </ul>
    </div>
  );
};

export default LiveRegistration;