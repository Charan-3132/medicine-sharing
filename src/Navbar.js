import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-700">💊 MedShare</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
        <Link to="/donate" className="text-gray-700 hover:text-blue-500">Donate</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
