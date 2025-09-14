import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ✅ import Link
import "../css/header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* Logo + Title */}
        <div className="header-left">
          <Link to="/" className="nav-link">
            <div className="logo">
              <img src="/logo.png" alt="arthubLogo" />
            </div>
            <h1>ArtHub</h1>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="header-nav">
          <Link to="/login" className="nav-link">
            <i className="bi bi-person-fill"></i>
            Login
          </Link>
        </nav>

        {/* Mobile Nav Button */}
        <button className="menu-btn">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
}
