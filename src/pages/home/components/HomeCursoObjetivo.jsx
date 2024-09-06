import React from "react";
import { useGlobal } from "../../../hooks/useGlobal";
import { useTranslation } from "react-i18next";


const HomeCursoObjetivo = () => {

  const { mobileView } = useGlobal()
  const { t } = useTranslation ("translation", { keyPrefix: "home" });

  return (
    <div className="w-full laptop1:w-3/4 m-auto mt-40 bg-DarkBlue flex table:rounded-lg shadow-LightShadowGrey">
      {
        !mobileView && (
          <img
          className="w-[400px]"
          src="/images/background_objetivos_1.png"
          alt=""
        />
        )
      }
      <div className="flex flex-col justify-start laptop1:justify-center items-center p-3">
        <h2 className="title-sections font-Bold text-Beige pt-3">{t('home_goals_title')}</h2>
        <p className="text-sections font-Regular text-center py-5 text-LightGray tracking-tight">
          {t('home_goals_text')}
        </p>
      </div>
    </div>
  );
};

export default HomeCursoObjetivo;
