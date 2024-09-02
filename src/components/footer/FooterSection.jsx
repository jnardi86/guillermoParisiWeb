import React from "react";

const FooterSection = ({ title, children }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-4 tablet:px-3 tablet:justify-start">
      <h3 className="font-Poppins text-base font-bold mb-1">{title}</h3>
      {children}
    </div>
  );
};

export default FooterSection;
