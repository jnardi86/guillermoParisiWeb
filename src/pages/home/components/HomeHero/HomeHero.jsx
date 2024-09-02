import React from "react";
import {useGlobal} from '../../../../hooks/useGlobal'
import HomeHeroSwiper from "./HomeHeroSwiper";

const HomeHero = () => {
  const { mobileView } = useGlobal();
  
  return (
    <>
      <HomeHeroSwiper />
    </>
  );
};

export default HomeHero;
