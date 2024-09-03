import React from "react";
import { homeIntroFechas } from "../homeIntroFechas";
import QuoteIcon from "./svgIcons/QuoteIcon";
import { useGlobal } from "../../../../hooks/useGlobal";

const HomeCursoBrief = () => {

  const { mobileView } = useGlobal()

  return (
    <div className="flex flex-col items-center m-auto w-full tablet:w-3/4 pt-20">
      <h1 className="title-sections font-Bold text-center pb-5 text-DarkBlue">
        CURSO FORMATIVO EN IMPLANTES CIGOMÁTICOS ALL ON X
      </h1>
      <div className="flex items-start justify-center">
        {
          !mobileView && (
            <div>
              <QuoteIcon width="50px" height="50px" />
            </div>
          )
        }
        <h2 className="font-Poppins font-Regular text-center text-base tablet:text-xl px-10">
          Nuestro Curso está diseñado para ofrecer una formación integral en la
          rehabilitación de maxilares atróficos desdentados totales o parciales
        </h2>
      </div>
    </div>
  );
};

export default HomeCursoBrief;
