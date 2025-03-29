"use client";

import React from "react";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

export default function SwiperComponent() {
  const images = [
    {
      url: "/memories/pic1.png",
      alt: "bafosa 01",
    },
    {
      url: "/memories/pic2.png",
      alt: "bafosa 02",
    },
    {
      url: "/memories/pic3.png",
      alt: "bafosa 03",
    },
    {
      url: "/memories/pic4.png",
      alt: "bafosa 04",
    },
    {
      url: "/memories/pic5.png",
      alt: "bafosa 05",
    },
    {
      url: "/memories/pic6.jpeg",
      alt: "bafosa 06",
    },
    {
      url: "/memories/pic7.jpeg",
      alt: "bafosa 07",
    },
    {
      url: "/memories/pic8.jpeg",
      alt: "bafosa 08",
    },
    {
      url: "/memories/pic9.jpeg",
      alt: "bafosa 09",
    },
  ];
  return (
    <Swiper
      // install Swiper modules
      modules={[A11y, Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="w-full h-[300px]"
    >
      {images.map((image) => (
        <SwiperSlide className="w-full">
          <Image
            src={image.url}
            alt={image.alt}
            width={600}
            height={300}
            className="rounded-xl flex m-auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
