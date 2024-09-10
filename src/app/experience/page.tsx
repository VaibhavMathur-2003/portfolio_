"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "Spare Time",
      content: (
        <div>
          <div className="space-y-4 mb-10">
            <p className="font-bold text-2xl">Fun Experiences & Adventures:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-200 text-base">
              <div>
                <span className="font-bold text-2xl text-red-400">•</span>{" "}
                Mastered the art of guitar… or at least, I understood the songs
                I was playing! Had some epic jamming sessions.
              </div>
              <div>
                <span className="font-bold text-2xl text-yellow-400">•</span>{" "}
                Played in the football team during the sports fest. Did we win?
                Let’s just say we were very good at team bonding…
              </div>
              <div>
                <span className="font-bold text-2xl text-green-400">•</span>{" "}
                College fests were a blast—we partied hard, danced harder, and
                remembered about 60% of what actually happened.
              </div>
              <div>
                <span className="font-bold text-2xl text-blue-400">•</span>{" "}
                Explored Goa’s hidden gems and natural beauty, all while
                pretending to be a explorer.
              </div>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/guitar.webp"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-blue-400 shadow-xl"
            />
            <Image
              src="/football.jpeg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-blue-400 shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <div className="space-y-4 mb-10">
            <p className="font-bold text-2xl">Projects & Internship</p>
            <ul className="list-disc list-inside space-y-2  text-gray-200 text-base">
              <div>
                <span className="font-bold text-2xl text-red-400">•</span> This
                year, I built amazing, highly advanced, and high-performance
                projects using technologies like Next.js, GraphQL, and
                PostgreSQL.
              </div>
              <div>
                <span className="font-bold text-2xl text-yellow-400">•</span>{" "}
                Worked on website performance and got 100 in most of the Google
                Lighthouse parameters, including SEO, performance, and
                accessibility.
              </div>
              <div>
                <span className="font-bold text-2xl text-green-400">•</span> The
                projects even included a complete drag and drop webpage builder
                which enabled users to obtain the corresponding code for their
                designs.
              </div>
              <div>
                <span className="font-bold text-2xl text-blue-400">•</span>{" "}
                Developed 12+ responsive webpages using HTML, Tailwind CSS, and
                JavaScript for a Ed-Tech solutions startup.
              </div>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/Landing2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-blue-400 shadow-xl"
            />
            <Image
              src="/dashboard.webp"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-blue-400 shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <div className="space-y-4 mb-10 ">
            <p className="font-bold text-2xl">Cultrang & Cepheus Fests:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-200 text-base">
              <div>
                <span className="font-bold text-2xl text-red-400">•</span>{" "}
                Successfully developed couple of MERN stack websites for IIT
                Goa&apos;s cultural and technical fests, Cultrang and Cepheus.
              </div>
              <div>
                <span className="font-bold text-2xl text-yellow-400">•</span>{" "}
                The website efficiently handled registration for over 500 users,
                demonstrating its scalability and reliability.
              </div>
              <div>
                <span className="font-bold text-2xl text-green-400">•</span>{" "}
                Actively collaborated with the team, effectively resolving
                conflicts and contributing valuable skills to the codebase.
              </div>
              <div>
                <span className="font-bold text-2xl text-blue-400">•</span>{" "}
                Beyond website development, also played a crucial role in
                managing events and conducting workshops for both fests.
              </div>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/cultrang.webp"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-blue-400 shadow-xl"
            />
            <Image
              src="/cepheus.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-blue-400 shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <div className="space-y-4 mb-10">
            <p className="font-bold text-2xl">
              Got my first internship in a US-based startup.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-200 text-base">
              <div>
                <span className="font-bold text-2xl text-red-400">•</span>{" "}
                <span className="font-semibold">
                  Developed critical features
                </span>{" "}
                for a real estate platform using React, MySQL, Node.js, Redux,
                and TypeScript.
              </div>
              <div>
                <span className="font-bold text-2xl text-yellow-400">•</span>{" "}
                <span className="font-semibold">
                  Implemented essential functionalities
                </span>{" "}
                like property filtering, search, and detailed views.
              </div>
              <div>
                <span className="font-bold text-2xl text-green-400">•</span>{" "}
                <span className="font-semibold">
                  Created a responsive landing page
                </span>{" "}
                for seamless user experience across devices.
              </div>
              <div>
                <span className="font-bold text-2xl text-blue-400">•</span>{" "}
                <span className="font-semibold">
                  Collaborated closely with clients
                </span>{" "}
                to understand their needs and deliver effective solutions.
              </div>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/trypending.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-blue-400 shadow-xl"
            />
            <Image
              src="/trypending2.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-blue-400 shadow-xl"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full bbg-black">
      <div className="bbg-black p-8 flex max-w-7xl mx-auto mt-20">
        <h1 className="md:text-5xl text-3xl font-semibold text-white glowing-text md:leading-snug">
          I&apos;ve been coding for the past 2 years.
          <br /> Here&apos;s a timeline of my journey.
        </h1>
        <style jsx>{`
          .glowing-text {
            text-shadow: 0 5px 10px rgba(0, 87, 255, 0.15),
              0 -5px 10px rgba(255, 255, 255, 0.4),
              0 -5px 25px rgba(255, 255, 255, 0.5);
          }
          .glowing-italic {
            text-shadow: 0 5px 15px rgba(0, 87, 255, 0.1),
              0 -5px 15px rgba(255, 90, 0, 0.08),
              0 0 30px rgba(255, 255, 255, 0.2);
          }
        `}</style>
      </div>
      <Timeline data={data.reverse()} />
    </div>
  );
}
