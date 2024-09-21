"use client";
import React, { useState } from "react";
import banner from "@/assets/images/checkout/checkout_banner.png";
import Image from "next/image";

const OrderFormPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order Confirmed:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="p-5">
      <h1>Checkout Page</h1>
      <div>
        <Image
          src={banner}
          alt="service banner"
          placeholder="blur"
          quality={100}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div>
        <div className="flex justify-center items-center bg-gray-100 mt-5 rounded-md p-4 md:p-10">
          <form onSubmit={handleSubmit} className="w-full max-w-screen-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="input input-bordered w-full"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="input input-bordered w-full"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Phone</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="input input-bordered w-full"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Your Message</span>
              </label>
              <textarea
                name="message"
                className="textarea textarea-bordered w-full"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
              />
            </div>

            <div className="mt-6">
              <button className="btn btn-primary w-full border-none">
                Order Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderFormPage;
