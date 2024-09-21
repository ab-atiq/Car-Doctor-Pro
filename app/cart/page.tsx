import React from "react";
import cart_details from "@/assets/images/checkout/checkout.png";
import Image from "next/image";
import serviceImage1 from "@/assets/images/services/1.jpg";
import serviceImage2 from "@/assets/images/services/2.jpg";
import serviceImage3 from "@/assets/images/services/3.jpg";

const CartDetailsPage = () => {
  // Sample cart items
  const cartItems = [
    {
      id: 1,
      name: "Martha Knit Top",
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
          <h2 className="text-3xl font-bold">Cart Details</h2>
          <p className="text-sm">Home &gt; Product Details</p>
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
              <div className="card-body">
                <div className="flex justify-between items-center mt-4">
                  <div>
                    <h2 className="card-title">{item.name}</h2>
                    <p>Color: {item.color}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <p className="text-lg font-bold text-center">
                    ${item.price.toFixed(2)}
                  </p>
                  <p className="text-center">{item.date}</p>
                  <div className="badge badge-success py-3">{item.status}</div>
                </div>
              </div>
              <button className="btn btn-circle absolute top-0 right-0 mt-2 mr-2 btn-primary text-xl">
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* Footer buttons */}
        <div className="mt-6 flex justify-between items-center">
          <button className="btn btn-outline btn-primary ">
            <i className="mr-2 fas fa-shopping-cart"></i> Continue Shopping
          </button>
          <button className="btn btn-primary">
            <i className="mr-2 fas fa-trash"></i> Clear Shopping Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDetailsPage;
