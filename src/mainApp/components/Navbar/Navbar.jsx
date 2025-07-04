import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-20 border-b border-white text-white bg-black fixed top-0 z-50">
      <div className="flex justify-between items-center px-6 h-full max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="src/mainApp/assets/devimage.png"
            alt="Logo"
            className="w-12 h-12 sm:w-16 sm:h-16"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-sans text-amber-100">
          {["Home", "About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-yellow-300 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6 text-yellow-300" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-yellow-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-black text-white px-6 py-4 space-y-4 border-t border-gray-700">
          {["Home", "About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-yellow-300 transition-colors"
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
