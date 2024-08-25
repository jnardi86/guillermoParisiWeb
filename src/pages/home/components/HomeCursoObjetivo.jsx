import React from "react";

const HomeCursoObjetivo = () => {
  return (
    <div className="w-3/4 m-auto mt-40 bg-DarkBlue flex rounded-lg shadow-LightShadowGrey">
      <img
        className="w-[400px]"
        src="/images/background_objetivos_1.png"
        alt=""
      />
      <div className="flex flex-col justify-start items-center p-3">
        <h2 className="text-Beige font-Semibold text-3xl pt-3">Objetivos</h2>
        <p className="font-Monsterrat font-Regular text-center ps-10 pt-10 text-LightGray">
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
