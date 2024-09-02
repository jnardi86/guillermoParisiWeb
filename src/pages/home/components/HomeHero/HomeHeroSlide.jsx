import React from "react";
import { useTranslation } from "react-i18next";
import { useGlobal } from "../../../../hooks/useGlobal";

const HomeHeroSlide = ({ imageName, title, subtitle }) => {
  const { t } = useTranslation("translation", { keyPrefix: "home" });

  const { mobileView } = useGlobal()



  return (
    <div
      className="relative w-full h-[600px] "
      style={{
        backgroundImage: `url("/images/${imageName}")`,
        backgroundSize: "cover",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
      }}
    >

      {mobileView && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-DarkBlue opacity-90 z-10"
        ></div>
      )}

      <div className="relative text-center w-full h-full flex flex-col justify-center z-20 tablet:text-left tablet:ps-14 tablet:z-0 tablet:w-1/2 ">
        {/* <h1 className="text-Beige font-Montserrat font-Bold text-[3rem]">{t(title)}</h1> */}
        <h1 className="title-principal font-Bold text-Beige px-2 py-4">{t(title)}</h1>
        <p className="font-Poppins text-lg font-Thin text-White px-2">{t(subtitle)}</p>
      </div>
    </div>
  );
};

export default HomeHeroSlide;
