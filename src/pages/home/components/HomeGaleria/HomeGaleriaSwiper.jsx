import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { homeGaleriaItems } from "./HomeGaleriaItems";
import HomeGaleriaSlide from "./HomeGaleriaSlide";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomeGaleriaSwiper = () => {
  return (
    <Swiper
      loop={true}
      spaceBetween={5}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      breakpoints={{
        320: {
          slidesPerView: 1, // Para pantallas pequeñas
        },
        480: {
          slidesPerView: 2, // Para pantallas medianas
        },
        768: {
          slidesPerView: 3, // Para pantallas más grandes
        },
        1024: {
          slidesPerView: 4, // Para pantallas de escritorio
        },
        1280: {
          slidesPerView: 5, // Para pantallas muy grandes
        },
      }}
    >
      {homeGaleriaItems.map((item) => (
        <SwiperSlide key={item.id}>
          <img
            className="h-[300px]"
            src={`/images/galeria/${item.imageName}`}
            alt="Imagen"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeGaleriaSwiper;
