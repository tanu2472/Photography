import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className=" sticky top-0 bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Branding */}
          <div className="shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-200 hover:text-blue-300 transition">
             <img src="src/assets/camera.png" alt="LensAura Logo" className="w-10 h-10 mr-2 inline-block" /> LensAura PhotoGraphy
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-1">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition">
              Home
            </Link>
            <Link to="/gallery" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition">
              Gallery
            </Link>
            <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition">
              About
            </Link>
            <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 transition"
              aria-label="Toggle menu"
            >
              <svg
                className={`h-6 w-6 transition-transform ${isOpen ? 'rotate-90' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md hover:bg-gray-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/gallery"
              className="block px-3 py-2 rounded-md hover:bg-gray-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md hover:bg-gray-700 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md hover:bg-gray-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar;
