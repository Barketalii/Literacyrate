import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "../components/Header";
import MapChart from "../components/MapChart";
import CountryComparison from "../components/CountryComparison";

const Home = () => {
  const navigate = useNavigate();
  const mockData = [
    { district: "Bangalore", literacyRate: 89, lat: 12.9716, lng: 77.5946 },
    { district: "Mysore", literacyRate: 78, lat: 12.2958, lng: 76.6394 },
    { district: "Hubli", literacyRate: 80, lat: 15.3647, lng: 75.1240 },
    { district: "Mangalore", literacyRate: 86, lat: 12.9141, lng: 74.8560 },
    { district: "Belgaum", literacyRate: 76, lat: 15.8497, lng: 74.4977 }
  ];

  const currentNews = [
    "Karnataka launches new literacy programs for rural areas",
    "Education awareness campaign to increase Muslim literacy in Karnataka",
    "Free night schools initiated for underprivileged students"
  ];

  return (
    <div>
     
      <section className="p-6 bg-gradient-to-r from-green-300 to-blue-300">
        <h2 className="text-3xl font-bold mb-4 text-center text-white">Karnataka Muslim Literacy Overview</h2>
        <MapChart literacyData={mockData} />
        <h3 className="text-xl font-semibold mt-6 text-white">Current News</h3>
        <ul className="bg-white p-4 rounded-md shadow-md">
          {currentNews.map((news, index) => (
            <li key={index} className="p-2 border-b last:border-b-0">{news}</li>
          ))}
        </ul>
        
      </section>
    </div>
  );
};

export default Home;
