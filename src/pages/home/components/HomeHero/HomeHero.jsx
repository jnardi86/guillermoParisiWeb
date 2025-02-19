import React from "react";
import { useTranslation } from "react-i18next";
import { useGlobal } from "../../../../hooks/useGlobal";
import HomeHeroSwiper from "./HomeHeroSwiper";

const HomeHero = ({ homeContactoRef }) => {
  const { t } = useTranslation("translation", { keyPrefix: "home" });
  const { mobileView, desktopView } = useGlobal(); // Detectamos mobile y desktop

  const handleScrollToHomeContact = () => {
    if (homeContactoRef?.current) {
      homeContactoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[600px] flex justify-center items-center">
      {/* Swiper en el fondo */}
      <div className="absolute top-0 left-0 w-full h-full">
        <HomeHeroSwiper />
      </div>

      {/* Contenedor de texto */}
      <div
        className="relative z-10 text-White px-6 desktop:mt-4 laptop1:px-20"
          // desktopView ? "tablet:px-20 laptop1:px-32 laptop2:px-40 text-left" : "tablet:px-12 text-center"
        
      >
        <h1 className="w-full font-Poppins text-center font-Semibold text-5xl text-White leading-tight mb-8 tablet:leading-relaxed desktop:text-start laptop1:text-6xl laptop1:leading-[5rem]">
          {t("home_hero_title_1")}
          <span className="bg-White text-Blue px-2 font-ExtraBold">
            {t("home_hero_title_1_2")}
          </span>
          <span>{t("home_hero_title_1_3")}</span>
          <span className="bg-White text-Blue px-2 font-ExtraBold">
            {t("home_hero_title_1_4")}
          </span>
        </h1>
        <p className="ffont-Montserrat text-xl mb-10 text-center desktop:text-2xl desktop:text-start">
          {t("home_hero_subtitle_1")}
        </p>
        <div className="w-full flex justify-center">
          <button
            onClick={handleScrollToHomeContact}
            className="text-center bg-White cursor-pointer text-Blue font-Poppins text-lg tablet:mt-10 tablet:text-xl laptop2:text-2xl font-Bold py-4 px-6 rounded-lg shadow-DarkBlue shadow-lg transition-all hover:bg-Blue hover:text-White"
          >
            Solicitá más info
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
