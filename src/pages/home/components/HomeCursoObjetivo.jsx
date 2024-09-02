import React from "react";
import { useGlobal } from "../../../hooks/useGlobal";


const HomeCursoObjetivo = () => {

  const { mobileView } = useGlobal()

  return (
    <div className="w-full laptop1:w-3/4 m-auto mt-40 bg-DarkBlue flex table:rounded-lg shadow-LightShadowGrey">
      {
        !mobileView && (
          <img
          className="w-[400px]"
          src="/images/background_objetivos_1.png"
          alt=""
        />
        )
      }
      <div className="flex flex-col justify-start laptop1:justify-center items-center p-3">
        <h2 className="title-sections font-Bold text-Beige pt-3">Objetivos</h2>
        <p className="font-Poppins text-sm font-Regular text-center py-5  text-LightGray tracking-tight">
          El curso fue dinámicamente diseñado con el objetivo de introducir un
          completo protocolo quirúrgico y protético destinado al uso de
          implantes cigomáticos como alternativa de tratamiento mostrando los
          últimos avances tecnológicos digitales que transforman la práctica en
          un método seguro y viable además de combinar con el uso de implantes
          convencionales para que la resolución protética final sea una prótesis
          total fija con carga inmediata.
        </p>
      </div>
    </div>
  );
};

export default HomeCursoObjetivo;
