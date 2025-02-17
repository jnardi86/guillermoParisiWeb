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
        className={`relative z-10 text-White px-6 ${
          desktopView ? "tablet:px-20 laptop1:px-32 laptop2:px-40 text-left" : "tablet:px-12 text-center"
        }`}
      >
        <h1 className="font-Poppins font-Semibold text-4xl tablet:text-5xl laptop1:text-6xl laptop1:text-start leading-tight tablet:leading-snug laptop1:leading-normal mb-6 tablet:mb-10">
          {t("home_hero_title_1")}
          <span className="bg-White text-Blue px-2 font-ExtraBold">
            {t("home_hero_title_1_2")}
          </span>
          <span>{t("home_hero_title_1_3")}</span>
          <span className="bg-White text-Blue px-2 font-ExtraBold">
            {t("home_hero_title_1_4")}
          </span>
        </h1>
        <p className="font-Montserrat font-Regular text-lg tablet:text-xl laptop1:text-2xl laptop1:text-start mb-6 ">
          {t("home_hero_subtitle_1")}
        </p>
        <div className="laptop1:w-full laptop1:flex laptop1:justify-start">
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
