"use client";
import React, { useState } from "react";
import serviceNew from "@/assets/images/services/service_new_banner.png";
import Image from "next/image";

const NewServicePage = () => {
  const [formData, setFormData] = useState({
    serviceName: "",
    servicePrice: 0,
    brandName: "",
    serviceType: "",
    productDescription: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Confirmed:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="p-5">
      <div>
        <Image
          src={serviceNew}
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
                  <span className="label-text">Service Name</span>
                </label>
                <input
                  type="text"
                  name="serviceName"
                  className="input input-bordered w-full"
                  placeholder="Service Name"
                  value={formData.serviceName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Price</span>
                </label>
                <input
                  type="number"
                  name="servicePrice"
                  className="input input-bordered w-full"
                  placeholder="Service Price"
                  value={formData.servicePrice}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <input
                  type="text"
                  name="brandName"
                  className="input input-bordered w-full"
                  placeholder="Brand Name"
                  value={formData.brandName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Type</span>
                </label>
                <input
                  type="text"
                  name="serviceType"
                  className="input input-bordered w-full"
                  placeholder="Service Type"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Product Description</span>
              </label>
              <textarea
                name="productDescription"
                className="textarea textarea-bordered w-full"
                placeholder="Write your product description here..."
                value={formData.productDescription}
                onChange={handleChange}
                rows={4}
                required
              />
            </div>

            <div className="mt-6">
              <button className="btn btn-primary w-full border-none">
                Submit New Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewServicePage;
