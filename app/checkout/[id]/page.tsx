"use client";
import React, { useEffect, useState } from "react";
import banner from "@/assets/images/checkout/checkout_banner.png";
import Image from "next/image";
import { getServiceDetails } from "@/app/_components/Services/getServices";
import { useSession } from "next-auth/react";

const CheckoutPage = ({ params }: { params: { id: string } }) => {
  const { data } = useSession();
  const [service, setService] = useState({});
  const LoadService = async (id: string) => {
    const res = await getServiceDetails(id);
    setService(res);
  };

  useEffect(() => {
    LoadService(params.id);
  }, [params.id]);

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    email: "",
    price: 0,
    phone: "",
    address: "",
  });

  const handleChange = (e: {
    target: { name: string; value: string | number };
  }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("Order Confirmed:", formData);
    // Add your form submission logic here
  };

  console.log(service?.data?.price);

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
                  name="name"
                  className="input input-bordered w-full"
                  placeholder="FullName"
                  defaultValue={data?.user?.name ? data?.user?.name : ""}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  className="input input-bordered w-full"
                  placeholder="Last Name"
                  defaultValue={new Date().getDate()}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full"
                  placeholder="Email"
                  defaultValue={data?.user?.email ? data?.user?.email : ""}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  className="input input-bordered w-full"
                  placeholder="Price"
                  value={service?.data?.price}
                  // onChange={handleChange}
                  required
                  disabled
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  className="input input-bordered w-full"
                  placeholder="Your Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
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

export default CheckoutPage;
