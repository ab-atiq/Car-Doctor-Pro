import Image from "next/image";
import checkout from "./service_banner.png";

export default function ServiceBanner() {
  return (
    <div className="">
      <Image
        src={checkout}
        alt="checkout"
        sizes="100vw"
        placeholder="blur"
        quality={100}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
}
