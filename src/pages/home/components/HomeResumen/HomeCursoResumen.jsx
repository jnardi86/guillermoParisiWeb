import React from "react";
import InstrumentalIcon from "./svgIcons/InstrumentalIcon";
import AgendaIcon from "./svgIcons/AgendaIcon";
import LocationIcon from "./svgIcons/LocationIcon";
import AccomodationIcon from "./svgIcons/AccomodationIcon";
import { useTranslation } from "react-i18next";

const HomeCursoResumen = () => {

  const { t } = useTranslation ("translation", { keyPrefix: "home" });

  // Array de objetos para representar cada ítem del resumen
  const resumenItems = [
    {
      id: 1,
      icon: <InstrumentalIcon width="40px" height="40px" />,
      mainText: "home_summary_mainItem_1",
    },
    {
      id: 2,
      icon: <AgendaIcon width="40px" height="40px" />,
      mainText: "home_summary_mainItem_2",
    },
    {
      id: 3,
      icon: <LocationIcon width="50px" height="50px" />,
      mainText: "home_summary_mainItem_3",
      subText: "home_summary_textItem_3",
    },
    {
      id: 4,
      icon: <AccomodationIcon width="40px" height="40px" />,
      mainText: "home_summary_mainItem_4",
      subText: "home_summary_textItem_4",
    },
  ];

  return (
    <div className="w-full m-auto p-6 mt-20 bg-DarkBlue rounded-lg shadow-lg shadow-LightGray tablet:w-[580px]">
      <h2 className="title-sections font-Bold text-Beige pt-3 text-center">
        {t("home_summary_title")}
      </h2>
      <div className="flex flex-col items-start">
        {resumenItems.map((item) => (
          <div key={item.id} className="w-full flex items-center gap-2 tablet:gap-4 my-3 text-LightGray_1">
            <div className="w-[50px] flex justify-center">
            {item.icon}
            </div>
              
            <div className="flex flex-col text-left ">
              <p className="font-Poppins font-Semibold mb-2 text-sm tablet:text-base">{t(item.mainText)}</p>
              {item.subText && <p className="font-Poppins text-sm tablet:text-base">{t(item.subText)}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCursoResumen;

