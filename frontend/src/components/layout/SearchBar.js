import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ className, setOnSearch }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/search?q=${search}`);
    setOnSearch(false);
    setSearch('');
  };
  return (
    <form id="searchBar" className={className} onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control me-1"
        placeholder="Search"
        value={search}
        onChange={e => setSearch(e.target.value)}
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
      />
      <i className="bi bi-search" onClick={handleSubmit}></i>
    </form>
  );
};

export default SearchBar;
