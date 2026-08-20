import React from 'react';
import { Link } from 'react-router-dom';

// Task 2: Navigation Component using React Router Link
const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>MedCare Hospital</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/booking">Book Appointment</Link>
      </div>
    </nav>
  );
};

export default Navbar;
