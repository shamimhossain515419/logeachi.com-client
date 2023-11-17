// src/SearchBar.js

import { FaSearch } from 'react-icons/fa';
import './search.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for products..."
        className="search-input"
      />
      <button className="search-button">
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchBar;
