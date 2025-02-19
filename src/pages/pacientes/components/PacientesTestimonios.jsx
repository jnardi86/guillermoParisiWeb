import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

import "swiper/css";
import 'swiper/css/navigation';


const PacientesTestimonios = () => {
  
  const testimonios = [
    {
      nombre: "Fernando",
      opinion: "Los implantes cigomáticos cambiaron mi vida. Ahora puedo sonreír sin miedo y con confianza.",
      imagen: "/images/img_swiper_mobile.png",
    },
    {
      nombre: "Graciela",
      opinion: "Gracias al Dr. Parisi, recuperé mi confianza y la funcionalidad de mi boca en tiempo récord.",
      imagen: "/images/img2_swiper_mobile.png",
    },
    {
      nombre: "Piri",
      opinion: "Excelente atención y resultados increíbles. ¡Lo recomiendo totalmente a cualquier persona!",
      imagen: "/images/img3_swiper_mobile.png",
    },
  ];

  return (
    <section className="w-full px-6 mt-60">
      {/* Título con estilo mejorado */}
      <h2 className="font-Poppins text-4xl font-ExtraBold text-Black text-center mb-8 leading-relaxed desktop:text-6xl">
        Historias Reales <span className="bg-Blue text-White py-2">Sonrisas Reales ! </span>
      </h2>
      <p className="text-lg font-Poppins text-center text-DarkCharcoal mb-12 desktop:text-xl">
        Descubre cómo los implantes cigomáticos han cambiado la vida de nuestros pacientes.
      </p>

      {/* Swiper para testimonios */}
      <Swiper
       modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        loop= {true}
        breakpoints={{
          1024: { slidesPerView: 2 },
          1440: { slidesPerView: 3 },
        }}
        className="w-full h-[600px] tablet:w-96 laptop1:w-full mx-auto"
      >
        {testimonios.map((testimonio, index) => (
          <SwiperSlide key={index}>
            <div className="bg-White w-full h-[500px] rounded-lg shadow-LightShadowGrey p-4 flex flex-col items-center text-center border border-solid border-LightGray_1">
              <img
                src={testimonio.imagen}
                alt={testimonio.nombre}
                className="w-60 h-60 object-cover rounded-full mb-6"
              />
              <h3 className="font-Poppins text-3xl font-ExtraBold text-Blue mb-3">
                {testimonio.nombre}
              </h3>
              <p className="text-lg font-Poppins text-Black px-6">
                "{testimonio.opinion}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PacientesTestimonios;

