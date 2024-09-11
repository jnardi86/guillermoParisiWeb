import React from "react";
import { homeIntroFechas } from "../homeIntroFechas";
import QuoteIcon from "./svgIcons/QuoteIcon";
import { useGlobal } from "../../../../hooks/useGlobal";
import { useTranslation } from "react-i18next";

const HomeCursoBrief = () => {

  const { t } = useTranslation ("translation", { keyPrefix: "home" });
  const { mobileView } = useGlobal()

  return (
    <div className="flex flex-col items-center m-auto w-full tablet:w-3/4 pt-20">
      <h1 className="title-sections font-Bold text-center pb-5 text-DarkBlue">
        {/* CURSO FORMATIVO EN IMPLANTES CIGOMÁTICOS ALL ON X */}
        {t('home_brief_title')}
      </h1>
      <div className="flex items-start justify-center">
        {
          !mobileView && (
            <div>
              <QuoteIcon width="50px" height="50px" />
            </div>
          )
        }
        <h2 className="font-Poppins font-Regular text-center text-lg tablet:text-xl laptop1:text-2xl px-10">
          {t('home_brief_text')}
          {/* {t(item.label)} */}
        </h2>
      </div>
    </div>
  );
};

export default HomeCursoBrief;
