"use client";
import Button from "./ui/Button";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "Taprobane Entertainment",
      description:
        "A cinematic, interactive brand website for Taprobane Entertainment featuring immersive animations, smooth scroll-triggered transitions, modular SCSS architecture, and a scalable React component system deployed with Netlify and Cloudflare for global performance.",
      tech: ["Next.js", "Tailwind", "GSAP", "Framer", "Cloudflare"],
      link: "https://taprobane.fi",
    },
    {
      title: "Taprobane Entertainment — Ticketing System",
      description:
        "A production-grade, fully custom ticketing and checkout platform for Taprobane Entertainment featuring VIP logic, dynamic pricing, QR-based ticket validation, multi-method payments, and a cinematic mobile first experience built for real-world event operations.",
      tech: [
        "Next.js",
        "Prisma",
        "PostgreSQL",
        "Tailwind",
        "Vercel",
        "Stripe",
        "Edenred",
        "Epassi",
        "QR",
      ],
      link: "https://tickets-taprobane.com/",
    },
    {
      title: "Mahagedara",
      description:
        "A modern, mobile-responsive catering website for Maha Gedara featuring an interactive menu with ingredient modals, an event gallery, and a seamless contact and booking system to bring authentic Sri Lankan cuisine to Finland’s digital audience.",
      tech: ["React"],
      link: "https://mahagedara.fi/",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Projects
      </motion.h2>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
            className="bg-secondary p-6 rounded-xl shadow-lg border border-gray-700 hover:border-accent transition"
          >
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>

            <p className="text-textSub mb-4 text-justify">
              {project.description}
            </p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-primary border border-gray-700 rounded-full text-textSub"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* View Project Button */}
            <Button
              as="a"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6"
            >
              View Project
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
