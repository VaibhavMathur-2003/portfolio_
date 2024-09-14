"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface Props{
  title: string,
  description: string,
  image: string
}

export default function ThreeDCardDemo({title, description, image }:Props) {
  return (
    <CardContainer className="inter-var w-full">
    <CardBody className="bg-gray-50 hover:bg-[#073249] cursor-pointer relative group/card  bg-gray-900  rounded-xl border shadow-[#56b6ff] shadow-lg md:scale-125  md:my-20 mb-20 text-white border-black/[0.1] w-full h-auto rounded-xl p-6 pb-10 border  ">
      <CardItem
        translateZ="50"
        className="text-xl font-bold text-white"
      >
       {title}
      </CardItem>
      <CardItem
        as="p"
        translateZ="60"
        className="text-gray-300 text-xs  mt-2"
      >
        {description}
      </CardItem>
      <CardItem translateZ="100" className="w-full mt-4">
        <Image
          src={image}
          height="1000"
          width="1000"
          className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </CardItem>
      
    </CardBody>
  </CardContainer>
  );
}
