import React, { useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

const GlobalProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileView, setMobileView] = useState(true);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setMobileView(windowWidth < 1200 ? true : false);
  }, [windowWidth]);

  return (
    <GlobalContext.Provider
      value={{
        mobileView,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
