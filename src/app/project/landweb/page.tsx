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
      "Created an intuitive website builder tool that empowers users to create responsive websites with ease by simply dragging and dropping pre-designed components.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white">
        IDEA
      </div>
    ),
  },
  {
    title: "Features",
    description:
      "You can choose to use Tailwind, Bootstrap, or just basic CSS to style your website. You can make and save as many websites as you want, and you can also get the code for your website. You can also change the colors, borders, and other things to make your website look exactly how you want it.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white">
        FEATURES
      </div>
    ),
  },
  {
    title: "Tech Stack",
    description:
      "MongoDB, Express, React, Node.js, Tailwind CSS, JavaScript, GrapesJS.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white bg-gradient-to-br from-purple-600 to-sky-400">
        <Image
          src="/landweb.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  
  // {
  //   title: "Running out of content",
  //   description:
  //     "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  //   content: (
  //     <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-white">
  //       Running out of content
  //     </div>
  //   ),
  // },
];

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col text-white overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Landweb
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/landweb.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl  h-full object-contain"
          draggable={false}
        />
      </ContainerScroll>

      <StickyScroll content={content} />
      <div className="flex flex-col w-full justify-center items-center space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20 mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4 sm:px-6 md:px-8">
  <Link
    href="https://landweb.netlify.app/"
    className="text-xl sm:text-2xl font-semibold hover:underline"
  >
    Visit Landweb →
  </Link>

  {['/landweb2.png', '/landweb3.png'].map((src, index) => (
    <Image
      key={index}
      height={1000}
      width={1000}
      alt={`Landweb screenshot ${index + 1}`}
      src={src}
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-4xl rounded-xl shadow-purple-500 shadow-lg hover:scale-105 transition-transform duration-300"
    />
  ))}
</div>
    </div>
  );
}
