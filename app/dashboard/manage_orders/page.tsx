import React from "react";
import cart_details from "@/assets/images/checkout/checkout.png";
import Image from "next/image";
import serviceImage1 from "@/assets/images/services/1.jpg";
import serviceImage2 from "@/assets/images/services/2.jpg";
import serviceImage3 from "@/assets/images/services/3.jpg";

const ManageOrdersPage = () => {
  // Sample cart items
  const cartItems = [
    {
      id: 1,
      name: "Martha Knit Top",
      email: "abc@gmail.com",
      price: 25.0,
      color: "Green",
      size: "S",
      date: "22-10-2022",
      status: "Pending",
      imgSrc: serviceImage1,
    },
    {
      id: 2,
      name: "Martha Knit Top",
      email: "def@gmail.com",
      price: 25.0,
      color: "Green",
      size: "S",
      date: "22-10-2022",
      status: "Pending",
      imgSrc: serviceImage2,
    },
    {
      id: 3,
      name: "Martha Knit Top",
      email: "ghi@gmail.com",
      price: 25.0,
      color: "Green",
      size: "S",
      date: "22-10-2022",
      status: "Pending",
      imgSrc: serviceImage3,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header section */}
      <div className="relative p-5">
        <Image
          src={cart_details}
          alt="Cart header"
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black opacity-60 m-5 rounded-lg"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h2 className="text-3xl font-bold">Manage All Orders</h2>
          <p className="text-sm">Dashboard &gt; Manage Orders</p>
        </div>
      </div>

      {/* Cart items section */}
      <div className="p-6 max-w-5xl mx-auto">
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="card card-side bg-white shadow-lg">
              <figure className="w-1/4 p-4">
                <Image
                  src={item.imgSrc}
                  alt={item.name}
                  className="object-cover w-full h-full rounded-lg"
                />
              </figure>
              <div className="card-body mt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="card-title">{item.name}</h2>
                    <p>Color: {item.color}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <p className="text-center">{item.email}</p>
                  <p className="text-lg font-bold text-center">
                    ${item.price.toFixed(2)}
                  </p>
                  <p className="text-center">{item.date}</p>
                  <select className="select select-bordered">
                    <option disabled selected>
                      Order Status
                    </option>
                    <option>Approved</option>
                    <option>Cancel</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageOrdersPage;
