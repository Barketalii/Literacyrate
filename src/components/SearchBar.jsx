
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center mb-4">
      <input
        type="text"
        placeholder="Search country..."
        className="p-2 border rounded-l-md"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="bg-green-600 text-white p-2 rounded-r-md">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
