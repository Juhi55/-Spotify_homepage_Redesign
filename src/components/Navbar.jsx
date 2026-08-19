import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="#" className="logo">
          Spotify
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <a href="#discover">Discover</a>
          <a href="#showcase">Experience</a>
          <a href="#how-it-works">How it works</a>
        </div>

        {/* Desktop CTA */}
        <a href="#player" className="nav-button">
          Start listening
        </a>

        {/* Mobile Menu Button */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#discover" onClick={() => setMenuOpen(false)}>
            Discover
          </a>

          <a href="#showcase" onClick={() => setMenuOpen(false)}>
            Experience
          </a>

          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
            How it works
          </a>

          <a
            href="#player"
            className="mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Start listening
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;