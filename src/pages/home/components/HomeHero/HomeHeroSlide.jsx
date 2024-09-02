import React from "react";
import { useTranslation } from "react-i18next";
import { useGlobal } from "../../../../hooks/useGlobal";

const HomeHeroSlide = ({ imageName, title, subtitle }) => {
  const { t } = useTranslation("translation", { keyPrefix: "home" });
  const { mobileView } = useGlobal();

  // Estilos condicionales basados en `mobileView`
  const backgroundStyles = mobileView
    ? {
        backgroundImage: `url('/images/${imageName}')`,
        backgroundSize: "cover",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }
    : {};

  return (
    <div
      className={`relative w-full h-[600px] tablet:flex tablet:flex-row tablet:bg-DarkBlue`}
      style={backgroundStyles}
    >
      {mobileView && (
        <div className="absolute top-0 left-0 w-full h-full bg-DarkBlue opacity-90 z-10"></div>
      )}

      <div className="relative text-center w-full h-full flex flex-col justify-center z-20 tablet:text-left tablet:ps-4 tablet:z-0 tablet:w-1/2 laptop1:w-2/3 laptop2:ps-8">
        <h1 className="title-principal font-Bold text-Beige px-2 py-4">
          {t(title)}
        </h1>
        <p className="font-Poppins text-lg font-Thin text-White px-2">
          {t(subtitle)}
        </p>
      </div>

      {/* Mostrar la imagen sólo en vista de tablet y superior */}
      {!mobileView && (
        <div className="w-1/2 flex justify-end items-center laptop1:w-1/3 laptop2:justify-start">
          <img
            src={`/images/${imageName}`}
            alt="Residencia Fotos"
            className="w-[320px] h-[320px] laptop2:w-[450px] laptop2:h-[450px]"
          />
        </div>
      )}
    </div>
  );
};

export default HomeHeroSlide;

