import React, { useState, useEffect, useRef } from "react";
import { GlobalContext } from "../context/GlobalContext";

const GlobalProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileView, setMobileView] = useState(window.innerWidth < 768);
  const [desktopView, setDesktopView] = useState(window.innerWidth >= 1440);

  const directoresRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setMobileView(windowWidth < 768 ? true : false);
    setDesktopView(windowWidth >= 1440 ? true : false);

  }, [windowWidth]);

  return (
    <GlobalContext.Provider
      value={{
        mobileView,
        desktopView,
        directoresRef,
        scrollToSection
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
