import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const useGlobal = () => {
  const { mobileView, desktopView, directoresRef, scrollToSection } =
    useContext(GlobalContext);

  return {
    mobileView,
    desktopView,
    directoresRef,
    scrollToSection,
  };
};
