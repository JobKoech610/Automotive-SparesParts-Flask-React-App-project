import React from 'react';

const Search = ({ searchTerm, onSearchChange }) => {
  const handleInputChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
