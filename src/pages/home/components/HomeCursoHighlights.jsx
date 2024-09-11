import React from "react";

const HomeCursoHighlights = () => {

  const highlights = [
    {
      id: 1,
      value: "40",
      description: "horas de cursada teórico-práctico",
      bgColor: "bg-TealGreen_1", // Clase de color de fondo
    },
    {
      id: 2,
      value: "5",
      description: "días de duración",
      bgColor: "bg-TealGreen_2", // Clase de color de fondo
    },
    {
      id: 3,
      value: "10+",
      description: "cirugías en vivo con participación activa de los cursantes",
      bgColor: "bg-TealGreen_3", // Clase de color de fondo
    },
    {
      id: 4,
      value: "4",
      description: "participantes como máximo",
      bgColor: "bg-TealGreen_4", // Clase de color de fondo
    },
  ];

  return (
    <div className="w-full flex flex-col m-auto tablet:w-3/4 mt-20">
      <div className="flex flex-col items-center">
        <h2 className="w-full title-sections font-Bold text-center pb-5 text-DarkBlue">
          Participación Activa en Cirugías en Vivo y Planificación 3D Integral
        </h2>
        <p className="text-center text-sm pt-5 px-2 tablet:text-base laptop1:text-lg">
          Que el cursante tenga una participación activa en el diagnóstico,
          planificación 3D y confección de guías quirúrgicas así como también el
          entendimiento del equipamiento necesario y los Kits de fresas para una
          correcta instalación de implantes a través de workshops organizados
          sobre planificación quirúrgica y prótesis con guías de referencias.
          Durante la residencia clínica se realizarán cirugías en vivo donde el
          cursante tendrá la posibilidad de participar de manera activa en cada
          una de ellas, como así también de poder evaluar al paciente en el
          postquirúrgico inmediato.
        </p>
      </div>

      <div className="w-full mt-10 flex flex-wrap">
        {/* Mapeamos los objetos del array highlights */}
        {highlights.map((highlight) => (
          <div
            key={highlight.id}
            className={`w-full h-44 flex flex-col px-2 justify-center items-center tablet:w-1/2 laptop:w-1/4 ${highlight.bgColor}`}
          >
            <p className="font-Poppins text-center font-Bold text-5xl">{highlight.value}</p>
            <p className="font-Poppins text-sm text-center laptop1:text-base pt-3">{highlight.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCursoHighlights;
