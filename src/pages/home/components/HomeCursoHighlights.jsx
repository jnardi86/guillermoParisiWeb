import React from "react";

const HomeCursoHighlights = () => {
  return (
    <div className="flex flex-col m-auto w-3/4 mt-20">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-Montserrat font-Bold pb-5 text-center">
          Participación Activa en Cirugías en Vivo y Planificación 3D Integral
        </h1>
        <p className="text-center pt-5">
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

      {/* Course Hightligh */}
      <div className="w-full mt-10 h-[200px] flex flex-wrap">
        {/* Box_1 */}
        <div className="flex flex-col justify-start items-center bg-TealGreen_1 pt-10 px-2 laptop:w-1/4">
          <p className="text-center font-Bold text-[3rem]">40</p>
          <p className="text-center">horas de cursada teórico-práctico</p>
        </div>
        {/* Box_2 */}
        <div className="flex flex-col justify-start items-center bg-TealGreen_2 pt-10 px-2 laptop:w-1/4">
          <p className="text-center font-Bold text-[3rem]">5</p>
          <p className="text-center">días de duración</p>
        </div>
        {/* Box_3 */}
        <div className="flex flex-col justify-start items-center bg-TealGreen_3 pt-10 px-2 laptop:w-1/4">
          <p className="text-center font-Bold text-[3rem]">10+</p>
          <p className="text-center">
            cirugías en vivo con participación activa de los cursantes
          </p>
        </div>
        {/* Box_4 */}
        <div className="flex flex-col justify-start items-center bg-TealGreen_4 pt-10 px-2 laptop:w-1/4">
          <p className="text-center font-Bold text-[3rem]">4</p>
          <p className="text-center">participantes como máximo</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCursoHighlights;
