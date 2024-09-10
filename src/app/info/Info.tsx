"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-base w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl font-medium mb-4 text-white")}>
              {item.title}
            </p>

            <div className="text-base text-gray-200">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover border-[#1e659c] shadow-lg shadow-[#56b6ff] border-2 hover:scale-105"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "About Me",
    description: (
      <>
        <div className="space-y-4">
          <p>
            <span className="font-bold text-2xl text-red-400">•</span> I&apos;ve always been
            fascinated by the limitless possibilities that technology offers. As
            a &nbsp;
            <span className="font-semibold">CSE BTech student at IIT Goa</span>,
            I&apos;ve had the opportunity to dive deep into the world of coding
            and software development.
          </p>
          <p>
            <span className="font-bold text-2xl text-yellow-400">•</span> From building dynamic
            web applications to mastering backend development, I&apos;ve had the
            chance to work on a variety of projects.
          </p>
          <p>
            <span className="font-bold text-2xl text-green-400">•</span> My experiences in
            startups have provided me with valuable insights into the real-world
            challenges and opportunities in the tech industry.
          </p>
          <p>
            <span className="font-bold text-2xl text-blue-400">•</span> Beyond the digital
            realm, I find inspiration in my hobbies. Whether it&apos;s strumming
            my guitar, playing football, or exploring new places, these
            experiences fuel my creativity.
          </p>
        </div>
      </>
    ),
    badge: "",
    image: "/aboutme.jpg",
  },
  {
    title: "Skills",
    description: (
      <>
        <div className="space-y-2">
          <ul className="list-disc list-inside space-y-1">
            <div>
            <span className="font-bold text-2xl text-red-400">•</span> <span className="font-semibold">React</span> – Building dynamic
              and interactive web applications.
            </div>
            <div>
            <span className="font-bold text-2xl text-yellow-400">•</span> <span className="font-semibold">Next.js</span> – Server-side
              rendering and static site generation.
            </div>
            <div>
            <span className="font-bold text-2xl text-green-400">•</span> <span className="font-semibold">Node.js</span> – Developing
              scalable backend services using JavaScript runtime.
            </div>
            <div>
            <span className="font-bold text-2xl text-blue-400">•</span> <span className="font-semibold">Express</span> – Building fast and
              lightweight web APIs and microservices.
            </div>
            <div>
            <span className="font-bold text-2xl text-red-400">•</span> <span className="font-semibold">Redux</span> – State management
              for JavaScript apps, enhancing data flow and consistency.
            </div>
            <div>
            <span className="font-bold text-2xl text-yellow-400">•</span> <span className="font-semibold">MongoDB</span> – NoSQL database
              management for handling unstructured data.
            </div>
            <div>
            <span className="font-bold text-2xl text-green-400">•</span> <span className="font-semibold">PostgreSQL</span> – Managing
              relational databases for complex data structures.
            </div>
            <div>
            <span className="font-bold text-2xl text-blue-400">•</span> <span className="font-semibold">Docker</span> – Containerizing
              applications for consistency across environments.
            </div>
            <div>
            <span className="font-bold text-2xl text-red-400">•</span> <span className="font-semibold">JavaScript</span> – Core language
              for building frontend and backend applications.
            </div>
            <div>
            <span className="font-bold text-2xl text-yellow-400">•</span> <span className="font-semibold">TypeScript</span> – Typed superset
              of JavaScript for enhancing code reliability.
            </div>
            <div>
            <span className="font-bold text-2xl text-green-400">•</span> <span className="font-semibold">Tailwind CSS</span> –
              Utility-first CSS framework for rapid UI development.
            </div>
            <div>
            <span className="font-bold text-2xl text-blue-400">•</span> <span className="font-semibold">Prisma</span> – Next-gen ORM for
              interacting with databases in a type-safe way.
            </div>
            <div>
            <span className="font-bold text-2xl text-red-400">•</span> <span className="font-semibold">GraphQL</span> – Query language
              for efficient data fetching and API interactions.
            </div>
            <div>
            <span className="font-bold text-2xl text-yellow-400">•</span> <span className="font-semibold">Git</span> – Version control for
              collaboration and project management.
            </div>
            <div>
            <span className="font-bold text-2xl text-green-400">•</span> <span className="font-semibold">Linux</span> – Proficiency in
              command-line usage, server management, and scripting.
            </div>
          </ul>
        </div>
      </>
    ),
    badge: "",
    image: "/skills.png",
  },
  {
    title: "Positions of Responsibility",
    description: (
      <>
        <div className="space-y-4">
          <div className="space-y-6">
            <div>
              
              <p className="font-semibold">
              <span className="font-bold text-xl text-red-400">•</span> 
              &nbsp;Google Developer Student Clubs, Web Lead
              </p>
              <p className="text-sm text-gray-200">
                Lead position of the web development team at GDSC in a team of
                15+ members.
              </p>
            </div>
            <div>
              <p className="font-semibold"><span className="font-bold text-xl text-yellow-400">•</span> Core Member of College Web Club</p>
              <p className="text-sm text-gray-200">
                Working in the web development team of IIT Goa for more than 2
                years.
              </p>
            </div>
            <div>
              <p className="font-semibold"><span className="font-bold text-xl text-green-400">•</span> Presenter/Speaker</p>
              <p className="text-sm text-gray-200">
                Conducted coding workshops for 100+ school students.
              </p>
            </div>
            <div>
              <p className="font-semibold"><span className="font-bold text-xl text-blue-400">•</span> 
                 &nbsp;Cepheus and Cultrang Event Manager
              </p>
              <p className="text-sm text-gray-200">
                Managed events in technical and cultural events of the College.
              </p>
            </div>
          </div>
        </div>
      </>
    ),
    badge: "",
    image: "/por.png",
  },
];