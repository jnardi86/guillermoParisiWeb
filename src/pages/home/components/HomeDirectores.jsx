import React from "react";
import { useGlobal } from "../../../hooks/useGlobal";
import ListIcon from "../../../components/icons/ListIcon";
import { useTranslation } from "react-i18next";

const HomeDirectores = () => {

  const { directoresRef } = useGlobal();
  const { t } = useTranslation ("translation", { keyPrefix: "home" });

  const directors = [
    {
      id: 1,
      imageSrc: "/images/autoridades/parisi.png",
      name: "home_directors_name1",
      description: {
        speciality: "home_directors_description1_especiality",
        position: "home_directors_description1_position",
        role: "home_directors_description1_role",
        focus: "home_directors_description1_focus"
      }
    },
    {
      id: 2,
      imageSrc: "/images/autoridades/fevola.png",
      name: "home_directors_name2",
      description: {
        speciality: "home_directors_description2_especiality",
        position: "home_directors_description2_position",
        role: "home_directors_description2_role",
        focus: "home_directors_description2_focus"
      }
    }
  ];

 

  return (
    <div
      ref={directoresRef}
      className="w-full tablet:w-3/4 m-auto bg-White rounded-lg shadow-lg flex flex-col items-center p-5 pb-10 mt-20"
    >
      <h2 className="title-sections font-Bold text-DarkBlue pb-5 text-center">
        {t("home_directors_title")}
      </h2>
      <p className="text-sections text-center">
        {t("home_directors_text")}
      </p>
      <div className="flex flex-col items-center justify-around flex-wrap pt-10 gap-10 laptop1:flex-row laptop1:flex-nowrap laptop1:justify-start laptop1:gap-5">
        {directors.map((director) => (
          <div
            key={director.id}
            className="flex flex-col items-center w-full py-4 laptop1:w-1/2 laptop1:h-[480px] border border-solid border-LightGray rounded-lg shadow-xl"
          >
            <div className="pb-3">
              <img
                className="rounded-full w-[150px] h-[150px] laptop1:w-[200px] laptop1:h-[200px] laptop1:hover:filter laptop1:hover:grayscale laptop1:hover:transition laptop1:hover:duration-300"
                src={director.imageSrc}
                alt={t(director.name)}
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-10 w-full">
              <h2 className="title-secundary bg-DarkBlue w-full text-White font-bold text-center">
              {t(director.name)}
              </h2>
              {/* Mapeo de la lista con ListIcon */}
              <ul className="font-Poppins text-DarkBlue text-sm text-start w-full px-2 pt-4 tablet:text-base list-none">
                {Object.values(director.description).map((desc, index) => (
                  <li key={index} className="flex gap-1 items-center">
                    <div className="w-7 h-7">
                    <ListIcon width={"28px"} height={"28px"} color={"#223A5E"} />
                    </div>
                    <p className="">{t(desc)}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeDirectores;


