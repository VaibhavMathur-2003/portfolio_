"use client";
import { BackgroundLines } from "@/components/ui/background-lines";
import ThreeDCardDemo from "@/components/WorkCard";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="w-full">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-4xl font-medium tracking-tight text-white md:text-7xl"
      >
        <BackgroundLines className="flex items-center justify-center w-full flex-col">
          <div className="bg-black p-8 flex justify-center items-center h-screen">
            <h1 className="md:text-7xl text-3xl font-bold text-white glowing-text leading-tight">
              Hi, I am Vaibhav <br /> A full stack developer.
              <p className="md:text-xl text-xs mt-8 text-center tracking-widest glowing-italic font-medium">
                {" "}
                React + NextJS + PostgreSQL + Node + GraphQL + MongoDB + Tailwind
              </p>
            </h1>
            <style jsx>{`
              .glowing-text {
                text-shadow: 0 5px 10px rgba(0, 87, 255, 0.15),
                  0 -5px 10px rgba(255, 255, 255, 0.3),
                  0 -5px 25px rgba(255, 255, 255, 0.5);
              }
              .glowing-italic {
                text-shadow: 0 5px 15px rgba(0, 87, 255, 0.1),
                  0 -5px 15px rgba(255, 90, 0, 0.08),
                  0 0 30px rgba(255, 255, 255, 0.2);
              }
            `}</style>
          </div>
        </BackgroundLines>
      </motion.h1>
      <Link href="/project/finalytics">
        <ThreeDCardDemo
          title="Finalytics"
          description="Stock wishlist analysis using Next.js, GraphQL, and PostgreSQL to track stocks."
          image="/Landing.webp"
        />
      </Link>
      <Link href="/project/jeeone">
        <ThreeDCardDemo
          title="JEEone"
          description="JEE Preparation Site using NextJs, Prisma, Postgres, Tailwind."
          image="/Landing1.webp"
        />
      </Link>
      <Link href="/project/landweb">
        <ThreeDCardDemo
          title="Landweb"
          description="JEE Preparation Site using NextJs, Prisma, Postgres, Tailwind."
          image="/landweb.webp"
        />
      </Link>

      <footer className="bg-black text-white py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/logo.jpg"
              alt="Logo"
              className="mb-4"
              width="100"
              height="100"
              style={{ aspectRatio: "100/100", objectFit: "cover" }}
            />
            <p className="text-center md:text-left">
              &copy; 2024 Vaibhav Mathur. All Rights Reserved.
            </p>
            <p className="text-center md:text-left text-muted-foreground mt-2">
              Make sure to check out my projects.
            </p>
          </div>
        </div>
        <div className="container mx-auto mt-8 text-center text-muted-foreground">
          Feel free to contact me through LinkedIn
        </div>
      </footer>
    </div>
  );
}
