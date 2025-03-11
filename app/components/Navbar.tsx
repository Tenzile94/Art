// components/Navbar.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold text-gray-800 cursor-pointer">
            MagyarTop
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="#art-collection"
            className="text-gray-700 hover:text-gray-900 font-bold"
          >
            Művészeti Gyűjtemény
          </Link>
          <Link
            href="#artworks"
            className="text-gray-700 hover:text-gray-900 font-bold"
          >
            Műalkotások
          </Link>
          <Link
            href="#art-experience"
            className="text-gray-700 hover:text-gray-900 font-bold"
          >
            Művészeti élmény
          </Link>
        </div>

        {/* Contact Button */}
        <Link href="#contact">
          <button className="hidden md:block bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-700">
            KAPCSOLATFELVÉTEL
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 py-3 space-y-3">
            <Link
              href="#art-collection"
              className="block text-gray-700  font-bold"
            >
              Művészeti Gyűjtemény.
            </Link>
            <Link href="#artworks" className="block text-gray-700 font-bold">
              Műalkotások
            </Link>
            <Link
              href="#art-experience"
              className="block text-gray-700 font-bold"
            >
              Művészeti élmény
            </Link>

            <Link href="#contact">
              <button className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
                KAPCSOLATFELVÉTEL
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
