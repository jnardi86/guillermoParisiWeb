import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "./navItems";
import SwitchLanguage from "./SwitchLanguage";
import { useTranslation } from "react-i18next";
import useNavDesktop from "../hooks/useNavDesktop";

const NavDesktop = () => {
  const { alpha } = useNavDesktop();
  const { t } = useTranslation("translation", { keyPrefix: "navbar" });

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div
        className="flex justify-between items-center px-5"
        style={{
          backgroundColor: `rgba(34, 58, 94, ${alpha}`,
        }}
      >
        <div className="bg-Blue p-5 text-White text-2xl">
          <p>Residencia Cigomáticos</p>
        </div>

        <div className="flex items-center">
          <ul className="flex space-x-4">
            {navItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className="text-White p-5" to={item.link}>
                    {t(item.label)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <SwitchLanguage />
      </div>
    </nav>
  );
};

export default NavDesktop;
