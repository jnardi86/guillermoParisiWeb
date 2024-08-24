import React from "react";
import { useTranslation } from "react-i18next";

const HomeHeroSlide = ({ imageName, title, subtitle }) => {
  const { t } = useTranslation("translation", { keyPrefix: "home" });

  return (
    <div
      className="w-full h-[600px] ps-20"
      style={{
        backgroundImage: `url("/images/${imageName}")`,
        backgroundSize: "cover",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-1/2 h-full flex flex-col justify-center">
        <h1 className="text-Beige text-[3rem]">{t(title)}</h1>
        <h2 className="text-LightGray text-[1.5rem]">{t(subtitle)}</h2>
      </div>
    </div>
  );
};

export default HomeHeroSlide;
