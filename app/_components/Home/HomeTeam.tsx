"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ImGoogle2 } from "react-icons/im";
import { FaYoutube } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

import teamImage1 from "@/assets/images/team/1.jpg";
import teamImage2 from "@/assets/images/team/2.jpg";
import teamImage3 from "@/assets/images/team/3.jpg";
const carouselItems = [
  {
    id: 1,
    image: teamImage1,
    name: "Abul Bashar Atiq",
    title: "Engine Expert",
  },
  {
    id: 2,
    image: teamImage2,
    name: "Atiqur Rahman",
    title: "Technician",
  },
  {
    id: 3,
    image: teamImage3,
    name: "Rony Islam",
    title: "Driver",
  },
  {
    id: 4,
    image: teamImage3,
    name: "Rakibul Islam",
    title: "Technician",
  },
  {
    id: 5,
    image: teamImage2,
    name: "Asif Rahman",
    title: "Technician",
  },
  {
    id: 6,
    image: teamImage1,
    name: "Hafizul Islam",
    title: "Engine Expert",
  },
];

const HomeTeam = () => {
  const [activeItem, setActiveItem] = useState(1);

  const handleRightClick = (id: number) => {
    if (id <= 2) {
      setActiveItem(activeItem + 4);
    } else if (id <= 5) {
      setActiveItem(activeItem + 1);
    }
  };

  const handleLeftClick = (id: number) => {
    if (id >= 5) {
      setActiveItem(activeItem - 4);
    } else if (id > 1) {
      setActiveItem(activeItem - 1);
    }
  };

  return (
    <div>
      <div className="text-center w-full mx-auto md:w-1/2">
        <h4 className="text-primary font-semibold">Team</h4>
        <h1 className="text-2xl md:text-4xl my-2 font-bold">Meet Our Team</h1>
        <p className="text-sm">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="relative">
        <div className="carousel w-full carousel-center rounded-box space-x-3 p-4">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              id={`teamSlide${item.id}`}
              className="carousel-item flex flex-col items-center text-center border rounded-md p-3"
            >
              <Image
                src={item.image}
                alt={item.title}
                style={{
                  height: "250px",
                  width: "300px",
                }}
              />
              <div>
                <h3 className="text-xl font-bold">{item.name}</h3>
                <h4 className="text-base font-semibold">{item.title}</h4>
                <div className="flex gap-2 items-center justify-center mt-2">
                  <ImGoogle2 size={27} className="text-green-500" />
                  <FaYoutube size={35} className="text-red-500" />
                  <FaSquareFacebook size={30} className="text-blue-500" />
                  <FaSquareXTwitter size={30} className="text-pink-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <a
          href={`#teamSlide${activeItem}`}
          className="btn btn-circle absolute left-0 top-1/3 text-black"
          onClick={() => handleLeftClick(activeItem)}
        >
          ❮
        </a>
        <a
          href={`#teamSlide${activeItem}`}
          className="btn btn-circle  btn-primary absolute right-3 top-1/3"
          onClick={() => handleRightClick(activeItem)}
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default HomeTeam;
