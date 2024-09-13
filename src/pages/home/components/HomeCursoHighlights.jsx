import React from "react";
import { useTranslation } from "react-i18next";

const HomeCursoHighlights = () => {

  const { t } = useTranslation("translation", { keyPrefix: "home" });

  const highlights = [
    {
      id: 1,
      value: "40",
      description: "home_highlights_first_quadrant",
      bgColor: "bg-TealGreen_1", // Clase de color de fondo
    },
    {
      id: 2,
      value: "5",
      description: "home_highlights_second_quadrant",
      bgColor: "bg-TealGreen_2", // Clase de color de fondo
    },
    {
      id: 3,
      value: "10+",
      description: "home_highlights_third_quadrant",
      bgColor: "bg-TealGreen_3", // Clase de color de fondo
    },
    {
      id: 4,
      value: "8",
      description: "home_highlights_fourth_quadrant",
      bgColor: "bg-TealGreen_4", // Clase de color de fondo
    },
  ];

  return (
    <div className="w-full flex flex-col m-auto tablet:w-3/4 mt-20">
      <div className="flex flex-col items-center">
        <h2 className="w-full title-sections font-Bold text-center pb-5 text-DarkBlue">
          {t('home_highlights_title')}
        </h2>
        <p className="text-sections text-center pt-5 px-2">
          {t('home_highlights_text')}
        </p>
      </div>

      <div className="w-full mt-10 flex flex-wrap">
        {/* Mapeamos los objetos del array highlights */}
        {highlights.map((highlight) => (
          <div
            key={highlight.id}
            className={`w-full h-44 flex flex-col px-2 justify-center items-center tablet:w-1/2 laptop:w-1/4 ${highlight.bgColor}`}
          >
            <p className="font-Poppins text-center font-Bold text-5xl">{highlight.value}</p>
            <p className="font-Poppins text-sm text-center laptop1:text-base pt-3">{t(highlight.description)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCursoHighlights;
