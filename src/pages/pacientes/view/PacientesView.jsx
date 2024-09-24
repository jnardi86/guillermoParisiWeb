import React from 'react'
import HomeHero from '../../home/components/HomeHero/HomeHero'
import { useTranslation } from 'react-i18next'

const PacientesView = () => {

  const { t } = useTranslation ("translation", { keyPrefix: "patients" });


  return (
    <div>
      <HomeHero />
      <div className='py-40 px-3'>
        <h1 className="title-sections font-Bold text-center pb-5 text-DarkBlue">{t('patients_title')}</h1>
      </div>

    </div>
  )
}

export default PacientesView
