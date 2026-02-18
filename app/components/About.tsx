"use client";

import { motion } from "framer-motion";
import { FaCode, FaServer, FaCloud, FaShieldAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiNextdotjs,
  SiReact,
} from "react-icons/si";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10 text-center"
      >
        About Me
      </motion.h2>

      {/* Intro */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-textSub text-lg leading-relaxed max-w-3xl mx-auto text-justify"
      >
        I’m a full‑stack developer with over five years of experience building
        production‑grade systems across banking, fintech, and modern web
        platforms. I specialize in React, Next.js, Node.js, Prisma, PostgreSQL,
        and secure system architecture. I enjoy solving complex problems,
        designing scalable systems, and delivering polished user experiences.
      </motion.p>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
        <Skill icon={<SiJavascript size={40} />} label="JavaScript" />
        <Skill icon={<SiReact size={40} />} label="React" />
        <Skill icon={<SiNextdotjs size={40} />} label="Next.js" />
        <Skill icon={<FaServer size={40} />} label="Backend" />
        <Skill icon={<SiPostgresql size={40} />} label="PostgreSQL" />
        <Skill icon={<SiMongodb size={40} />} label="MongoDB" />
        <Skill icon={<FaCloud size={40} />} label="Cloud" />
        <Skill icon={<FaShieldAlt size={40} />} label="Security" />
      </div>
      {/**
      {/* Timeline Section *
      <div className="mt-20">
        <h3 className="text-3xl font-semibold mb-8 text-center">
          Experience & Education
        </h3>
        
        <div className="space-y-10">
          {/* Work Experience *
          <TimelineItem
            title="Full Stack Developer — Taprobane Entertainment Oy"
            date="2025 — Present"
            description="Developing cinematic websites, full ticketing systems, secure admin dashboards, and automated workflows using Next.js, Prisma, PostgreSQL, Stripe, and AWS."
          />

          <TimelineItem
            title="React Developer — Katch, Germany"
            date="2025"
            description="Built data‑intensive front‑end applications, integrated REST APIs, optimized performance, and implemented secure coding practices."
          />

          <TimelineItem
            title="Software Engineer — Sampath Bank PLC"
            date="2019 — 2022"
            description="Developed internal systems, automated workflows, built APIs, optimized data pipelines, and ensured security compliance."
          />

          {/* Education *
          <TimelineItem
            title="Bachelor of Engineering in ICT — JAMK University, Finland"
            date="2022 — Present"
            description="Focused on software development, cybersecurity, data analytics, and API engineering."
          />

          <TimelineItem
            title="British Computer Society — BIT"
            date="2020 — 2021"
            description="Completed foundational IT and software engineering modules."
          />
        </div>
      </div> */}
    </section>
  );
}

/* Skill Component */
function Skill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center space-y-2"
    >
      <div className="text-accent">{icon}</div>
      <p className="text-textMain font-medium">{label}</p>
    </motion.div>
  );
}

/* Timeline Component */
function TimelineItem({
  title,
  date,
  description,
}: {
  title: string;
  date: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="border-l-4 border-accent pl-6"
    >
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="text-textSub text-sm mb-2">{date}</p>
      <p className="text-textSub">{description}</p>
    </motion.div>
  );
}
