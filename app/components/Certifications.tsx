"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Certifications() {
  const certs = [
    {
      title: "AWS Educate Introduction to Cloud 101",
      issuer: "Amazon Web Services",
      logo: "/cert-logos/aws.png",
      link: "https://www.credly.com/badges/4221b52c-3d12-4d0c-9a37-f1f804a37a28/linked_in?t=s3uk2y",
    },
    {
      title: "AWS Educate Getting Started with Storage",
      issuer: "Amazon Web Services",
      logo: "/cert-logos/aws.png",
      link: "https://www.credly.com/badges/f2990424-2fbf-46af-b425-16c71b6ef1b4/linked_in?t=s3ujz7",
    },
    {
      title: "Describe Azure identity, access, and security",
      issuer: "Microsoft",
      logo: "/cert-logos/azure.png",
      link: "https://learn.microsoft.com/en-us/users/andrahennadisanka-6558/achievements/9napnk2u",
    },
    {
      title: "Describe Azure storage services",
      issuer: "Microsoft",
      logo: "/cert-logos/azure.png",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/AndraHennadiSANKA-6558/PT6NT3G4?sharingId=8B8820EF8B33E108",
    },
    {
      title: "Describe Azure compute and networking services",
      issuer: "Microsoft",
      logo: "/cert-logos/azure.png",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/AndraHennadiSANKA-6558/N7QTRR7F?sharingId=8B8820EF8B33E108",
    },
    {
      title: "Describe the core architectural components of Azure",
      issuer: "Microsoft",
      logo: "/cert-logos/azure.png",
      link: "https://learn.microsoft.com/api/achievements/share/en-us/AndraHennadiSANKA-6558/UF7PCQE3?sharingId=8B8820EF8B33E108",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6 max-w-6xl mx-auto">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Certifications
      </motion.h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {certs.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
            className="bg-secondary p-6 rounded-xl shadow-lg border border-gray-700 hover:border-accent transition block"
          >
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <Image
                src={cert.logo}
                alt={cert.issuer}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-center mb-2">
              {cert.title}
            </h3>

            {/* Issuer */}
            <p className="text-textSub text-center">{cert.issuer}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
