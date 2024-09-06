import React from 'react'

const HomeCursoTeorico = () => {

  const topics = [
    {
      id: 1,
      text: "Anatomía craneofacial focalizada al hueso malar y su relación a los procesos alveolares maxilares, topografía completa del área de incumbencia quirúrgica.",
    },
    {
      id: 2,
      text: "Herramientas terapéuticas quirúrgico protéticas para resolución de casos de maxilares atróficos.",
    },
    {
      id: 3,
      text: "Manejo de implantes no convencionales, técnica all on four.",
    },
    {
      id: 4,
      text: "Principios biomecánicos de los implantes cigomáticos, uso de minipilares angulados.",
    },
    {
      id: 5,
      text: "Clasificación anatómica de los maxilares atróficos e indicación quirúrgica correspondiente.",
    },
    {
      id: 6,
      text: "Uso combinado de implantes cigomáticos con implantes convencionales, principios biomecánicos, distribución y planificación protésica.",
    },
    {
      id: 7,
      text: "Planificación virtual, estudios solicitados, confección de guías quirúrgicas, impresión 3D, diferentes softwares.",
    },
    {
      id: 8,
      text: "Implantes cigomáticos unilaterales, indicaciones.",
    },
    {
      id: 9,
      text: "Resolución de casos complejos.",
    },
    {
      id: 10,
      text: "Complicaciones, tasa de incidencia, resolución de complicaciones intra y postoperatorias.",
    },
    {
      id: 11,
      text: "Conceptos básicos de carga inmediata.",
    },
    {
      id: 12,
      text: "Diseño y confección de prótesis provisional inmediata.",
    },
    {
      id: 13,
      text: "Aditamentos protésicos, prótesis cigomáticas, transfer, transmucosos, toma de impresiones, técnica convencional y digital.",
    },
    {
      id: 14,
      text: "Flujo de laboratorio completo convencional y digital.",
    },
  ];


  return (

    <div className="w-full tablet:w-3/4 m-auto mt-20 bg-White rounded-lg shadow-lg">
      <h2 className="w-full title-sections font-Bold text-Beige bg-DarkBlue py-5 px-2 text-center">
        Actividad Teórica sobre Técnica Quirúrgica – Técnica Protésica
      </h2>
      <ul className="list-none font-Poppins text-sm py-5 ps-2 space-y-2 text-DarkCharcoal tablet:text-base">
        
        {topics.map((topic) => (
          <li 
          key={topic.id}
          className=' py-2'
          >✅{topic.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomeCursoTeorico
