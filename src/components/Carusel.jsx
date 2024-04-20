import React from "react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carusel = () => {
  const slider = [
    {
      title: "Film 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis.",
      url: "https://i.pinimg.com/564x/e3/3d/87/e33d872194aae1dc1c3a3a4972abe723.jpg",
    },
    {
      title: "Film 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis.",
      url: "https://i.pinimg.com/736x/09/ec/40/09ec40a7fe10f77c7d828f6401fe0ad1.jpg",
    },
    {
      title: "Film 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis.",
      url: "https://i.pinimg.com/564x/76/f6/16/76f616ac4d45bd66d6e73f726cc558bc.jpg",
    },
    {
      title: "Film 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis.",
      url: "https://i.pinimg.com/564x/6d/aa/44/6daa441c7d96cb5b9ecde9df44eb1dce.jpg",
    },
    {
      title: "Film 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis.",
      url: "https://i.pinimg.com/564x/00/c8/d3/00c8d3d0c3962dc1a727a59105ee0e59.jpg",
    },
    {
      title: "Film 5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis.",
      url: "https://i.pinimg.com/736x/e2/3c/58/e23c58122dd65c09a148ebb300e5eb95.jpg",
    },
  ];

  https: return (
    <Swiper
      className="myswiper"
      modules={[Pagination, EffectCoverflow, Autoplay]}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true,
      }}
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1560: {
          slidesPerView: 3,
        },
      }}
    >
      {slider.map((data, index) => (
        <SwiperSlide
          key={index}
          style={{ backgroundImage: `url(${data.url})` }}
          className="myswiper-slider"
        >
          <div>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <a href={`${data.url}`} target="_blank" className="slider-btn">
              To see a movie
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carusel;
