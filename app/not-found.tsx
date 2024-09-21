import Image from "next/image";
import React from "react";
import notFoundImage from "@/assets/images/Error/404.png";
import Link from "next/link";
const Notfound = () => {
  return (
    <div className="p-10">
      <Image
        src={notFoundImage}
        alt="not found"
        placeholder="blur"
        quality={100}
        style={{ width: "100%", height: "70%" }}
      />
      <button className="btn btn-primary mt-6 flex mx-auto">
        <Link href="/">Go Home</Link>
      </button>
    </div>
  );
};

export default Notfound;
