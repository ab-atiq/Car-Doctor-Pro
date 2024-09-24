"use client";
import React, { useEffect, useState } from "react";
import banner from "@/assets/images/checkout/checkout_banner.png";
import Image from "next/image";
import { getServiceDetails } from "@/app/_components/Services/getServices";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const CheckoutPage = ({ params }: { params: { id: string } }) => {
  const { data } = useSession();
  const router = useRouter();
  const [service, setService] = useState({});
  const LoadService = async (id: string) => {
    const res = await getServiceDetails(id);
    setService(res);
  };

  useEffect(() => {
    LoadService(params.id);
  }, [params.id]);

  // const [formData, setFormData] = useState({
  //   name: data?.user?.name,
  //   date: "",
  //   email: data?.user?.email,
  //   price: service?.data?.price,
  //   phone: "",
  //   address: "",
  // });

  // const handleChange = (e: {
  //   target: { name: string; value: string | number };
  // }) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const submitData = {
      name: e.target.name.value,
      date: e.target.date.value,
      email: e.target.email.value,
      price: e.target.price.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
      img: service?.data?.img,
    };
    // console.log("submitData", submitData);
    const res = await fetch("http://localhost:3000/checkout/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitData),
    });
    const data = await res.json();
    // console.log("data", data);
    e.target.reset();
    toast.success(data.message);
    router.push("/cart");
  };

  // console.log(service?.data);

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
                  value={data?.user?.name ? data?.user?.name : ""}
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
                  placeholder="Date"
                  defaultValue={new Date().getDate()}
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
                  value={data?.user?.email ? data?.user?.email : ""}
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
                  value={service?.data?.price ? service?.data?.price : 0}
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
      <Toaster />
    </div>
  );
};

export default CheckoutPage;
