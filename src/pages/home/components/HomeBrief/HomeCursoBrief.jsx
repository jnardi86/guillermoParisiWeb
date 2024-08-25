import React from "react";
import { homeIntroFechas } from "../homeIntroFechas";
import QuoteIcon from "./svgIcons/QuoteIcon";

const HomeCursoBrief = () => {
  return (
    <div className="flex flex-col items-center m-auto w-3/4 pt-20">
      <h1 className="text-center font-Montserrat font-Bold text-5xl pb-5">
        CURSO FORMATIVO EN IMPLANTES CIGOMÁTICOS
      </h1>
      <div className="flex items-start justify-center">
        <div>
          <QuoteIcon width="50px" height="50px" />
        </div>

        <h2 className="font-Monsterrat font-Regular text-center text-xl px-10">
          Nuestro Curso está diseñado para ofrecer una formación integral en la
          rehabilitación de maxilares atróficos desdentados totales o parciales
        </h2>
      </div>
    </div>
  );
};

export default HomeCursoBrief;
