import React from "react";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import { FaGoogle } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="footer bg-black text-base-100 grid grid-cols-12 gap-6 p-10  md:grid-cols-5">
      <aside className="col-span-12 md:col-span-2 md:pr-20">
        <Image src={logo} width={60} height={50} alt="logo" />
        <p>
          Edwin Diaz is a software and web technologies engineer, a life coach
          trainer who is also a serial.
        </p>
        <div className="flex gap-2">
          <FaGoogle className="text-2xl" />
          <IoLogoLinkedin className="text-2xl" />
          <FaXTwitter className="text-2xl" />
          <FaSquareFacebook className="text-2xl" />
        </div>
      </aside>
      <nav className="col-span-12 md:col-span-1">
        <h6 className="footer-title">About</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Service</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav className="col-span-12 md:col-span-1">
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">Why Car Doctor</a>
        <a className="link link-hover">About</a>
      </nav>
      <nav className="col-span-12 md:col-span-1">
        <h6 className="footer-title">Support</h6>
        <a className="link link-hover">Support Center</a>
        <a className="link link-hover">Feedback</a>
        <a className="link link-hover">Accessability</a>
      </nav>
    </footer>
  );
};

export default Footer;
