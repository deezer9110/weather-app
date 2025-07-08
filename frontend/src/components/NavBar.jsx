import { Link } from "react-router-dom"

function NavBar() {
    return <nav className="navbar">
        <div className="nav-main">
            <Link to="/">Main Page</Link>
        </div>
        <div className="nav-links">
            <Link to="/" className="link">Home</Link>
            <Link to="/search" className="link">Search</Link>
            <Link to="/saved">Saved Locations</Link>
        </div>
    </nav>
}

export default NavBar