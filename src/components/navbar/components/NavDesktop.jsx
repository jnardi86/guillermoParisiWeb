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
        <div className=" flex flex-col text-White py-4">
          <h1 className="font-Poppins font-Semibold text-center text-2xl tablet:text-base tablet:text-start laptop2:text-2xl leading-relaxed">Residencia Cigomáticos</h1>
          <p className="font-Poppins font-Regular text-center text-xl tablet:text-sm laptop2:text-xl">All On X</p>
        </div>

        <div className="flex items-center">
          <ul className="flex space-x-4">
            {navItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className="font-Poppins text-lg font-Regular text-White p-5 tablet:text-base hover:underline hover:text-Beige" to={item.link}>
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
