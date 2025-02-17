import React, { useRef } from 'react'

import { useTranslation } from 'react-i18next'
import PacientesHero from '../components/PacientesHero';

import PacientesTestimonios from '../components/PacientesTestimonios';
import PacientesContacto from '../components/PacientesContacto';
import PacientesInfoView from '../components/pacientesInfo/PacientesInfoView';


const PacientesView = () => {

  const { t } = useTranslation("translation", { keyPrefix: "patients" });
  const contactoRef = useRef(null);


  return (
    <div>

      <PacientesHero
        contactoRef={contactoRef}
      />
      <PacientesInfoView/>
      <PacientesTestimonios />
      <PacientesContacto
        contactoRef={contactoRef}
      />

    </div>
  )
}

export default PacientesView
