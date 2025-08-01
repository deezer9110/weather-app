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
      <div className="nav-left">
        <div className="nav-brand">
          <h2>
            <Link to="/">WEATHER APP</Link>
          </h2>
        </div>
        <div className="nav-location">
          <h4>DAY, yyyy/mm/dd</h4>
          <h2>LONDON, UK</h2>
        </div>
      </div>
      <div className="nav-right">
        <Link to="/" className="nav-link">
          HOME
        </Link>
        <Link to="/savedlocations" className="nav-link">
          SAVED LOCATIONS
        </Link>
        <form onSubmit={handleSearch} className="nav-link">
          <input
            type="text"
            placeholder="SEARCH..."
            className="nav-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="nav-search-button">
            SEARCH
          </button>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
