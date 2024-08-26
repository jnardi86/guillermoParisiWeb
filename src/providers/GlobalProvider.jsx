import React, { useState, useEffect, useRef } from "react";
import { GlobalContext } from "../context/GlobalContext";

const GlobalProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileView, setMobileView] = useState(true);

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
    setMobileView(windowWidth < 720 ? true : false);
  }, [windowWidth]);

  return (
    <GlobalContext.Provider
      value={{
        mobileView,
        directoresRef,
        scrollToSection
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
