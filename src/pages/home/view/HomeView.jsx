import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import HomeHero from "../components/HomeHero/HomeHero";
import HomeDirectores from "../components/HomeDirectores";
import HomeCursoBrief from "../components/HomeBrief/HomeCursoBrief";
import HomeGaleria from "../components/HomeGaleria/HomeGaleria";
import HomeCursoHighlights from "../components/HomeCursoHighlights";
import HomeCursoFechas from "../components/HomeCursoFechas";


import HomeCursoObjetivo from "../components/HomeCursoObjetivo";
import HomeCursoTeorico from "../components/HomeCursoTeorico";
import HomeCursoPractico from "../components/HomeCursoPractico";
import HomeCursoResumen from "../components/HomeResumen/HomeCursoResumen";
import SectionWrapper from "../../../components/sectionWrapper/SectionWrapper";
import HomeFormView from "../components/HomeFormInscripcion/HomeFormView";
import HomeCusoInfo from "../components/HomeCursoInfo";

const HomeView = () => {
  const { t } = useTranslation("translation", { keyPrefix: "home" });
  const homeContactoRef = useRef(null);

  return (
    <div>
      <HomeHero
        homeContactoRef={homeContactoRef}
      />

      <SectionWrapper>
        <HomeCursoBrief />
      </SectionWrapper>

      <SectionWrapper>
        <HomeDirectores />
      </SectionWrapper>

      <SectionWrapper>
        <HomeCursoObjetivo />
      </SectionWrapper>

      <SectionWrapper>
        <HomeCusoInfo />
      </SectionWrapper>

      <SectionWrapper>
        <HomeCursoHighlights />
      </SectionWrapper>

      {/* <SectionWrapper>
        <HomeCursoTeorico />
      </SectionWrapper> */}

      <SectionWrapper>
        <HomeGaleria />
      </SectionWrapper>

      {/* <SectionWrapper>
        <HomeCursoPractico />
      </SectionWrapper> */}

      <SectionWrapper>
        <HomeCursoResumen />
      </SectionWrapper>

      {/* <SectionWrapper>
        <HomeCursoFechas />
      </SectionWrapper> */}

      <SectionWrapper>
        <HomeFormView
          homeContactoRef={homeContactoRef}
        />
      </SectionWrapper>

    </div>
  );
};

export default HomeView;
