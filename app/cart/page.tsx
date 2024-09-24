"use client";
import React, { useEffect, useState } from "react";
import cart_details from "@/assets/images/checkout/checkout.png";
import Image from "next/image";
// import serviceImage1 from "@/assets/images/services/1.jpg";
// import serviceImage2 from "@/assets/images/services/2.jpg";
// import serviceImage3 from "@/assets/images/services/3.jpg";
import { useSession } from "next-auth/react";
import { FaTrash } from "react-icons/fa6";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
// import { useRouter } from "next/navigation";

const CartDetailsPage = () => {
  // Sample cart items
  // const cartItems = [
  //   {
  //     id: 1,
  //     name: "Martha Knit Top",
  //     price: 25.0,
  //     color: "Green",
  //     size: "S",
  //     date: "22-10-2022",
  //     status: "Pending",
  //     imgSrc: serviceImage1,
  //   },
  //   {
  //     id: 2,
  //     name: "Martha Knit Top",
  //     price: 25.0,
  //     color: "Green",
  //     size: "S",
  //     date: "22-10-2022",
  //     status: "Pending",
  //     imgSrc: serviceImage2,
  //   },
  //   {
  //     id: 3,
  //     name: "Martha Knit Top",
  //     price: 25.0,
  //     color: "Green",
  //     size: "S",
  //     date: "22-10-2022",
  //     status: "Pending",
  //     imgSrc: serviceImage3,
  //   },
  // ];

  const [bookings, setBookings] = useState([]);
  const session = useSession();
  // const router = useRouter();
  console.log(bookings);

  const getBookings = async (email: string) => {
    const res = await fetch(`http://localhost:3000/cart/api/${email}`);
    const carts = await res.json();
    console.log(carts);
    setBookings(carts?.data);
  };

  useEffect(() => {
    getBookings(session?.data?.user?.email ? session?.data?.user?.email : "");
  }, [session?.data?.user?.email]);

  const handleDelete = async (id: string) => {
    const res = await fetch(`http://localhost:3000/cart/api/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    toast.success(data.message);
    // router.refresh();
    getBookings(session?.data?.user?.email ? session?.data?.user?.email : "");
  };

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
          <h2 className="text-3xl font-bold text-base-100">Cart Details</h2>
          <p className="text-sm text-base-100">Home &gt; Product Details</p>
        </div>
      </div>

      {/* Cart items section */}
      <div className="p-6 max-w-5xl mx-auto">
        <div className="space-y-4">
          {bookings?.map(
            (booking: {
              _id: string;
              name: string;
              price: number;
              img: string;
              date: string;
            }) => (
              <div
                key={booking?._id}
                className="card card-side bg-white shadow-lg"
              >
                <figure className="w-1/4 p-4">
                  <Image
                    src={booking?.img}
                    alt={booking?.name}
                    width={200}
                    height={200}
                    className="object-cover rounded-lg"
                  />
                </figure>
                <div className="card-body">
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <h2 className="card-title">{booking?.name}</h2>
                      <p>Color: Yellow</p>
                      <p>Size: XL</p>
                    </div>
                    <p className="text-lg font-bold text-center">
                      ${booking?.price}
                    </p>
                    <p className="text-center">{booking?.date}</p>
                    <div className="badge badge-success py-3">Pending</div>
                  </div>
                </div>
                <button
                  className="btn btn-circle absolute top-0 right-0 mt-2 mr-2 btn-primary text-xl"
                  onClick={() => handleDelete(booking?._id)}
                >
                  ✕
                </button>
              </div>
            )
          )}
        </div>

        {/* Footer buttons */}
        <div className="mt-6 flex justify-between items-center">
          <button className="btn btn-outline btn-primary ">
            <Link href="/services">Continue Shopping</Link>
          </button>
          <button
            className="btn btn-primary"
            onClick={() =>
              toast.success("Clear Shopping Cart Not Implemented Yet")
            }
          >
            <FaTrash className="text-lg text-base-100" />
            Clear Shopping Cart
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default CartDetailsPage;
