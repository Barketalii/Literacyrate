import React from "react";
import { useNavigate } from "react-router-dom"; 
import Header from "../components/Header";

const About = () => {
  const navigate = useNavigate(); 

  return (
    <div className="bg-gradient-to-r from-green-300 to-blue-300 text-white">

      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center">About This Project</h2>
        <p className="mt-4 text-lg text-black text-center">
          Education is a fundamental right, yet millions in Muslim-majority regions face barriers to literacy. 
          This project aims to shed light on Muslim literacy rates worldwide, highlighting challenges, progress, 
          and opportunities for educational growth.
        </p>

        <div className="bg-green-300 text-black p-6 rounded-lg shadow-lg mt-6">
          <h3 className="text-2xl font-semibold">📚 Why Focus on Muslim Literacy?</h3>
          <p className="mt-2">
            Globally, literacy rates have improved, but disparities remain in many Muslim-majority countries.
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>🌍 Global Literacy Rate: <b>86%</b></li>
            <li>📉 Muslim-Majority Countries’ Average: <b>~70%</b></li>
            <li>👩‍🎓 Female Literacy Gap: <b>15-30% lower than males</b></li>
          </ul>

          <button
            onClick={() => navigate("/why-literacy-matters")}
            className="mt-4 px-4 py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition"
          >
            Why Literacy Matters?
          </button>
        </div>

        <div className="bg-green-300 text-black p-6 rounded-lg shadow-lg mt-6">
          <h3 className="text-2xl font-semibold">🎯 Our Vision & Goals</h3>
          <p className="mt-2">
            We aim to provide accurate literacy statistics and raise awareness on educational reforms.
          </p>
        </div>

        <div className="bg-green-300 text-black p-6 rounded-lg shadow-lg mt-6 text-center">
          <h3 className="text-2xl font-semibold">💡 Join the Movement</h3>
          <p className="mt-2">
            Help us spread awareness and support education initiatives.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="mt-4 px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition"
          >
            Get Involved
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
