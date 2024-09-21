import Image from "next/image";
import React from "react";
import serviceImage1 from "@/assets/images/services/1.jpg";
import serviceImage2 from "@/assets/images/services/2.jpg";
import serviceImage3 from "@/assets/images/services/3.jpg";
import serviceImage4 from "@/assets/images/services/4.jpg";
import serviceImage5 from "@/assets/images/services/5.jpg";
import serviceImage6 from "@/assets/images/services/6.jpg";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Electrical System",
    price: 20.0,
    image: serviceImage1,
  },
  {
    id: 2,
    title: "Engine Diagnosis",
    price: 30.0,
    image: serviceImage2,
  },
  {
    id: 3,
    title: "Battery Diagnosis",
    price: 40.0,
    image: serviceImage3,
  },
  {
    id: 4,
    title: "Auto Car Repair",
    price: 50.0,
    image: serviceImage4,
  },
  {
    id: 5,
    title: "Car Wash",
    price: 60.0,
    image: serviceImage5,
  },
  {
    id: 6,
    title: "Car Cleaning",
    price: 70.0,
    image: serviceImage6,
  },
];

const ServicesComponent = () => {
  return (
    <div className="p-5">
      <div className="grid grid-cols-12 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="col-span-12 border rounded-md p-3 sm:col-span-6 lg:col-span-4"
          >
            <Image
              src={service.image}
              alt="service1"
              placeholder="blur"
              quality={100}
              style={{ width: "100%", height: "250px", borderRadius: "10px" }}
            />
            <h3 className="text-xl mt-2 font-bold">{service.title}</h3>
            <div className="flex gap-2 items-center justify-between mt-2">
              <p className="text-base font-semibold text-primary">
                Price: ${service.price}
              </p>
              <div>
                <Link href={`/services/${service.id}`}>
                  <FaArrowRight className="text-primary text-lg" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-outline btn-primary mt-6 flex mx-auto">
        <Link href="/services/new">Add New Service</Link>
      </button>
    </div>
  );
};

export default ServicesComponent;
