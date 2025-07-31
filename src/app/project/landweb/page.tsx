"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import Link from "next/link";
import { LayoutDashboard, Code, Paintbrush } from "lucide-react";

const features = [
  {
    title: "Idea",
    description:
      "Landweb is a visual drag-and-drop website builder that helps users create responsive websites effortlessly using prebuilt, customizable components.",
    icon: LayoutDashboard,
    color: "from-cyan-500 to-emerald-500",
  },
  {
    title: "Features",
    description:
      "Choose between Tailwind, Bootstrap, or vanilla CSS. Edit styles, colors, borders, and components visually. Save multiple projects and export clean, usable code.",
    icon: Paintbrush,
    color: "from-orange-400 to-yellow-500",
  },
  {
    title: "Tech Stack",
    description:
      "Built with MongoDB, Express.js, React, Node.js, Tailwind CSS, JavaScript, and GrapesJS — optimized for flexibility and speed.",
    icon: Code,
    color: "from-purple-600 to-sky-400",
  },
];

export default function LandwebLanding() {
  return (
    <div className="flex flex-col text-white overflow-hidden bg-black">
      {/* Hero */}
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-center text-4xl md:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-emerald-400 via-sky-500 to-blue-600 text-transparent bg-clip-text">
              Landweb
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl mx-auto text-center">
              Build responsive websites visually. Export code instantly. No design-to-dev handoff needed.
            </p>
          </>
        }
      >
        <Image
          src="/landweb.png"
          alt="Landweb hero"
          height={720}
          width={1400}
          className="mx-auto rounded-3xl object-cover shadow-2xl border border-emerald-500/20"
          draggable={false}
        />
      </ContainerScroll>

      {/* Features Section */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-500 bg-clip-text text-transparent mb-4">
            Visual Power. Developer Freedom.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A drag-and-drop builder for developers and non-coders alike — style it your way and get the code.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                ></div>

                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Screenshots & CTA */}
      <section className="w-full py-24 px-6 sm:px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Link
              href="https://landweb.netlify.app/"
              className="inline-flex items-center gap-2 text-2xl font-semibold bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text hover:from-green-300 hover:to-emerald-400 transition-all duration-300 group"
            >
              Visit Landweb
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>

          <div className="grid gap-12 lg:gap-16">
            {["/landweb2.png", "/landweb3.png"].map((src, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <Image
                  height={1000}
                  width={1000}
                  alt={`Landweb screenshot ${index + 1}`}
                  src={src}
                  className="relative w-full max-w-6xl mx-auto rounded-3xl shadow-2xl shadow-black/50 hover:shadow-cyan-500/20 hover:scale-[1.02] transition-all duration-700 border border-gray-800/50"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
