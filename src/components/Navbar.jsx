import React, { useState, useEffect } from "react";
import "../style/navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">MotionVista</div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#hero" onClick={() => setIsOpen(false)}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        </li>
        <li>
          <a href="#works" onClick={() => setIsOpen(false)}>Our Works</a>
        </li>
        <li>
          <a href="#behind" onClick={() => setIsOpen(false)}>Behind The Scenes</a>
        </li>
        <li>
          <a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </li>
      </ul>
      <div
        className={`burger ${isOpen ? "toggle" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
