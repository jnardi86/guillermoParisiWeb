import { useState } from "react";

export const useFormContacto = () => {
  const urlFetchAPI =
    "https://script.google.com/macros/s/AKfycbxGGMmvHJYomFaKQnhK2jGbrAsfxQ_EKuIxIOJH8cFMtNk3wr06XxpMx06Uv_vBRofxaQ/exec";
  //   Link Spreadsheet residenciacigomatics@gmail.com https://docs.google.com/spreadsheets/d/112iyCDucbWusplhDVQ0Fud2bbobQfqfvRK_urcVH3GU/edit?gid=0#gid=0

  const [btnSubmitText, setBtnSubmitText] = useState("Enviar");

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

  const handleSubmitContacto = async (e) => {
    e.preventDefault();
    setBtnSubmitText("Enviando");

    try {
      const fetchData = {
        ...formData,
        action: "contacto",
      };
      // Fetch Gmail to send email
      const jsonResponse = await fetch(urlFetchAPI, {
        method: "POST",
        redirect: "follow",
        dataType: "json",
        accepts: "application/json",
        body: JSON.stringify(fetchData),
      });

      // Handle the response from the Google Apps Script endpoint
      const objectResponse = await jsonResponse.json();
      console.log("Response is: ", objectResponse);
      setBtnSubmitText("Enviar");
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return {
    btnSubmitText,
    formData,
    setFormData,
    handleChange,
    handleSubmitContacto,
  };
};
