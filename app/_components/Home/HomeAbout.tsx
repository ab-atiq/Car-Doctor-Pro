import Image from "next/image";
import React from "react";
import about_us_group from "@/assets/images/about_us/about_us_group.png";
const HomeAbout = () => {
  return (
    <div className="flex gap-10 mt-6 items-center flex-col md:flex-row p-10 md:p-6">
      <div className="w-full md:w-1/2">
        <Image
          src={about_us_group}
          alt="about us group"
          placeholder="blur"
          quality={100}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className="w-full md:w-1/2">
        <h4 className="text-primary">About Us</h4>
        <h1 className="text-2xl md:text-4xl my-3">
          We are qualified & of experience in this field
        </h1>
        <p className="text-sm">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <p className="text-sm mt-1">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
        <button className="btn btn-primary mt-3">Get More Info</button>
      </div>
    </div>
  );
};

export default HomeAbout;
