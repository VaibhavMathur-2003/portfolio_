"use client"
import React from "react";
import { TracingBeamDemo } from "./Info";


export default function TimelineDemo() {
 
  return (
    <div className="w-full bg-black">
        <div className=" p-8 flex max-w-6xl justify-center  mx-auto mt-20">
            <h1 className="md:text-5xl text-3xl font-semibold  text-white glowing-text md:leading-tight">
            I crash servers, eardrums, and into other players with equal enthusiasm.
            </h1>
            <style jsx>{`
              .glowing-text {
                text-shadow: 0 5px 10px rgba(0, 87, 255, 0.15),
                  0 -5px 10px rgba(255, 255, 255, 0.3),
                  0 -5px 25px rgba(255, 255, 255, 0.7);
              }
              .glowing-italic {
                text-shadow: 0 5px 15px rgba(0, 87, 255, 0.1),
                  0 -5px 15px rgba(255, 90, 0, 0.08),
                  0 0 30px rgba(255, 255, 255, 0.2);
                
              }
            `}</style>
          </div>
          
          <TracingBeamDemo/>
          
    </div>
  );
}
