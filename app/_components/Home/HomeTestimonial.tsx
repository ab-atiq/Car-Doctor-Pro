"use client";
import React, { useState } from "react";
import { ImGoogle2 } from "react-icons/im";
import { FaYoutube } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

import userImage1 from "@/assets/images/team/1.jpg";
import userImage2 from "@/assets/images/team/2.jpg";
import userImage3 from "@/assets/images/team/3.jpg";
import quote from "@/assets/icons/quote.png";
import Image from "next/image";

const testimonialItems = [
  {
    id: 1,
    image: userImage1,
    name: "Abul Bashar Atiq",
    title: "Engine Expert",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
  },
  {
    id: 2,
    image: userImage2,
    name: "Atiqur Rahman",
    title: "Technician",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
  },
  {
    id: 3,
    image: userImage3,
    name: "Rony Islam",
    title: "Driver",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
  },
  {
    id: 4,
    image: userImage3,
    name: "Rakibul Islam",
    title: "Technician",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
  },
  {
    id: 5,
    image: userImage2,
    name: "Asif Rahman",
    title: "Technician",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
  },
  {
    id: 6,
    image: userImage1,
    name: "Hafizul Islam",
    title: "Engine Expert",
    comment:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
  },
];

const HomeTestimonial = () => {
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
    <div className="p-5 mb-5">
      <div className="text-center w-full mx-auto md:w-1/2">
        <h4 className="text-primary font-semibold">Testimonial</h4>
        <h1 className="text-2xl md:text-4xl my-2 font-bold">
          What Customer Says
        </h1>
        <p className="text-sm">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="relative">
        <div className="carousel w-full carousel-center rounded-box space-x-3 p-4">
          {testimonialItems.map((item, index) => (
            <div
              key={index}
              id={`testimonialSlide${item.id}`}
              className="carousel-item flex flex-col justify-between border rounded-md p-6 w-72 h-64"
            >
              <div className="flex flex-row items-center justify-between gap-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                  }}
                />
                <div>
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <h4 className="text-sm font-semibold">{item.title}</h4>
                </div>
                <Image
                  src={quote}
                  alt="quote"
                  style={{
                    height: "50px",
                    width: "50px",
                  }}
                />
              </div>
              <p className="text-sm">{item.comment}</p>
              <div className="flex gap-2 items-start justify-start">
                <FaStar className="text-primary " />
                <FaStar className="text-primary " />
                <FaStar className="text-primary " />
                <FaStar className="text-primary " />
                <FaStar className="text-primary " />
              </div>
            </div>
          ))}
        </div>
        <a
          href={`#testimonialSlide${activeItem}`}
          className="btn btn-circle absolute -left-2 top-1/3 text-black"
          onClick={() => handleLeftClick(activeItem)}
        >
          ❮
        </a>
        <a
          href={`#testimonialSlide${activeItem}`}
          className="btn btn-circle  btn-primary absolute right-0 top-1/3"
          onClick={() => handleRightClick(activeItem)}
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default HomeTestimonial;
