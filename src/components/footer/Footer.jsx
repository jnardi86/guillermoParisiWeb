import React from "react";
import FooterSection from "./FooterSection";
import FooterLink from "./FooterLink";
import { useGlobal } from "../../hooks/useGlobal";
import Contact from "./svgIcons/Contact";
import { ContactEmail } from "./svgIcons/ContactEmail";
import { useTranslation } from "react-i18next";


const Footer = () => {

  const { directoresRef, scrollToSection, refs } = useGlobal();
  const { t } = useTranslation("translation", { keyPrefix: "footer" });

  const homeSections = ["section_one_item1", "section_one_item2", "section_one_item3", "section_one_item4", "section_one_item5", "section_one_item6"]

  return (
    <footer className="bg-DarkCharcoal text-White py-8 flex flex-col">
      <div className="flex flex-col tablet:flex-row tablet:justify-between">

        {/* Columna 1: Residencia Cigomático */}
        <FooterSection title={t('section_one_title')}>
          <ul className="flex flex-col items-center font-Poppins font-Thin text-base py-3">
            {homeSections.map((item) => (
              <FooterLink
                key={item}
                label={t(item)}
                onClick={() => scrollToSection(directoresRef)}
              />
            ))}
          </ul>
        </FooterSection>

        {/* Columna 2: Teléfono e Email */}
        <FooterSection title={t('section_two_title')}>
          <p className="w-full flex justify-center items-center font-Poppins font-Thin text-base py-3 tablet:pt-3">
            <Contact
              width={"20px"}
              height={"20px"}
              color={"#fff"}
            />
            <a href="tel:+1234567890" className="pl-2 hover:underline">{t('section_two_item1')}</a>
          </p>
          <p className="w-full flex justify-center items-center font-Poppins font-Thin text-base py-3 tablet:py-1">
            <ContactEmail
              width={"20px"}
              height={"20px"}
              color={"#fff"}
            />
            <a href="mailto:info@residenciacigomatico.com" className="pl-2 hover:underline">{t('section_two_item2')}</a></p>
        </FooterSection>

        {/* Columna 3: Pacientes */}
        <FooterSection title={t('section_three_title')}>
          <ul className="flex flex-col items-center font-Poppins font-Thin text-base py-3">
            <FooterLink
              label={t('section_three_item1')}
              onClick={() => scrollToSection(refs.informacionRef)}
            />
            <FooterLink
              label={t('section_three_item2')}
              onClick={() => scrollToSection(refs.cuidadoRef)}
            />
            <FooterLink
              label={t('section_three_item3')}
              onClick={() => scrollToSection(refs.guiaRef)}
            />
            <FooterLink
              label={t('section_three_item4')}
              onClick={() => scrollToSection(refs.faqRef)}
            />
          </ul>
        </FooterSection>
      </div>
      <div className=" font-Montserrat font-Regular text-sm pt-6 text-center">
          <p>{t('section_develop')}</p>
        </div>
    </footer>
  );
};

export default Footer;

