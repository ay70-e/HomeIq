import React from 'react';
import '../style/SearchBar.css';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder=" Search for a service ..."
        value={value}
        onChange={onChange}
        className="search-input"
      />
        <img src="/icons/search.png" alt="Search" className="search-icon" />
    </div>
  );
};

export default SearchBar;