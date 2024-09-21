import Image from "next/image";
import React from "react";
import banner from "@/assets/images/services/service_banner.png";
import serviceVideo from "@/assets/images/services/service_video.png";
import serviceImage1 from "@/assets/images/home_banner/3.jpg";
import containerIcon from "@/assets/images/services/container_icon.png";
import logo from "@/assets/logo.svg";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const serviceTypes = [
  {
    id: 1,
    serviceType: "Instant Car Services",
    description:
      "It uses a dictionary of over 200 Latin words, combined with a model sentence structures.",
  },
  {
    id: 2,
    serviceType: "24/7 Support",
    description:
      "It uses a dictionary of over 200 Latin words, combined with a model sentence structures.",
  },
  {
    id: 3,
    serviceType: "Easy Customer Service",
    description:
      "It uses a dictionary of over 200 Latin words, combined with a model sentence structures.",
  },
  {
    id: 4,
    serviceType: "Quality Cost Service",
    description:
      "It uses a dictionary of over 200 Latin words, combined with a model sentence structures.",
  },
];

const serviceItems = [
  {
    id: 1,
    serviceName: "Full Car Repair",
  },
  {
    id: 2,
    serviceName: "Engine Repair",
  },
  {
    id: 3,
    serviceName: "Automatic Services",
  },
  {
    id: 4,
    serviceName: "Engine Oil Change",
  },
  {
    id: 5,
    serviceName: "Battery Change",
  },
];

const downloadItem = [
  {
    id: 1,
    downloadName: "Our Brochure",
  },
  {
    id: 2,
    downloadName: "Company Details",
  },
];

const SingleServicePage = ({ params }: { params: { id: number } }) => {
  return (
    <div className="p-5">
      <div>Single Service Page {params.id}</div>
      <div>
        <Image
          src={banner}
          alt="service banner"
          placeholder="blur"
          quality={100}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="grid grid-cols-12 mt-5 gap-4">
        <div className="col-span-8">
          <Image
            src={serviceImage1}
            alt="service banner"
            placeholder="blur"
            quality={100}
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <h1 className="text-xl md:text-2xl my-2 font-bold">
            Unique Car Engine Service
          </h1>
          <p className="text-sm">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there is not anything embarrassing hidden in the
            middle of text.{" "}
          </p>
          <div className="grid grid-cols-12 gap-3 my-2">
            {serviceTypes.map((serviceType, index) => (
              <div key={index} className="col-span-6 border rounded-md p-3">
                <div>
                  <h3 className="text-lg font-bold">
                    {serviceType.serviceType}
                  </h3>
                  <p className="text-sm">{serviceType.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there is not anything embarrassing hidden in the
            middle of text.{" "}
          </p>
          <h3>3 Simple Steps to Process</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there is not anything embarrassing hidden in the
            middle of text
          </p>
          <div className="grid grid-cols-12 gap-4 my-2">
            <div className="text-center col-span-4">
              <div className="w-12 h-12 mx-auto bg-red-500 rounded-full text-center text-white text-2xl font-bold pt-2 shadow-sm shadow-orange-900">
                {" "}
                1{" "}
              </div>
              <h3 className="text-lg font-bold">Step 1</h3>
              <p className="text-sm">
                It uses a dictionary of over 200 Latin words.
              </p>
            </div>
            <div className="text-center col-span-4">
              <div className="w-12 h-12 mx-auto bg-red-500 rounded-full text-center text-white text-2xl font-bold pt-2 shadow-sm shadow-orange-900">
                {" "}
                2{" "}
              </div>
              <h3 className="text-lg font-bold">Step 2</h3>
              <p className="text-sm">
                It uses a dictionary of over 200 Latin words.
              </p>
            </div>
            <div className="text-center col-span-4">
              <div className="w-12 h-12 mx-auto bg-red-500 rounded-full text-center text-white text-2xl font-bold pt-2 shadow-sm shadow-orange-900">
                {" "}
                3{" "}
              </div>
              <h3 className="text-lg font-bold">Step 3</h3>
              <p className="text-sm">
                It uses a dictionary of over 200 Latin words.
              </p>
            </div>
          </div>
          <div>
            <Image
              src={serviceVideo}
              alt="service banner"
              placeholder="blur"
              quality={100}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className="col-span-4">
          <div className="bg-gray-400 rounded-md p-4 flex flex-col gap-3">
            <h3 className="text-xl font-bold">Services</h3>
            {serviceItems.map((service, index) => (
              <button
                key={index}
                className="btn btn-primary btn-outline flex gap-2 w-full justify-between bg-white hover:text-white"
              >
                <p>{service.serviceName}</p>
                <FaArrowRight className="text-md" />
              </button>
            ))}
          </div>
          <div className="mt-4 bg-black text-white p-4 rounded-md flex flex-col gap-3">
            <h3 className="text-xl font-bold">Download</h3>
            {downloadItem.map((item) => (
              <button
                key={item.id}
                className="flex flex-row justify-between items-center gap-2 w-full"
              >
                <div className="flex flex-row gap-2">
                  <Image
                    src={containerIcon}
                    alt="download"
                    width={50}
                    height={50}
                  />
                  <div className="text-start">
                    <p className="text-lg font-bold">{item.downloadName}</p>
                    <p className="text-md font-normal">Download</p>
                  </div>
                </div>
                <div className="bg-primary p-4 rounded-sm">
                  <FaArrowRight className="text-lg" />
                </div>
              </button>
            ))}
          </div>
          <div className="mt-4">
            <div className="bg-black py-14 px-7 text-center rounded-md flex flex-col items-center ">
              <Image
                src={logo}
                alt="logo"
                style={{ width: "100px", height: "70px" }}
              />
              <h3 className="text-white text-2xl my-4">
                Need Help? We Are Here To Help You
              </h3>
              <div className="bg-white p-8 rounded-md relative">
                <h2 className="text-primary text-2xl font-bold">
                  Car doctor <span className="text-black ">special</span>{" "}
                </h2>
                <h3 className="text-xl font-semibold text-gray-700 my-2">
                  Save us to <span className="text-primary">60% off</span>
                </h3>
                <button className="btn btn-primary absolute left-10 right-10 mt-2">
                  Get A Quote
                </button>
              </div>
            </div>
            <div className="mt-4">
              <h1 className="text-3xl font-bold">Price $250.00</h1>
              <button className="btn btn-primary mt-4 w-full text-xl">
                <Link href="/checkout">Proceed Checkout</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleServicePage;
