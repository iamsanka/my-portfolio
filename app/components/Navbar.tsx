"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-secondary/95 backdrop-blur-sm border-b border-gray-700 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-textMain">
          SanD
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-textMain">
          <Link href="#home" className="hover:text-accent transition">
            Home
          </Link>
          <Link href="#about" className="hover:text-accent transition">
            About
          </Link>
          <Link href="#projects" className="hover:text-accent transition">
            Projects
          </Link>
          <Link href="#certifications" className="hover:text-accent transition">
            Certifications
          </Link>
          <Link href="#footer" className="hover:text-accent transition">
            Contact
          </Link>
          <Link
            href="https://dev.to/iamsanka"
            target="_blank"
            className="hover:text-accent transition"
          >
            Blog
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-textMain"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-primary px-6 pb-4 space-y-4 text-textMain">
          <Link href="#home" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="#about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="#projects" onClick={() => setOpen(false)}>
            Projects
          </Link>
          <Link href="#certifications" onClick={() => setOpen(false)}>
            Certifications
          </Link>
          <Link href="#contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
