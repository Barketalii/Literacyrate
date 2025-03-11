// File: src/components/CountryComparison.js
import React, { useState } from "react";

const CountryComparison = ({ literacyData }) => {
  const [selectedCountries, setSelectedCountries] = useState([]);

  const handleSelect = (e) => {
    const country = e.target.value;
    if (!selectedCountries.includes(country)) {
      setSelectedCountries([...selectedCountries, country]);
    }
  };

  return (
    <div className="mb-6">
      <select onChange={handleSelect} className="p-2 border rounded">
        <option>Select a Country</option>
        {literacyData.map((country, index) => (
          <option key={index} value={country.country}>
            {country.country}
          </option>
        ))}
      </select>
      <div className="mt-4">
        {selectedCountries.map((countryName, index) => {
          const countryData = literacyData.find((c) => c.country === countryName);
          return (
            <div key={index} className="p-4 bg-white shadow rounded mb-2">
              <h3 className="font-bold">{countryData.country}</h3>
              <p>Literacy Rate: {countryData.literacyRate}%</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountryComparison;
