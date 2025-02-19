import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const PopupPacientes = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Detectar la URL correcta en HashRouter
        // const currentPath = window.location.hash; // Obtiene la ruta con el `#`
        // console.log("seteo de ruta", currentPath);
        // console.log(window.location.hash);
        const currentPath = window.location.pathname;
        console.log("Ruta actual con pathname:", currentPath);

        const popupShown = localStorage.getItem("popupShown");

        // Solo mostrar si es la Home (`#/` o `#/home`) y nunca en `/pacientes`
        if (!popupShown && (currentPath === "#/" || currentPath === "/")) {
            setShowPopup(true);
            localStorage.setItem("popupShown", "true"); // Evita que se muestre otra vez
        }
    }, []);

    useEffect(() => {
        if (showPopup) {
            console.log("redigir a pacientes")
            Swal.fire({
                title: "¿Sos paciente?",
                text: "Si sos paciente, hacé clic aquí para ir a la sección especial para vos.",
                icon: "info",
                iconColor: "#3956dd",
                showCancelButton: true,
                confirmButtonText: "Ir a Pacientes",
                confirmButtonColor: "#3956dd",
                cancelButtonColor: "#312f2b",
                cancelButtonText: "Volver",

            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.hash = "#/pacientes"; // ✅ Redirige correctamente con HashRouter
                }
            });

            setShowPopup(false); // Evita que se vuelva a mostrar en esta sesión
        }

    }, [showPopup]);

    return null; // No renderiza nada, solo maneja el popup
};

export default PopupPacientes;
