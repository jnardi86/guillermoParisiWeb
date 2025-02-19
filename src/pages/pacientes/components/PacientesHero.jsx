import React from "react";
import { useGlobal } from "../../../hooks/useGlobal";
import { Zoom, Fade } from "react-awesome-reveal";

const PacientesHero = ({ contactoRef }) => {
  const { mobileView } = useGlobal();

  const handleScrollToContact = () => {
    if (contactoRef?.current) {
      contactoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative w-full h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${mobileView ? '/images/hero_img_patients_mobile.png' : '/images/hero_img_patients_desktop.png'})` }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-Blue bg-opacity-60 tablet:bg-opacity-80"></div>

      {/* Contenido con efectos */}
      <div className="relative z-10 text-White px-6 desktop:mt-4 laptop1:px-20">
        <Zoom triggerOnce duration={1500}>
          <h1 className="w-full font-Poppins text-center font-Semibold text-5xl text-White leading-tight mb-8 tablet:leading-relaxed desktop:text-start laptop1:text-6xl laptop1:leading-[5rem]">
            Recupera tu <span className="bg-White text-Blue px-4 font-ExtraBold">sonrisa</span> y calidad de <span className="bg-White text-Blue px-4 font-ExtraBold">vida</span>
          </h1>
        </Zoom>

        <Fade direction="up" delay={500} triggerOnce>
          <p className="font-Montserrat text-xl mb-10 text-center desktop:text-2xl desktop:text-start">
            Una solución avanzada para pacientes con pérdida ósea severa.
          </p>
        </Fade>

        <Fade direction="up" delay={800} triggerOnce>
          <div className="w-full flex justify-center">
            <button
              onClick={handleScrollToContact}
              className="text-center bg-White  text-Blue font-Poppins text-xl font-Bold py-4 px-4 rounded-lg shadow-DarkBlue shadow-lg transition-all hover:bg-Blue hover:text-White cursor-pointer"
            >
              Agenda tu consulta
            </button>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default PacientesHero;
