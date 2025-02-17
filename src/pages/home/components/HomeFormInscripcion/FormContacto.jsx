import React, { useState } from "react";
import TextInputComponent from "../../../../components/Form/TextInputComponent";
import { useFormContacto } from "./useFormContacto";
import { useTranslation } from "react-i18next";
import countryList from "react-select-country-list";

const FormContacto = () => {
  const { formData, handleChange, handleSubmitContacto, isSubmitting } =
    useFormContacto();

  const { t } = useTranslation("translation", { keyPrefix: "home" });

  // Obtener la lista de países
  const countryOptions = countryList().getData();
  

  return (
    <div className="w-full tablet:w-3/4 laptop1:w-1/2 mx-auto rounded-lg bg-Blue shadow-lg p-6 mb-20">
      {/* <h2 className="title-sections font-Bold text-DarkBlue pb-5 text-center">
        {t("home_form_contacto_title")}
      </h2> */}
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
        {/* <TextInputComponent
          id="pais"
          label={t("home_form_contacto_country")}
          value={formData.pais}
          onChange={handleChange}
        /> */}
        <div>
          <label
            className="w-full block font-Poppins text-xl text-White font-Regular mb-2"
            htmlFor="pais"
          >
            {t("home_form_inscription_country")}
          </label>
          <select
            id="pais"
            name="pais"
            value={formData.pais}
            onChange={handleChange} 
            required
            className="w-full p-3 font-Poppins text-xl text-Black font-Regular rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
          >
            <option className="font-Poppins text-Black text-lg" value="" disabled>
              {t("home_form_inscription_country")}
            </option>
            {/* Mapear las opciones de países */}
            {countryOptions.map((country) => (
              <option
                key={country.value}
                className="font-Poppins text-Black text-lg"
                value={country.label}
              >
                {country.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            className="block font-Poppins text-xl text-White font-Regular mb-2"
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
            className="w-full font-Poppins text-Black text-lg p-3 bg-White rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
          ></textarea>
        </div>

        <div className="laptop1:flex laptop1:justify-center">
          <button
            type="submit"
            className="w-full bg-White text-Blue font-Poppins text-2xl font-SemiBold py-3 rounded-lg hover:bg-teal-700 transition duration-300 laptop1:w-1/2"
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
