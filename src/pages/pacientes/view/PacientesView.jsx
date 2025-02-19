import React, { useRef } from 'react'

import { useTranslation } from 'react-i18next'
import PacientesHero from '../components/PacientesHero';

import PacientesTestimonios from '../components/PacientesTestimonios';
import PacientesContacto from '../components/PacientesContacto';
import PacientesInfoView from '../components/pacientesInfo/PacientesInfoView';
import AnimatedSection from '../../../components/animatedSection/AnimatedSection';


const PacientesView = () => {

  const { t } = useTranslation("translation", { keyPrefix: "patients" });
  const contactoRef = useRef(null);


  return (
    <div>
      <PacientesHero
        contactoRef={contactoRef}
      />
      <AnimatedSection
        direction='left'
        triggerOnce
      >
        <PacientesInfoView />
      </AnimatedSection>
      <AnimatedSection
        direction='right'
        triggerOnce
      >
        <PacientesTestimonios />
      </AnimatedSection>
      <AnimatedSection
        direction='right'
        triggerOnce
      >
        <PacientesContacto
          contactoRef={contactoRef}
        />
      </AnimatedSection>
    </div>
  )
}

export default PacientesView
