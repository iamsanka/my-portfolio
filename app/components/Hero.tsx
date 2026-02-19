"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Button from "./ui/Button";

// Load particles ONLY on the client → prevents hydration errors
const Particles = dynamic(() => import("react-tsparticles"), {
  ssr: false,
});

export default function Hero() {
  const particlesInit = useCallback(async (engine: any) => {
    // Load the slim version (compatible with latest tsparticles)
    await loadSlim(engine);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 40 },
            size: { value: 2 },
            move: { enable: true, speed: 0.6 },
            opacity: { value: 0.4 },
            links: {
              enable: true,
              color: "#94A3B8",
              distance: 150,
              opacity: 0.3,
            },
          },
        }}
      />

      {/* Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Photo */}
        <div className="flex justify-center">
          <Image
            src="/my-photo.jpg"
            alt="Sanka De Silva"
            width={350}
            height={350}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hello, I'm <span className="text-accent">Sanka De Silva</span>
          </h1>

          <p className="text-xl text-textSub">
            Full‑Stack Developer | Data Analyst | Cyber Security Student
          </p>

          <p className="max-w-md text-textSub">
            I build scalable, secure, production‑grade digital systems with
            modern technologies like React, Next.js, Prisma, PostgreSQL, AWS,
            and more.
          </p>

          <Button as="a" href="/CV_Sanka_De_Silva.pdf" download>
            Download CV
          </Button>
        </div>
      </div>
    </section>
  );
}
