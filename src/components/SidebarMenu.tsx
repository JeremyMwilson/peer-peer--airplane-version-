import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SidebarMenu.css";

const SidebarMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={`container ${isOpen ? "open" : ""}`}>
      <nav>
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <ul className={`menu ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/privateInsurance" onClick={closeMenu}>
              Private Insurnace
            </Link>
          </li>
          <li>
            <Link to="/faq" onClick={closeMenu}>
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/photoUpload" onClick={closeMenu}>
              Insurance Card
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="content">{children}</div>
    </div>
  );
};

export default SidebarMenu;
