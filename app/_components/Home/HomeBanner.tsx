const banners = [
  {
    id: 1,
    image: "https://i.ibb.co.com/XxTyqZb/1.jpg",
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    prev: "#slide6",
    next: "#slide2",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/R32SZV0/2.jpg",
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    prev: "#slide1",
    next: "#slide3",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/Wp76n7H/3.jpg",
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    prev: "#slide2",
    next: "#slide4",
  },
  {
    id: 4,
    image: "https://i.ibb.co.com/gjZ67pc/4.jpg",
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    prev: "#slide3",
    next: "#slide5",
  },
  {
    id: 5,
    image: "https://i.ibb.co.com/R32SZV0/2.jpg",
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    prev: "#slide4",
    next: "#slide6",
  },
  {
    id: 6,
    image: "https://i.ibb.co.com/Wp76n7H/3.jpg",
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    prev: "#slide5",
    next: "#slide1",
  },
];

const HomeBanner = () => {
  return (
    <div className="carousel w-full">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          style={{
            backgroundImage: `linear-gradient(65deg, rgba(21, 21, 21, 100%), rgba(21, 21, 21, 0%)), url(${banner.image}) `,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            objectFit: "cover",
          }}
          id={`slide${index + 1}`}
          className="carousel-item relative w-full"
        >
          <div className="align-middle flex justify-between">
            <div className="flex flex-col gap-2 items-start p-10 justify-center w-1/2 ">
              <h3 className="text-white text-5xl">
                Affordable Price For Car Servicing
              </h3>
              <p className="text-white text-sm my-5">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-2">
                <button className="btn btn-primary">Book Appointment</button>
                <button className="btn btn-outline btn-primary">
                  Learn More
                </button>
              </div>
            </div>
            <div className="bottom-0 right-0 absolute gap-3 flex p-4">
              <a href={`#slide${index}`} className="btn btn-circle">
                ❮
              </a>
              <a
                href={`#slide${index + 2}`}
                className="btn btn-circle btn-primary text-white"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeBanner;
