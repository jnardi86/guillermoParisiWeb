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
      slidesPerView={5}
      spaceBetween={5}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
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
