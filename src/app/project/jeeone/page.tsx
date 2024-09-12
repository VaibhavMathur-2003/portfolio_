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
      "Made a website that helps people study for the JEE exam. On this website, people can do lots of practice questions and take exams that are like the real ones. This helps them get better at the exam and feel more confident.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white">
        IDEA
      </div>
    ),
  },
 
  {
    title: "Features",
    description:
      "Users can practice by solving lots of problems and taking mock JEE exams. We also have learning roadmaps that can help them study in the right way. They can see how many questions they’ve solved and what their exam scores are on their personal dashboard.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white">
        FEATURES
      </div>
    ),
  },
  {
    title: "Tech Stack",
    description:
      "Next.js 14, Prisma, Postgres, Tailwind CSS, NextAuth v5, TypeScript and ShadCN.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white bg-gradient-to-br from-purple-600 to-sky-400">
        TECH STACK
      </div>
    ),
  },
  {
    title: "Performance",
    description:
      "Achieved exceptional Google Lighthouse scores, earning a perfect 100 in both performance and SEO, demonstrating its exceptional speed and optimization for search engines.",
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
                JEEone
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/Landing1.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>

      <StickyScroll content={content} />
      <div className="flex flex-col w-full justify-center items-center space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20 mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4 sm:px-6 md:px-8">
  <Link
    href="https://jeeone.vercel.app/"
    className="text-xl sm:text-2xl font-semibold hover:underline"
  >
    Visit JEEone →
  </Link>

  {['/Landing2.webp', '/qslist.png', '/performjee.png'].map((src, index) => (
    <Image
      key={index}
      height={1000}
      width={1000}
      alt={`JEEone screenshot ${index + 1}`}
      src={src}
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl rounded-xl shadow-purple-500 shadow-lg hover:scale-105 transition-transform duration-300"
    />
  ))}
</div>
    </div>
  );
}
