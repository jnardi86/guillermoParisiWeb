import React from "react";
import { homeIntroFechas } from "./homeIntroFechas";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomeCursoFechas = () => {
  const { t } = useTranslation("translation", { keyPrefix: "home" });

  return (
    <div className="w-full tablet:w-3/4 m-auto mt-60 flex flex-col items-center">
      <h2 className="font-Poppins text-center text-5xl font-ExtraBold text-Black px-4 leading-snug mb-4">
        {t("home_residences_title")}
      </h2>

      {/* Condición para mostrar el contenido */}
      {homeIntroFechas.length > 0 ? (
        // Carousel de fechas
        <div className="w-full flex justify-center">
          <Swiper
            loop={true}
            spaceBetween={50}
            centeredSlides={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-full flex justify-center"
            breakpoints={{
              320: {
                slidesPerView: 1, // Para pantallas pequeñas
              },
              1024: {
                slidesPerView: 2, // Para pantallas de escritorio
              },
              1440: {
                slidesPerView: 3,
              },
            }}
          >
            {homeIntroFechas.map((card) => (
              <SwiperSlide
                key={card.id}
                className="flex items-center justify-center"
              >
                <div
                  className="w-[375px] flex flex-col justify-center items-center bg-White rounded-2xl shadow-lg text-center border border-solid border-LightGray"
                >
                  <img
                    src={card.imageUrl} // URL de la imagen
                    alt={card.imageAlt} // Descripción de la imagen
                    className="w-full h-52 object-cover rounded-t-2xl opacity-60"
                  />
                  <p className="w-full flex items-center font-Poppins h-14 font-Regular bg-DarkBlue text-White tracking-tight text-lg text-start pl-2">
                    {t(card.dates)}
                  </p>
                  <p className="font-Poppins h-14 font-Regular text-DarkBlue text-base py-2 mt-8">
                    {t(card.venue)}
                  </p>
                  <p
                    className={`w-3/4 py-2 px-4 mb-6 flex items-center justify-center h-14 font-Poppins font-Semibold text-lg text-White rounded-2xl ${
                      t(card.booking) === t(
                        "home_residences_cards_open_registration"
                      )
                        ? "bg-Green"
                        : "bg-Red"
                    }`}
                  >
                    {t(card.booking)}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        // Texto alternativo si no hay fechas disponibles
        <p className="text-lg text-DarkBlue text-center font-Poppins">
          {t("home_residences_no_dates_message")}
        </p>
      )}
    </div>
  );
};

export default HomeCursoFechas;
