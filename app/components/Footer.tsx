"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-secondary py-10 mt-20 border-t border-gray-700"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        {/* Social Icons */}
        <div className="flex justify-center gap-8 mb-6">
          <a
            href="https://github.com/iamsanka"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textMain hover:text-accent transition text-3xl"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sand0504/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textMain hover:text-accent transition text-3xl"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=iamsankadesilva@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textMain hover:text-accent transition text-3xl"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.instagram.com/capturedbysan_d?igsh=NTF5YWp5bWF2MHpp&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textMain hover:text-accent transition text-3xl"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-textSub text-sm">
          © {new Date().getFullYear()} SanD — All Rights Reserved
        </p>
      </motion.div>
    </footer>
  );
}
