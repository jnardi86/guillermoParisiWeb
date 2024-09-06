import React from "react";
import FooterSection from "./FooterSection";
import FooterLink from "./FooterLink";
import { useGlobal } from "../../hooks/useGlobal";
import Contact from "./svgIcons/Contact";
import { ContactEmail } from "./svgIcons/ContactEmail";


const Footer = () => {

  const { directoresRef, scrollToSection, refs } = useGlobal();
  const homeSections = ["Directores", "Objetivos", "Actividad teórica", "Actividad práctica", "Resumen", "Contacto"]

  return (
    <footer className="bg-DarkCharcoal text-White py-8 flex flex-col">
      <div className="flex flex-col tablet:flex-row tablet:justify-between">

        {/* Columna 1: Residencia Cigomático */}
        <FooterSection title="Residencia Cigomático">
          <ul className="flex flex-col items-center font-Poppins font-Thin text-base py-3">
            {homeSections.map((item) => (
              <FooterLink
                key={item}
                label={item}
                onClick={() => scrollToSection(directoresRef)}
              />
            ))}
          </ul>
        </FooterSection>

        {/* Columna 2: Teléfono e Email */}
        <FooterSection title="Contacto">
          <p className="w-full flex justify-center items-center font-Poppins font-Thin text-base py-3 tablet:pt-3">
            <Contact
              width={"20px"}
              height={"20px"}
              color={"#fff"}
            />
            <a href="tel:+1234567890" className="pl-2 hover:underline">+1 234 567 890</a>
          </p>
          <p className="w-full flex justify-center items-center font-Poppins font-Thin text-base py-3 tablet:py-1">
            <ContactEmail
              width={"20px"}
              height={"20px"}
              color={"#fff"}
            />
            <a href="mailto:info@residenciacigomatico.com" className="pl-2 hover:underline">info@residenciacigomatico.com</a></p>
        </FooterSection>

        {/* Columna 3: Pacientes */}
        <FooterSection title="Pacientes">
          <ul className="flex flex-col items-center font-Poppins font-Thin text-base py-3">
            <FooterLink
              label="Información General"
              onClick={() => scrollToSection(refs.informacionRef)}
            />
            <FooterLink
              label="Cuidado Postoperatorio"
              onClick={() => scrollToSection(refs.cuidadoRef)}
            />
            <FooterLink
              label="Guía para Pacientes"
              onClick={() => scrollToSection(refs.guiaRef)}
            />
            <FooterLink
              label="Preguntas Frecuentes"
              onClick={() => scrollToSection(refs.faqRef)}
            />
          </ul>
        </FooterSection>
      </div>
      <div className=" font-Montserrat font-Regular text-sm pt-6 text-center">
          <p>Desarrollado por El Hornero</p>
        </div>
    </footer>
  );
};

export default Footer;

