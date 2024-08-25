import React, { useState } from "react";

const HomeFormInscripcion = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    pais: "",
    fechaCurso: "",
    consultas: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send the data to your API or service
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <div className="w-3/4 m-auto rounded-lg bg-White shadow-lg p-6 mt-20 mb-20">
      <h2 className="text-3xl font-Montserrat font-Bold pb-5  text-center">
        Contactanos
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full p-3 bg-LightGray_2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>

        <div>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="apellido"
          >
            Apellido
          </label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-LightGray_2 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>

        <div>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 bg-LightGray_2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>

        <div>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="telefono"
          >
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
            className="w-full p-3 bg-LightGray_2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>

        <div>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="pais"
          >
            País
          </label>
          <input
            type="text"
            id="pais"
            name="pais"
            value={formData.pais}
            onChange={handleChange}
            required
            className="w-full p-3 bg-LightGray_2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
        </div>

        <div>
          <label
            className="w-1/4 mb-2"
            htmlFor="fechaCurso"
          >
            Fecha del Curso
          </label>
          <select
            id="fechaCurso"
            name="fechaCurso"
            value={formData.fechaCurso}
            onChange={handleChange}
            required
            className="w-full p-3 bg-LightGray_2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
          >
            <option value="" disabled>
              Selecciona una fecha
            </option>
            <option value="2-6/12">2 al 6 de Diciembre 2024</option>
          </select>
        </div>

        <div>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="consultas"
          >
            Consultas
          </label>
          <textarea
            id="consultas"
            name="consultas"
            value={formData.consultas}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 bg-LightGray_2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-TealGreen text-White font-bold py-3 rounded-lg hover:bg-teal-700 transition duration-300"
          >
            Enviar Inscripción
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomeFormInscripcion;
