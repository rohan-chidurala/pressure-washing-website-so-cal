import React from 'react';
import '../styles/Navbar.css'; // Import CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="company-name">J's Pristine Pressure Washing</div>
      <div className="navbar-links">
        <button className="nav-button">Home</button>
        <button className="nav-button">Services</button>
        <button className="nav-button">About</button>
        <button className="nav-button">Projects</button>
        <button className="nav-button">Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
