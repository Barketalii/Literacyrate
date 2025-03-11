import React from "react";
import Header from "../components/Header";
import LiteracyChart from "../components/LiteracyChart";
import { FaBook, FaChartBar, FaLightbulb, FaMapMarkedAlt, FaGraduationCap } from "react-icons/fa";

const KarnatakaStats = () => {
  const literacyData = [
    { district: "Bangalore Urban", literacyRate: 89 },
    { district: "Mysuru", literacyRate: 78 },
    { district: "Belagavi", literacyRate: 72 },
    { district: "Davanagere", literacyRate: 74 },
    { district: "Ballari", literacyRate: 68 },
    { district: "Vijayapura", literacyRate: 66 },
    { district: "Tumakuru", literacyRate: 76 },
    { district: "Hassan", literacyRate: 79 },
    { district: "Chitradurga", literacyRate: 71 },
    { district: "Bagalkot", literacyRate: 65 },
  ];

  return (
    <div className="bg-gradient-to-r from-green-300 to-blue-300 min-h-screen text-white">
     
      <section className="p-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center">🌐 Karnataka Literacy Statistics</h2>
        <p className="mt-4 text-lg text-gray-200 text-center">
          Understanding literacy rates across Karnataka districts to promote education and awareness.
        </p>

        /* Key Statistics */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white text-black p-4 rounded-lg shadow-lg text-center">
            <FaBook className="text-4xl text-blue-500 mx-auto" />
            <h3 className="text-xl font-semibold mt-2">State Literacy Rate</h3>
            <p className="text-lg font-bold">75.6%</p>
          </div>
          <div className="bg-white text-black p-4 rounded-lg shadow-lg text-center">
            <FaMapMarkedAlt className="text-4xl text-green-500 mx-auto" />
            <h3 className="text-xl font-semibold mt-2">Highest Literacy District</h3>
            <p className="text-lg font-bold">Bangalore Urban (89%)</p>
          </div>
          <div className="bg-white text-black p-4 rounded-lg shadow-lg text-center">
            <FaGraduationCap className="text-4xl text-yellow-500 mx-auto" />
            <h3 className="text-xl font-semibold mt-2">Lowest Literacy District</h3>
            <p className="text-lg font-bold">Bagalkot (65%)</p>
          </div>
        </div>

        /* Comparison Table */
        <div className="bg-white text-black p-6 rounded-lg shadow-lg mt-6">
          <h3 className="text-2xl font-semibold">📊 Literacy Rates by District</h3>
          <table className="w-full mt-4 border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">District</th>
                <th className="border p-2">Literacy Rate</th>
              </tr>
            </thead>
            <tbody>
              {literacyData.map((item, index) => (
                <tr key={index} className="border">
                  <td className="border p-2">{item.district}</td>
                  <td className="border p-2">{item.literacyRate}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        /* Literacy Chart */
        <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-6 rounded-lg shadow-lg mt-6">
          <h3 className="text-2xl font-semibold">📈 Literacy Rates by District</h3>
          <LiteracyChart literacyData={literacyData} />
        </div>

        {/* Challenges */}
        <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-6 rounded-lg shadow-lg mt-6">
          <h3 className="text-2xl font-semibold">⚠️ Challenges Affecting Literacy</h3>
          <ul className="list-disc pl-6 mt-2">
            <li>📉 Economic Barriers & Poverty</li>
            <li>👩‍🎓 Gender Inequality in Education</li>
            <li>🏫 Lack of Schools & Infrastructure</li>
            <li>📖 Traditional vs. Modern Education Balance</li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-6 rounded-lg shadow-lg mt-6">
          <h3 className="text-2xl font-semibold">✅ How to Improve Literacy Rates?</h3>
          <ul className="list-disc pl-6 mt-2">
            <li>📚 Free & Affordable Education Expansion</li>
            <li>🎓 Scholarships & Financial Assistance</li>
            <li>📡 Digital Learning & Technology Integration</li>
            <li>👩‍🏫 Encouraging Female Education</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default KarnatakaStats;
