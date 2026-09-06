import React from "react";

function Sidebar({ searchTerm, setSearchTerm, selectedLocation, setSelectedLocation }) {
  const locations = ["Location 1", "Location 2", "Location 3", "Location 4"];

  return (
    <div className="sidebar">
      <input
        type="text"
        className="search-bar"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul className="filter-list">
        {locations.map((loc, idx) => (
          <li key={idx} className="filter-item">
            <input
              type="checkbox"
              id={loc}
              checked={selectedLocation === loc}
              onChange={() =>
                setSelectedLocation(selectedLocation === loc ? "" : loc)
              }
            />
            <label htmlFor={loc}>{loc}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;