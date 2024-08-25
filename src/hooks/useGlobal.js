import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const useGlobal = () => {
  const { mobileView, directoresRef, scrollToSection } =
    useContext(GlobalContext);

  return {
    mobileView,
    directoresRef,
    scrollToSection,
  };
};
