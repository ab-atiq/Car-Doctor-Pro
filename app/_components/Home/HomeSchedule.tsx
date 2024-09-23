import Image from "next/image";
import React from "react";
import calendar_icon from "@/assets/icons/calendar_icon.png";
import phone_icon from "@/assets/icons/phone_icon.png";
import location_icon from "@/assets/icons/location_icon.png";

const HomeSchedule = () => {
  return (
    <div className="p-5 py-10 grid grid-cols-12 gap-6 bg-black text-base-100 rounded-md">
      <div className="flex gap-4 items-center justify-center col-span-12 md:col-span-6 lg:col-span-4">
        <div>
          <Image
            src={calendar_icon}
            alt="calendar"
            placeholder="blur"
            quality={100}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <h4 className="font-normal mb-1">We are open monday-friday</h4>
          <h2 className="font-bold text-2xl">7:00 AM - 11:00 PM</h2>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center col-span-12 md:col-span-6 lg:col-span-4">
        <div>
          <Image
            src={phone_icon}
            alt="calendar"
            placeholder="blur"
            quality={100}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <h4 className="font-normal mb-1">Have a question?</h4>
          <h2 className="font-bold text-2xl">+880-1729936790</h2>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center col-span-12 md:col-span-6 lg:col-span-4">
        <div>
          <Image
            src={location_icon}
            alt="calendar"
            quality={100}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <h4 className="font-normal mb-1">Need a repair? our address</h4>
          <h2 className="font-bold text-2xl">Liza Street, New York</h2>
        </div>
      </div>
    </div>
  );
};

export default HomeSchedule;
