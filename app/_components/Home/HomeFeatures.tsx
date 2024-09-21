import React from "react";
import icon1 from "@/assets/icons/group.svg";
import icon2 from "@/assets/icons/watch.svg";
import icon3 from "@/assets/icons/person.svg";
import icon4 from "@/assets/icons/Wrench.svg";
import icon5 from "@/assets/icons/check.svg";
import icon6 from "@/assets/icons/delivery.svg";
import Image from "next/image";
const features = [
  {
    id: 1,
    title: "Expert Team",
    icon: icon1,
  },
  {
    id: 2,
    title: "Timely Delivery",
    icon: icon2,
  },
  {
    id: 3,
    title: "24/7 Support",
    icon: icon3,
  },
  {
    id: 4,
    title: "Best Equipment",
    icon: icon4,
  },
  {
    id: 5,
    title: "100% Guarantee",
    icon: icon5,
  },
  {
    id: 6,
    title: "Fast Delivery",
    icon: icon6,
  },
];

const HomeFeatures = () => {
  return (
    <div className="p-5">
      <div className="text-center w-full mx-auto md:w-1/2">
        <h5 className="text-base text-primary font-semibold">Core Features</h5>
        <h1 className="text-2xl md:text-4xl my-2 font-bold">Why Choose Us</h1>
        <p className="text-sm capitalize ">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-12 gap-6 my-6 p-2">
        {features.map((feature, index) => (
          <div
            key={index}
            className="col-span-6 border rounded-md px-3 py-8 sm:col-span-4 lg:col-span-2 hover:bg-primary hover:text-white"
          >
            <div className="flex gap-2 flex-col items-center justify-center mt-2">
              <Image
                src={feature.icon}
                alt={feature.title}
                className="w-10 h-10"
              />
              <h3 className="text-lg font-bold">{feature.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFeatures;
