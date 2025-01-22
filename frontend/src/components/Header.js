import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="p-4 bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Towing and Recovery</h1>
        <nav>
          <Link to="/" className="px-4">Home</Link>
          <Link to="/services" className="px-4">Services</Link>
          <Link to="/contact" className="px-4">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
