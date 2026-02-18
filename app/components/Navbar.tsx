"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
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
            <Link
              href="#certifications"
              className="hover:text-accent transition"
            >
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

          {/* Hamburger Button */}
          <button
            className="md:hidden text-textMain text-3xl transition-transform duration-300"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* BACKDROP OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-secondary/95 backdrop-blur-sm border-b border-gray-700 z-50 px-6 py-6 space-y-4 text-textMain transform transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <Link
          href="#home"
          onClick={() => setOpen(false)}
          className="block text-lg"
        >
          Home
        </Link>
        <Link
          href="#about"
          onClick={() => setOpen(false)}
          className="block text-lg"
        >
          About
        </Link>
        <Link
          href="#projects"
          onClick={() => setOpen(false)}
          className="block text-lg"
        >
          Projects
        </Link>
        <Link
          href="#certifications"
          onClick={() => setOpen(false)}
          className="block text-lg"
        >
          Certifications
        </Link>
        <Link
          href="#footer"
          onClick={() => setOpen(false)}
          className="block text-lg"
        >
          Contact
        </Link>
        <Link
          href="https://dev.to/iamsanka"
          target="_blank"
          onClick={() => setOpen(false)}
          className="block text-lg"
        >
          Blog
        </Link>
      </div>
    </>
  );
}
