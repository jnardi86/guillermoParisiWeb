import React from "react";
import { useGlobal } from "../../../hooks/useGlobal";

const HomeDirectores = () => {
const {directoresRef} = useGlobal();

  return (
    <div
      ref={directoresRef}
      className="w-3/4 m-auto bg-White rounded-lg shadow-lg flex flex-col items-center p-5 mt-20"
    >
      <h1 className="text-3xl font-Montserrat font-Bold pb-5 text-center">
        Directores
      </h1>

      <p className="text-center">
        Conoce a los especialistas que lideran este curso de formación, con años
        de experiencia en la práctica y la enseñanza de la cirugía maxilofacial.
      </p>

      <div className="flex justify-around items-start flex-wrap pt-10">
        <div className="flex flex-col items-center w-full px-2 laptop:w-1/2">
          <div className="pb-3">
            <img
              className="rounded-full w-[150px] laptop:w-[200px]"
              src="/images/autoridades/parisi.png"
              alt="Dr. Guillermo Parisi"
            />
          </div>
          <div className="flex flex-col justify-center pb-2">
            <h2 className="text-xl font-bold text-center">
              Dr. Guillermo Parisi
            </h2>
            <p className="text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate labore beatae in voluptatibus recusandae nemo voluptas
              quo? Fugit, perferendis at!
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center w-full px-2 laptop:w-1/2">
          <div className="pb-3">
            <img
              className=" rounded-full w-[150px] h-[150px] laptop:w-[200px] laptop:h-[200px]"
              src="/images/autoridades/fevola.png"
              alt="Dr. Guillermo Parisi"
            />
          </div>
          <div className="flex flex-col justify-center pb-2">
            <h2 className="text-xl font-bold text-center">
              Dr. Leandro Fevola
            </h2>
            <p className="text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate labore beatae in voluptatibus recusandae nemo voluptas
              quo? Fugit, perferendis at!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDirectores;
