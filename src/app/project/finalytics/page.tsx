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
      "Faced with the challenge of helping users efficiently manage and analyze their stock wishlists, I developed a web application made for personalized stock tracking and analysis.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white">
        IDEA
      </div>
    ),
  },

  {
    title: "Features",
    description:
      "Enabled users to authenticate, create multiple wishlists, add stocks to their wishlists, and view detailed information about their wishlists, including how the stocks have performed over different time periods. This would give users a better way to track their investments and make more informed decisions.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white">
        FEATURES
      </div>
    ),
  },
  {
    title: "Tech Stack",
    description:
      "Next.js, PostgreSQL, GraphQL, Prisma, Tailwind CSS, NextAuth v5, TypeScript and ShadCN.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white bg-gradient-to-br from-purple-600 to-sky-400">
        TECH STACK
      </div>
    ),
  },
  {
    title: "Performance",
    description:
      "Achieved exceptional Google Lighthouse scores, earning a perfect 100 in both best practices and SEO, demonstrating its adherence to industry standards and optimization for search engines.",
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
                Finalytics
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/Landing.webp`}
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
    href="http://finalytics-six.vercel.app/"
    className="text-xl sm:text-2xl font-semibold hover:underline"
  >
    Visit Finalytics →
  </Link>

  {['/landing2024.webp', '/Dashboard.webp', '/performfin.png'].map((src, index) => (
    <Image
      key={index}
      height={1000}
      width={1000}
      alt={`Finalytics screenshot ${index + 1}`}
      src={src}
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl rounded-xl shadow-purple-500 shadow-lg hover:scale-105 transition-transform duration-300"
    />
  ))}
</div>
    </div>
  );
}
