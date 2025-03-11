import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const StudentRegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    fatherOccupation: "",
    age: "",
    phone: "",
    email: "",
    gender: "",
    village: "",
    district: "",
    highestQualification: "",
    dropOutReason: "",
    wantToContinueStudy: "",
    totalFamilyMembers: ""
  });

  useEffect(() => {
    fetch("/api/students")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error("Error fetching students:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newStudent = await response.json();
        setStudents([...students, newStudent]);
        setFormData({
          firstName: "",
          secondName: "",
          lastName: "",
          fatherName: "",
          motherName: "",
          fatherOccupation: "",
          age: "",
          phone: "",
          email: "",
          gender: "",
          village: "",
          district: "",
          highestQualification: "",
          dropOutReason: "",
          wantToContinueStudy: "",
          totalFamilyMembers: ""
        });
        setStep(1);
        alert("Student registered successfully!");
      } else {
        alert("Error registering student.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="grid grid-cols-2 gap-4 m-0 ">

              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="p-3 border rounded-md shadow-sm" />
              <input type="text" name="secondName" placeholder="Second Name" value={formData.secondName} onChange={handleChange} className="p-3 border rounded-md shadow-sm" />
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="p-3 border rounded-md shadow-sm" />
              <input type="text" name="fatherName" placeholder="Father's Name" value={formData.fatherName} onChange={handleChange} className="p-3 border rounded-md shadow-sm" />
              <input type="text" name="motherName" placeholder="Mother's Name" value={formData.motherName} onChange={handleChange} className="p-3 border rounded-md shadow-sm" />
              <input type="text" name="fatherOccupation" placeholder="Father's Occupation (if alive)" value={formData.fatherOccupation} onChange={handleChange} className="p-3 border rounded-md shadow-sm" />
              <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} className="p-3 border rounded-md shadow-sm" />
              <select name="gender" value={formData.gender} onChange={handleChange} className="p-3 border rounded-md shadow-sm">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="p-3 border rounded-md shadow-sm" />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="p-3 border rounded-md shadow-sm" />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" name="village" placeholder="Village" value={formData.village} onChange={handleChange} className="p-3 border rounded-md shadow-sm" />
              <input type="text" name="district" placeholder="District" value={formData.district} onChange={handleChange} className="p-3 border rounded-md shadow-sm" />
              <input type="text" name="highestQualification" placeholder="Highest Qualification" value={formData.highestQualification} onChange={handleChange} className="p-3 border rounded-md shadow-sm" />
              <textarea
  name="dropOutReason"
  placeholder="Reason for Dropping Out"
  value={formData.dropOutReason}
  onChange={handleChange}
  className="p-3 border rounded-md shadow-sm resize-none w-full"
></textarea>
<textarea
  name="dropOutReason"
  placeholder="Reason for Dropping Out"
  value={formData.dropOutReason}
  onChange={handleChange}
  className="p-3 border rounded-md shadow-sm resize-none w-full"
></textarea>
 <select name="wantToContinueStudy" value={formData.wantToContinueStudy} onChange={handleChange} className="p-3 border rounded-md shadow-sm">
                <option value="">Would you like to continue study if provided chance?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <input type="number" name="totalFamilyMembers" placeholder="Total Family Members" value={formData.totalFamilyMembers} onChange={handleChange} className="p-3 border rounded-md shadow-sm" />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-8 bg-white shadow-lg rounded-lg w-full max-w-3xl mx-auto m-1">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-700">Online Registration</h2>
      <form onSubmit={step === 2 ? handleFormSubmit : handleNext}>
        {renderStep()}
        <div className="flex justify-between m-1">
          {step > 1 && <button onClick={handlePrevious} className="bg-gray-500 text-white px-6 py-2 rounded-md">Previous</button>}
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-md">{step === 2 ? "Submit" : "Next"}</button>
        </div>
      </form>
    </div>
  );
};

export default StudentRegistrationForm;
