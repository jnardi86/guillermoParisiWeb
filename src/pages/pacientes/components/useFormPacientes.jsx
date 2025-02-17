import { useState } from "react";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

export const useFormPacientes = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const { t } = useTranslation("translation", { keyPrefix: "patients" });

  const urlFetchAPI =
    "https://script.google.com/macros/s/AKfycbxGGMmvHJYomFaKQnhK2jGbrAsfxQ_EKuIxIOJH8cFMtNk3wr06XxpMx06Uv_vBRofxaQ/exec";

  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialFormData = {
    nombre: "",
    apellido: "",
    email: "",
    pais: "",
    consulta: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitPacientes = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const fetchData = {
        ...formData,
        action: "contacto_pacientes",
        currentLanguage: currentLanguage,
      };
      
      const jsonResponse = await fetch(urlFetchAPI, {
        method: "POST",
        redirect: "follow",
        dataType: "json",
        accepts: "application/json",
        body: JSON.stringify(fetchData),
      });

      const objectResponse = await jsonResponse.json();
      setFormData(initialFormData);
      setIsSubmitting(false);

      const title = objectResponse.status
        ? "Mensaje enviado exitosamente"
        : "Error al enviar el mensaje, intente nuevamente más tarde";
      Swal.fire({
        title: `${title}`,
        background: "#FAFAFA",
        color: "#025951",
        iconColor: "#025951",
        icon: "success",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#038C7F",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return {
    formData,
    setFormData,
    handleChange,
    handleSubmitPacientes,
    isSubmitting,
  };
};
