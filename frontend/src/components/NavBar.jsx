import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../css/NavBar.css";

function NavBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
  };

  return (
    <nav className="nav">
      <div className="nav-brand">
        <Link to="/">WEATHER APP</Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          HOME
        </Link>
        <Link to="/savedlocations" className="nav-link">
          SAVED LOCATIONS
        </Link>
        <form onSubmit={handleSearch} className="nav-link">
          <input
            type="text"
            placeholder="Search for location..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">SEARCH</button>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
