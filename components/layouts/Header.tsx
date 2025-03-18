'use client'

import React, { useEffect, useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import Image from 'next/image';
import { Menu, X } from 'lucide-react'; // Icon for mobile menu
import asklogo from '../../public/logo/akslogo.png';

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [scrollActive, setScrollActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      {/* Desktop Header */}
      <header className={`fixed top-0 w-full z-30 bg-white transition-all ${scrollActive ? "shadow-md" : "pt-4"}`}>
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Image alt="Aspire Keeper logo" src={asklogo} className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex font-bold space-x-6 text-black-700">
            {["home", "services", "about Us", "pricing", "blog", "contact"].map((item) => (
              <LinkScroll
                key={item}
                activeClass="active"
                to={item}
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => setActiveLink(item)}
                className={`cursor-pointer transition duration-300 hover:text-green-900 ${
                  activeLink === item ? "text-green-900 font-semibold" : "text-black-600"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </LinkScroll>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="px-6 py-2 bg-green-700 text-white rounded-lg shadow-md transition hover:bg-green-800">
              Get Started Today
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center justify-center lg:hidden">
          <button className="absolute top-5 right-5 text-black" onClick={() => setMobileMenuOpen(false)}>
            <X size={28} />
          </button>
          <ul className="text-xl text-black-700 space-y-6">
            {["home", "services", "aboutus", "pricing", "blog", "contact"].map((item) => (
              <LinkScroll
                key={item}
                activeClass="active"
                to={item}
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink(item);
                  setMobileMenuOpen(false);
                }}
                className="cursor-pointer hover:text-green-900 transition duration-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </LinkScroll>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
