import React from "react";
import InstrumentalIcon from "./svgIcons/InstrumentalIcon";
import AgendaIcon from "./svgIcons/AgendaIcon";
import LocationIcon from "./svgIcons/LocationIcon";
import AccomodationIcon from "./svgIcons/AccomodationIcon";

const HomeCursoResumen = () => {
  // Array de objetos para representar cada ítem del resumen
  const resumenItems = [
    {
      id: 1,
      icon: <InstrumentalIcon width="40px" height="40px" />,
      mainText: "El curso incluye todo el instrumental",
    },
    {
      id: 2,
      icon: <AgendaIcon width="40px" height="40px" />,
      mainText: "Se cursa de Lunes a viernes de 9 a 18:30 hs",
    },
    {
      id: 3,
      icon: <LocationIcon width="50px" height="50px" />,
      mainText: "Lugar de curso:",
      subText: "Clínica AOI Chivilcoy – Av. Calixto Calderón 351 – Chivilcoy – Buenos Aires – Argentina",
    },
    {
      id: 4,
      icon: <AccomodationIcon width="40px" height="40px" />,
      mainText: "Alojamiento incluido en:",
      subText: "Hotel Tomaso",
    },
  ];

  return (
    <div className="w-full tablet:w-3/4 m-auto p-6 mt-20 bg-DarkBlue rounded-lg shadow-lg shadow-LightGray">
      <h2 className="title-secundary text-Beige pt-3 text-center">
        La Residencia
      </h2>
      <div className="flex flex-col items-start">
        {resumenItems.map((item) => (
          <div key={item.id} className="w-full flex items-center gap-2 my-3 text-LightGray_1 ">
            <div className="w-[50px] flex justify-center">
            {item.icon}
            </div>
              
            <div className="flex flex-col text-left ">
              <p className="font-Poppins font-Semibold mb-2 text-sm">{item.mainText}</p>
              {item.subText && <p className="font-Poppins text-sm">{item.subText}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCursoResumen;

