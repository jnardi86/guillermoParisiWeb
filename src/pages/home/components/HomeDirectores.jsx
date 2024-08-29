import React from "react";
import { useGlobal } from "../../../hooks/useGlobal";

const HomeDirectores = () => {
  const directors = [
    {
      id: 1,
      imageSrc: "/images/autoridades/parisi.png",
      name: "Dr. Guillermo Parisi",
      description:
        "Especialista en Cirugía BucoMaxiloFacial Prof. Adjunto Cátedra CBMF II UBA. Jefe Servicio Odontología Hospital Santojanni, CABA. Ortognática-Implantes Cigomáticos",
    },
    {
      id: 2,
      imageSrc: "/images/autoridades/fevola.png",
      name: "Dr. Leandro Fevola",
      description:
        "Especialista en Cirugía BucoMaxiloFacial. Jefe TP Cátedra CBMF II UBA. Atención Odontológica Integral, Chivilcoy. Ortognática-Implantes Cigomáticos",
    },
  ];

  const { directoresRef } = useGlobal();

  return (
    <div
      ref={directoresRef}
      className="w-3/4 m-auto bg-White rounded-lg shadow-lg flex flex-col items-center p-5 mt-20"
    >
      <h1 className="title-secundary text-DarkBlue pb-5 text-center">
        Directores
      </h1>

      <p className="font-Poppins text-center">
        Conoce a los especialistas que lideran este curso de formación, con años
        de experiencia en la práctica y la enseñanza de la cirugía maxilofacial.
      </p>
      <div className="flex justify-around items-start flex-wrap pt-10">
        {directors.map((director) => (
          <div key={director.id} className="flex flex-col items-center w-full px-2 laptop:w-1/2">
            <div className="pb-3">
              <img
                className="rounded-full w-[150px] h-[150px] laptop:w-[200px] laptop:h-[200px]"
                src={director.imageSrc}
                alt={director.name}
              />
            </div>
            <div className="flex flex-col justify-center mt-2 pb-2">
              <h2 className="title-secundary text-DarkBlue font-bold text-center">
                {director.name}
              </h2>
              <p className="font-Poppins text-sm tablet:text-base  text-center">{director.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeDirectores;

