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
        "Especialista en Cirugía BucoMaxiloFacial. Jefe TP Cátedra CBMF II UBA. Atención Odontológica Integral, ciudad de Chivilcoy, Buenos Aires. Ortognática-Implantes Cigomáticos",
    },
  ];

  const { directoresRef } = useGlobal();

  return (
    <div
      ref={directoresRef}
      className="w-full tablet:w-3/4 m-auto bg-White rounded-lg shadow-lg flex flex-col items-center p-5 pb-10 mt-20"
    >
      <h2 className="title-sections font-Bold text-DarkBlue pb-5 text-center">
        Directores
      </h2>
      <p className="font-Poppins text-center">
        Conoce a los especialistas que lideran este curso de formación, con años
        de experiencia en la práctica y la enseñanza de la cirugía maxilofacial.
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
                alt={director.name}
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
              <h2 className="title-secundary bg-DarkBlue w-full text-White font-bold text-center">
                {director.name}
              </h2>
              <p className="font-Poppins text-DarkBlue text-sm text-center px-4 pt-4 tablet:text-base">
                {director.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeDirectores;


