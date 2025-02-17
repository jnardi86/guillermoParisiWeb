import { useEffect } from "react";
import Swal from "sweetalert2";

const PopupPacientes = () => {
    useEffect(() => {
        // Solo mostrar el popup si estamos en la Home "/"
        if (window.location.pathname === "/") {
            Swal.fire({
                title: "¿Sos paciente?",
                text: "Hacé clic aquí para ir a la sección de pacientes",
                icon: "info",
                confirmButtonText: "Ir a Pacientes",
                confirmButtonColor: "#3956dd",
                showCancelButton: true,
                cancelButtonText: "Cerrar",
                backdrop: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "/pacientes"; // Redirecciona a /pacientes
                }
            });
        }
    }, []);

    return null;
};

export default PopupPacientes;
