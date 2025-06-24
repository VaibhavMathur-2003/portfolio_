"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Link from "next/link";

const content = [
  {
    title: "Idea",
    description:
      "Driven by the need for personalized and accessible health management, I built an AI-powered platform that delivers custom workout and meal plans based on user preferences, goals, and constraints.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white">
        IDEA
      </div>
    ),
  },
  {
    title: "Features",
    description:
      "Users can chat with an intelligent health assistant powered by GROQ LLM APIs, receive adaptive fitness and meal plans. State persistence ensures a seamless experience across sessions.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white">
        FEATURES
      </div>
    ),
  },
  {
    title: "Tech Stack",
    description:
      "Next.js 14+, Node, MongoDB, GROQ LLM APIs, Tailwind CSS, TypeScript, ShadCN for UI, and Vercel for deployment.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-br from-purple-600 to-sky-400">
        TECH STACK
      </div>
    ),
  },
  {
    title: "Performance",
    description:
      "Optimized for speed and accessibility with a Lighthouse score of 95+ across performance and SEO. Leveraged image optimization, prefetching, and SSR for responsive UX.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white">
        PERFORMANCE
      </div>
    ),
  },
];

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col text-white overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Change
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/change_1.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl h-full object-contain"
          draggable={false}
        />
      </ContainerScroll>

      <StickyScroll content={content} />

      <div className="flex flex-col w-full justify-center items-center space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20 mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4 sm:px-6 md:px-8">
        <Link
          href="https://uchange.vercel.app/"
          className="text-xl sm:text-2xl font-semibold hover:underline"
        >
          Visit Wellness AI →
        </Link>

        {[
        "/change_3.png",
        "/change_4.png",
          "/change_2.png"
        ].map((src, index) => (
          <Image
            key={index}
            height={1000}
            width={1000}
            alt={`Wellness AI screenshot ${index + 1}`}
            src={src}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl rounded-xl shadow-emerald-500 shadow-lg hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
}
