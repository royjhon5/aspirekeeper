import React, { ReactNode } from "react";

interface ButtonPrimaryProps {
  children: ReactNode;
  addClass?: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ children, addClass = "" }) => {
  return (
    <button
      className={`relative overflow-hidden px-6 py-3 h-12 bg-green-900 text-white border-none rounded-md text-md font-md cursor-pointer group ${addClass}`}
    >
      <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
      <span className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
      <span className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-50 transition-transform duration-1000 origin-left"></span>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default ButtonPrimary;
