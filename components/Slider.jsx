import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

const ImageList = [
  {
    id: 1,
    img: "/images/s6.png",
    title: "Upto 10% off on all Surgical Products",
    description:
      "Discover our range of surgical products. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/Products?p=Surgical", // Link for surgical products
  },
  {
    id: 2,
    img: "/images/h2.png",
    title: "10% off on all Clothing",
    description:
      "Upgrade your wardrobe with our stylish collection of clothing. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/Products?p=Clothing", // Link for clothing
  },
  {
    id: 3,
    img: "/images/surgical.png",
    title: "10% off on all Sport Wear",
    description:
      "Elevate your fitness routine with our premium sportswear. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/Products?p=Sports", // Link for sports wear
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden w-screen min-h-[550px] sm:min-h-[650px] bg-white flex justify-center items-center dark:text-black duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-sky-400/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container mx-auto pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <Link href={data.link}>
                      <button
                        className="bg-gradient-to-r bg-blue-600 text-white py-2 px-4 rounded-full"
                        onClick={handleOrderPopup}
                      >
                        View More
                      </button>
                    </Link>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
