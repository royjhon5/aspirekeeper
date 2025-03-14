import React, { ReactNode } from "react";

interface ButtonPrimaryProps {
  children: ReactNode;
  addClass?: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ children, addClass = "" }) => {
  return (
    <button
      className={`py-3 lg:py-4 px-12 lg:px-16 text-white font-semibold rounded-lg bg-green-900 hover:shadow-orange-md transition-all outline-none cursor-pointer ${addClass}`}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
