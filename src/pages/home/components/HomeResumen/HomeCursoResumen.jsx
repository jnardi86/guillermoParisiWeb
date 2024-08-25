import React from "react";
import InstrumentalIcon from "./svgIcons/InstrumentalIcon";
import AgendaIcon from "./svgIcons/AgendaIcon";
import LocationIcon from "./svgIcons/LocationIcon";
import AccomodationIcon from "./svgIcons/AccomodationIcon";

const HomeCursoResumen = () => {
  return (
    <div className="w-3/4 m-auto p-6 mt-20 bg-DarkBlue rounded-lg shadow-lg shadow-LightGray ">
      <h2 className="text-3xl font-Montserrat font-Bold pb-5 text-Beige text-center">
        Resumen
      </h2>
      <div className="flex flex-col items-start">
        <div className="flex items-center my-3 text-LightGray_1">
          <InstrumentalIcon width="40px" height="40px" />
          <h3 className=" ps-5">El curso incluye todo el instrumental</h3>
        </div>

        <div className="flex items-center my-3 text-LightGray_1">
          <AgendaIcon width="40px" height="40px" />
          <h3 className=" ps-5">Se cursa de Lunes a viernes de 9 a 18:30 hs</h3>
        </div>

        <div className="flex items-center my-3 text-LightGray_1">
          <LocationIcon width="40px" height="40px" />
          <h3 className=" ps-5">Lugar de curso:</h3>
          <p className="font-Semibold ps-5">
            Clínica AOI Chivilcoy – Av. Calixto Calderón 351 – Chivilcoy –
            Buenos Aires – Argentina
          </p>
        </div>

        <div className="flex items-center my-3 text-LightGray_1">
          <AccomodationIcon width="40px" height="40px" />
          <h3 className=" ps-5">Alojamiento incluido en:</h3>
          <p className="font-Semibold ps-5">Hotel Tomaso</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCursoResumen;
