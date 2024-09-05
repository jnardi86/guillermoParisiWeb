import React from "react";
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
import HomeFormInscripcion from "../components/HomeFormInscripcion";
import SectionWrapper from "../../../components/sectionWrapper/SectionWrapper";

const HomeView = () => {
  const { t } = useTranslation("translation", { keyPrefix: "home" });

  return (
    <div>
      <HomeHero />

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
        <HomeCursoHighlights />
      </SectionWrapper>

      <SectionWrapper>
        <HomeCursoTeorico />
      </SectionWrapper>

      <SectionWrapper>
        <HomeGaleria />
      </SectionWrapper>

      <SectionWrapper>
        <HomeCursoPractico />
      </SectionWrapper>

      <SectionWrapper>
        <HomeCursoResumen />
      </SectionWrapper>

      <SectionWrapper>
        <HomeCursoFechas />
      </SectionWrapper>

      <SectionWrapper>
        <HomeFormInscripcion />
      </SectionWrapper>

    </div>
  );
};

export default HomeView;
