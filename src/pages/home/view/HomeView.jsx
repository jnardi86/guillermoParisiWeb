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

const HomeView = () => {
  const { t } = useTranslation("translation", { keyPrefix: "home" });

  return (
    <div>
      <HomeHero />
      <HomeCursoBrief />
      <HomeDirectores />
      <HomeCursoObjetivo />
      <HomeCursoHighlights />
      <HomeCursoTeorico />
      <HomeGaleria />
      <HomeCursoPractico />
      <HomeCursoResumen />
      <HomeCursoFechas />
      <HomeFormInscripcion />
    </div>
  );
};

export default HomeView;
