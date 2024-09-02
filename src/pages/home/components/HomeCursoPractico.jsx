import React from "react";

const HomeCursoPractico = () => {
  // Array de objetos que representa cada punto de la lista
  const practicalActivities = [
    {
      id: 1,
      text: "Workshop caja quirúrgica y protésica, fresado de modelos de resina obtenido por tomografías.",
    },
    {
      id: 2,
      text: "Reconocimiento de instrumental y análogos de implantes cigomáticos, medidas, angulaciones.",
    },
    {
      id: 3,
      text: "Evaluación clínica y tomográfica de casos quirúrgicos.",
    },
    {
      id: 4,
      text: "Clasificación e indicación de tipo de técnica a utilizar.",
    },
    {
      id: 5,
      text: "Planificación virtual de casos a operar.",
    },
    {
      id: 6,
      text: "Colocación en biomodelos impresos en 3D.",
    },
    {
      id: 7,
      text: "Participación en cirugías en vivo, se programarán todos los días cirugías de implantes cigomáticos siguiendo un protocolo establecido.",
    },
    {
      id: 8,
      text: "Toma de impresiones, vaciado, instalación de pilares.",
    },
    {
      id: 9,
      text: "Uso de scanner intraoral en vivo.",
    },
    {
      id: 10,
      text: "Diseño de prótesis impresas 3D.",
    },
    {
      id: 11,
      text: "Impresoras 3D.",
    },
    {
      id: 12,
      text: "Resinas de impresión para prótesis completa.",
    },
  ];

  return (
    <div className="w-full tablet:w-3/4 m-auto mt-20 bg-White rounded-lg shadow-lg">
      <h2 className="w-full bg-DarkBlue title-sections font-Bold text-Beige py-5 text-center">Actividad Práctica</h2>
      <ul className="list-none font-Poppins text-sm py-5 ps-2 space-y-2 text-gray-700">
        {/* Mapeamos los objetos del array practicalActivities para crear la lista */}
        {practicalActivities.map((activity) => (
          <li 
          key={activity.id}
          className=' py-2'
          >✅{activity.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomeCursoPractico;

