import React from "react";
import { useForms } from "./useForms";
import FormInscripcion from "./FormInscripcion";
import FormContacto from "./FormContacto";
import { useTranslation } from "react-i18next";

const HomeFormView = () => {
  const { isToggled, onToggle } = useForms();
  const { t } = useTranslation("translation", { keyPrefix: "home" });

  return (
    <div className="w-full flex flex-col items-center ">
      <div className="w-full tablet:w-3/4 laptop1:w-1/2 laptop2:w-1/3 m-auto py-2 flex flex-col items-center justify-center bg-DarkBlue">
        {/* <p className="text-xl text-White pb-5">{isToggled ? "Quiero saber más" : "Quiero pre-inscribirme"}</p> */}
        <p className="font-Poppins font-Regular text-xl text-center text-White pb-5">{t('home_form_contacto_toggle')}</p>
        <label className="relative inline-block w-16 h-8">
          <input
            type="checkbox"
            checked={isToggled}
            onChange={onToggle}
            className="sr-only peer"
          />
          <div className="w-full h-full bg-DarkCharcoal rounded-full peer-checked:bg-Beige transition-colors"></div>
          <div className="absolute left-1 top-1 w-6 h-6 bg-White rounded-full transition-transform peer-checked:translate-x-8"></div>
        </label>
      </div>

      {isToggled ? <FormInscripcion /> : <FormContacto />}
    </div>
  );
};

export default HomeFormView;
