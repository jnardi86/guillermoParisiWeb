import ToothIcon from "../../../../components/icons/ToothIcon";

const PacientesInfo = () => {
  return (
    <section className="w-full py-16 px-6 bg-White">

      {/* Fila 1 - Introducción */}
      <div className="w-full flex flex-col laptop1:flex-row items-center gap-12 mb-12">
        <div className="flex-1 text-center order-1 laptop1:order-none">
          <h2 className="font-Poppins text-4xl font-ExtraBold mb-6">
            ¿Sabés qué son los <span className="text-Blue text-5xl px-2 py-1">Implantes Cigomáticos?</span>
          </h2>
          <p className="font-Poppins text-Black font-Regular text-start text-xl pl-6 space-y-3">
            Son una solución innovadora para pacientes con atrofia maxilar severa,
            permitiendo la fijación de prótesis sin necesidad de injertos óseos.
          </p>
        </div>
        <div className="flex-1 order-2 laptop1:order-none laptop1:flex laptop1:items-center laptop1:justify-center">
          <img
            src="/images/img2_info_patient_mobile.png"
            alt="Implante Cigomático"
            className="w-full h-[450px] shadow-LightShadowGrey laptop1:rounded-full laptop1:w-[350px] laptop1:h-[350px]"
          />
        </div>
      </div>

      {/* Fila 2 - Beneficios */}
      <div className="flex flex-col laptop1:flex-row items-center gap-12 mb-12">
        <div className="flex-1 order-4 laptop1:order-none laptop1:flex laptop1:items-center laptop1:justify-center">
          <img
            src="/images/img_info_patient_mobile.png"
            alt="Cirugía Implante"
            className="w-full h-[450px] shadow-LightShadowGrey laptop1:rounded-full laptop1:w-[350px] laptop1:h-[350px]"
          />
        </div>
        <div className="flex-1 text-center laptop1:text-left order-3 laptop1:order-none">
          <h2 className="font-Poppins text-center text-4xl font-ExtraBold mb-6">
            ¿Conoces sus <span className="text-Blue text-5xl px-2 py-1">beneficios?</span>
          </h2>
          <div className="tablet:flex tablet:justify-center">
            <ul className="font-Poppins text-start text-lg pl-6 space-y-3 tablet:px-6">
              <li className="flex gap-4">
                <div className="flex items-center">
                  <ToothIcon fill="#3956dd"
                  />
                </div>
                Sin necesidad de injertos óseos.
              </li>
              <li className="flex gap-4 jus">
                <div className="flex items-center">
                  <ToothIcon fill="#3956dd"
                  />
                </div>
                Fijación estable y duradera.
              </li>
              <li className="flex gap-4 jus">
                <div className="flex items-center">
                  <ToothIcon fill="#3956dd"
                  />
                </div>
                Recuperación más rápida.
              </li>
              <li className="flex gap-4 jus">
                <div className="flex items-center">
                  <ToothIcon fill="#3956dd"
                  />
                </div>
                Mejora estética y funcional.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Fila 3 - Procedimiento */}
      <div className="flex flex-col laptop1:flex-row items-center gap-12 mb-12">
        <div className="flex-1 text-center laptop1:text-left order-5 laptop1:order-none">
          <h2 className="font-Poppins text-center text-4xl font-ExtraBold mb-6">
            ¿Cómo es el <span className="text-Blue text-5xl px-2 py-1">proceso paso a paso?</span>
          </h2>
          <p className="font-Poppins text-start text-lg pl-6 space-y-3">
            Los implantes cigomáticos se fijan en el hueso cigomático (pómulo),
            que proporciona una base estable sin necesidad de injertos óseos.
            En una única intervención, se colocan los implantes y se anclan
            los dientes fijos provisionales el mismo día.
          </p>
        </div>
        <div className="flex-1 order-6 laptop1:order-none laptop1:flex laptop1:items-center laptop1:justify-center">
          <img
            src="/images/img3_info_patient_mobile.png"
            alt="Procedimiento Implante"
            className="w-full h-[450px] shadow-LightShadowGrey laptop1:rounded-full laptop1:w-[350px] laptop1:h-[350px]"
          />
        </div>
      </div>

      {/* Fila 4 - Postoperatorio */}
      <div className="flex flex-col laptop1:flex-row items-center gap-12">
        <div className="flex-1 order-8 laptop1:order-none laptop1:flex laptop1:items-center laptop1:justify-center">
          <img
            src="/images/img4_info_patient_mobile.png"
            alt="Postoperatorio Implante"
            className="w-full h-[450px] shadow-LightShadowGrey laptop1:rounded-full laptop1:w-[350px] laptop1:h-[350px]"
          />
        </div>
        <div className="flex-1 text-center laptop1:text-left order-7 laptop1:order-none">
          <h2 className="font-Poppins text-center text-4xl font-ExtraBold mb-6">
            ¿Qué pasa después de la <span className="text-Blue text-5xl px-2 py-1">cirugía?</span>
          </h2>
          <div className=" tablet:flex tablet:justify-center">
            <ul className="font-Poppins text-start text-lg pl-6 space-y-3 tablet:px-6">
              <li className="flex gap-4">
                <div className="flex items-center">
                  <ToothIcon fill="#3956dd"
                  />
                </div>
                Mínima inflamación y molestias leves.
              </li>
              <li className="flex gap-4 items">
                <div className="flex items-center">
                  <ToothIcon fill="#3956dd"
                  />
                </div>
                Dientes fijos provisionales en el mismo día.
              </li>
              <li className="flex gap-4 items">
                <div className="flex items-center">
                  <ToothIcon fill="#3956dd"
                  />
                </div>
                En 3-4 meses se colocan los dientes definitivos.
              </li>
              <li className="flex gap-4 items">
                <div className="flex items-center">
                  <ToothIcon fill="#3956dd"
                  />
                </div>
                Cuidados simples: frío local y buena higiene.
              </li>
            </ul>
          </div>

        </div>
      </div>



    </section>
  );
};

export default PacientesInfo;
