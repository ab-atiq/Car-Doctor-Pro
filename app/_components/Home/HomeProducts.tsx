import Image from "next/image";
import React from "react";
import product1 from "@/assets/images/products/1.png";
import product2 from "@/assets/images/products/2.png";
import product3 from "@/assets/images/products/3.png";
import product4 from "@/assets/images/products/4.png";
import product5 from "@/assets/images/products/5.png";
import product6 from "@/assets/images/products/6.png";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "Car Engine Plug",
    price: 20.01,
    image: product1,
  },
  {
    id: 2,
    title: "Car Engine Plug",
    price: 30.04,
    image: product2,
  },
  {
    id: 3,
    title: "Car Engine Plug",
    price: 40.06,
    image: product3,
  },
  {
    id: 4,
    title: "Car Engine Plug",
    price: 50.02,
    image: product4,
  },
  {
    id: 5,
    title: "Car Engine Plug",
    price: 60.08,
    image: product5,
  },
  {
    id: 6,
    title: "Car Engine Plug",
    price: 70.03,
    image: product6,
  },
];

const HomeProducts = () => {
  return (
    <div className="p-5">
      <div className="text-center w-full md:w-1/2 mx-auto">
        <h4 className="text-primary font-semibold">Popular Products</h4>
        <h1 className="text-2xl md:text-4xl my-2 font-bold">
          Our Popular Products
        </h1>
        <p className="text-sm">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="col-span-12 sm:col-span-6 lg:col-span-4 text-center w-full flex flex-col justify-center items-center border-red-600 border-2 rounded-md p-4 md:p-6 lg:p-8"
          >
            <Image
              src={product.image}
              alt={product.title}
              placeholder="blur"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="flex gap-2 items-center justify-center mt-2 text-primary">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <h3 className="text-xl font-bold">{product.title}</h3>
            <p className="text-sm text-primary">${product.price}</p>
          </div>
        ))}
      </div>
      <button className="btn btn-outline btn-primary my-6 flex mx-auto">
        <Link href="/products">More Products</Link>
      </button>
    </div>
  );
};

export default HomeProducts;
