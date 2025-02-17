import React from "react";
import { useGlobal } from "../../../hooks/useGlobal";
import { useTranslation } from "react-i18next";


const HomeCursoObjetivo = () => {

  const { mobileView } = useGlobal()
  const { t } = useTranslation ("translation", { keyPrefix: "home" });

  return (
    <div className="w-full laptop1:w-3/4 m-auto mt-20 p-5 flex">
      <div className="flex flex-col justify-start laptop1:justify-center items-center p-5">
        <h2 className="font-Poppins font-Bold text-Black text-5xl mb-4">{t('home_goals_title')}</h2>
        <p className="font-Poppins text-Black font-Regular text-start text-xl tracking-tight tablet:text-center laptop2:text-2xl">
          {t('home_goals_text')}
        </p>
      </div>
    </div>
  );
};

export default HomeCursoObjetivo;
