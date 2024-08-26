import React from "react";
import SwitchLanguage from "../navbar/components/SwitchLanguage";
import { useTranslation } from "react-i18next";
import { useGlobal } from "../../hooks/useGlobal";

const Footer = () => {
  const {directoresRef, scrollToSection} = useGlobal();
  return (
    <footer className="bg-DarkCharcoal text-White py-8">
      <div className="mx-auto flex justify-between">
        {/* Columna 1: Residencia Cigomático */}
        <div>
          <h3 className="text-xl font-bold mb-4">Residencia Cigomático</h3>
          <ul>
            <li>
              <button onClick={() => scrollToSection(directoresRef)} className="hover:underline">
                Directores
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(directoresRef)} className="hover:underline">
                Objetivos
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(directoresRef)} className="hover:underline">
                Actividad teórica
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(directoresRef)} className="hover:underline">
              Actividad práctica
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(directoresRef)} className="hover:underline">
              Resumen
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(directoresRef)} className="hover:underline">
              Contacto
              </button>
            </li>
          </ul>
        </div>

        {/* Columna 2: Teléfono e Email */}
        <div>
          <h3 className="text-xl font-bold mb-4">Teléfono e Email</h3>
          <p>Teléfono: <a href="tel:+1234567890" className="hover:underline">+1 234 567 890</a></p>
          <p>Email: <a href="mailto:info@residenciacigomatico.com" className="hover:underline">info@residenciacigomatico.com</a></p>
        </div>

        {/* Columna 3: Pacientes */}
        <div>
          <h3 className="text-xl font-bold mb-4">Pacientes</h3>
          <ul>
            <li>
              <button onClick={() => scrollToSection(refs.informacionRef)} className="hover:underline">
                Información General
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(refs.cuidadoRef)} className="hover:underline">
                Cuidado Postoperatorio
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(refs.guiaRef)} className="hover:underline">
                Guía para Pacientes
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(refs.faqRef)} className="hover:underline">
                Preguntas Frecuentes
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
