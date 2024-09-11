import React, { useState } from "react";
import TextInputComponent from "../../../../components/Form/TextInputComponent";
import { useFormContacto } from "./useFormContacto";
import { useTranslation } from "react-i18next";

const FormContacto = () => {
  const { formData, handleChange, handleSubmitContacto, isSubmitting } =
    useFormContacto();

  const { t } = useTranslation("translation", { keyPrefix: "home" });

  return (
    <div className="w-full tablet:w-3/4 laptop1:w-1/2 laptop2:w-1/3 m-auto rounded-lg bg-White shadow-lg p-6 mt-20 mb-20">
      <h2 className="title-sections font-Bold text-DarkBlue pb-5 text-center">
        {t("home_form_contacto_title")}
      </h2>
      <form
        onSubmit={handleSubmitContacto}
        className="space-y-4"
        disabled={isSubmitting}
      >
        <TextInputComponent
          id="nombre"
          label={t("home_form_contacto_name")}
          value={formData.nombre}
          onChange={handleChange}
        />
        <TextInputComponent
          id="apellido"
          label={t("home_form_contacto_lastname")}
          value={formData.apellido}
          onChange={handleChange}
        />
        <TextInputComponent
          id="email"
          label={t("home_form_contacto_email")}
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextInputComponent
          id="pais"
          label={t("home_form_contacto_country")}
          value={formData.pais}
          onChange={handleChange}
        />

        <div>
          <label
            className="block font-Poppins text-base text-DarkBlue font-Semibold mb-2"
            htmlFor="consulta"
          >
            {t("home_form_contacto_question")}
          </label>
          <textarea
            id="consulta"
            name="consulta"
            value={formData.consulta}
            onChange={handleChange}
            rows="4"
            className="w-full font-Poppins text-base p-3 bg-LightGray_2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-TealGreen text-White font-Montserrat text-lg font-bold py-3 rounded-lg hover:bg-teal-700 transition duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? t("home_form_contacto_sending")
              : t("home_form_contacto_send")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormContacto;
