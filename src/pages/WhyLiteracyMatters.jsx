import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { FaBook, FaGlobe, FaLightbulb, FaGraduationCap, FaArrowLeft } from "react-icons/fa";

const WhyLiteracyMatters = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-green-300 to-blue-300 min-h-screen text-white">
      
      <div className="max-w-5xl mx-auto p-8">
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-4 py-2 mb-4 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition"
        >
          <FaArrowLeft /> Back
        </button>

        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center mb-6">📖 Why Literacy Matters?</h1>
        
        {/* Introduction */}
        <p className="text-lg text-gray-200 text-center">
          Literacy is the foundation of personal and societal growth. Higher literacy rates lead to better economies, stronger communities, 
          and improved quality of life. However, **literacy rates among Muslims in many countries are below global averages.** 
          Addressing this gap is crucial for progress and empowerment.
        </p>

        {/* Section: Challenges Affecting Muslim Literacy Rates */}
        <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-6 rounded-lg shadow-lg mt-8">
          <h2 className="text-2xl font-bold flex items-center gap-2"><FaBook className="text-blue-500" /> Challenges Affecting Muslim Literacy Rates</h2>
          <ul className="list-disc pl-6 mt-3 space-y-2 text-lg">
            <li>🚧 Lack of Access to Quality Education</li>
            <li>💰 Economic Challenges & Poverty</li>
            <li>⚖️ Socio-Cultural Factors & Gender Disparities</li>
            <li>🏛️ Limited Government & NGO Support</li>
            <li>📚 Balancing Religious and Modern Education</li>
          </ul>
        </div>

        {/* Section: How Other Countries Have Achieved Higher Literacy */}
        <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-6 rounded-lg shadow-lg mt-8">
          <h2 className="text-2xl font-bold flex items-center gap-2"><FaGlobe className="text-yellow-300" /> How Other Countries Have Achieved Higher Literacy</h2>
          <ul className="list-disc pl-6 mt-3 space-y-2 text-lg">
            <li>📜 Strong Government Educational Policies</li>
            <li>🏫 Accessible & Affordable Schooling</li>
            <li>👩‍🏫 Investment in Teacher Training & Infrastructure</li>
            <li>👩‍🎓 Encouraging Female Education & Gender Equality</li>
            <li>💻 Integration of Technology in Learning</li>
          </ul>
        </div>

        {/* Section: How to Improve Literacy Rates */}
        <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-6 rounded-lg shadow-lg mt-8">
          <h2 className="text-2xl font-bold flex items-center gap-2"><FaLightbulb className="text-yellow-400" /> How to Improve Literacy Rates?</h2>
          <ul className="list-disc pl-6 mt-3 space-y-2 text-lg">
            <li>🏫 Expanding Access to Free & Affordable Education</li>
            <li>🎓 Providing Scholarships & Financial Support</li>
            <li>🔧 Enhancing Vocational & Skill-Based Learning</li>
            <li>🚺 Promoting Female Education & Awareness Programs</li>
            <li>🌐 Leveraging Digital Learning Platforms</li>
          </ul>
        </div>

        {/* Closing Statement */}
        <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-6 rounded-lg shadow-lg mt-8 text-center">
          <h2 className="text-2xl font-bold flex items-center justify-center gap-2"><FaGraduationCap className="text-blue-900" /> Education is the Key to Progress!</h2>
          <p className="mt-3 text-lg">
            By addressing educational challenges and adopting best practices, we can create a **more literate, empowered, and successful** future.
          </p>
        </div>
      </div>
     
    </div>
  );
};

export default WhyLiteracyMatters;
