import React from "react";
import { useForms } from "./useForms";
import FormInscripcion from "./FormInscripcion";
import FormContacto from "./FormContacto";

const HomeFormView = () => {
  const { isToggled, onToggle } = useForms();

  return (
    <div className="w-full flex flex-col items-center ">
      <div className="w-[300px] rounded-full m-auto  py-10 flex flex-col items-center justify-center bg-TealGreen">
        <p className="text-xl text-White pb-5">{isToggled ? "Quiero saber más" : "Quiero pre-inscribirme"}</p>
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
