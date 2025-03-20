"use client";

import { Facebook, Linkedin, Twitter } from "lucide-react";
import React, { useState } from "react";
import { Link as LinkScroll } from "react-scroll";

const Footer: React.FC = () => {
  const [, setActiveLink] = useState<string | null>(null);

  // Define Quick Links
  const links = [
    { name: "Home", to: "home" },
    { name: "Services", to: "services" },
    { name: "About", to: "aboutus" },
    { name: "Testimonial", to: "testimonial" },
    { name: "Blog", to: "blog" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <div className="bg-stone-50 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start">
          <p className="mb-4">
            <strong className="font-medium">Aspire Keeper Solutions</strong>
            <br /> is a private virtual network that has unique features and high security.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md cursor-pointer">
              <Facebook />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md cursor-pointer">
              <Twitter />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md cursor-pointer">
              <Linkedin />
            </div>
          </div>
          <p className="text-gray-400">
            Copyright ©{new Date().getFullYear()} - Aspire Keeper Solutions 2025 | All Rights Reserved
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Quick Links</p>
          <ul className="text-black-500 flex flex-col space-y-2">  {/* Ensure Vertical Layout */}
            {links.map((link) => (
              <li key={link.to}>
                <LinkScroll
                  activeClass="active"
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => setActiveLink(link.to)}
                  className="cursor-pointer hover:text-green-900 transition-all"
                >
                  {link.name}
                </LinkScroll>
              </li>
            ))}
          </ul>
        </div>

        {/* Privacy Policy Section */}
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">
            Privacy Policy | Terms & Conditions
          </p>
          <ul className="text-black-500"></ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
