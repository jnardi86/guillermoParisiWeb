import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { homeHeroItems } from "./homeHeroItems";
import HomeHeroSlide from "./HomeHeroSlide";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomeHeroSwiper = () => {
  return (
    <Swiper
      loop={true}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {homeHeroItems.map((item) => (
        <SwiperSlide key={item.id}>
          <HomeHeroSlide
            imageName={item.imageName}
            title={item.title}
            subtitle={item.subtitle}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeHeroSwiper;
