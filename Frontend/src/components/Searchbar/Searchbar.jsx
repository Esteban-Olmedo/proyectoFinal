import React, { useState } from "react";


const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form  onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        
        placeholder="Buscar..."
      />
      <button type="submit" >
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;