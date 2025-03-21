'use client'

import React, { useEffect, useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import Image from 'next/image';
import asklogo from '../../public/logo/akslogo.png';

const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <>
    <header className={"fixed top-0 w-full z-30 bg-white transition-all " + (scrollActive ? " shadow-md pt-0" : " pt-4")}>
        <nav className='max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4'>
            <div className='col-start-1 col-end-2 flex items-center'>
                {/* image */}
                <Image alt="Aspirekeeper logo" src={asklogo} className='h-11 w-auto' />
            </div>
            <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500 items-center">
            <LinkScroll activeClass="active" to="home" spy={true} smooth={true} duration={1000} onSetActive={() => { setActiveLink("home");}} className={ "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "home" ? " text-green-900 animation-active ": " text-black-500 hover:text-green-900 a")}>
              Home
            </LinkScroll>
            <LinkScroll activeClass="active" to="services" spy={true} smooth={true} duration={1000} onSetActive={() => { setActiveLink("services");}} className={ "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "services" ? " text-green-900 animation-active ": " text-black-500 hover:text-green-900 a")}>
              Services
            </LinkScroll>
            <LinkScroll activeClass="active" to="aboutus" spy={true} smooth={true} duration={1000} onSetActive={() => { setActiveLink("aboutus");}} className={ "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "aboutus" ? " text-green-900 animation-active ": " text-black-500 hover:text-green-900 a")}>
              About Us
            </LinkScroll>
            <LinkScroll activeClass="active" to="testimonial" spy={true} smooth={true} duration={1000} onSetActive={() => { setActiveLink("testimonial");}} className={ "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "testimonial" ? " text-green-900 animation-active ": " text-black-500 hover:text-green-900 a")}>
              Testimonial
            </LinkScroll>
            <LinkScroll activeClass="active" to="blog" spy={true} smooth={true} duration={1000} onSetActive={() => { setActiveLink("blog");}} className={ "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "blog" ? " text-green-900 animation-active ": " text-black-500 hover:text-green-900 a")}>
              Blog
            </LinkScroll>
            <LinkScroll activeClass="active" to="contact" spy={true} smooth={true} duration={1000} onSetActive={() => { setActiveLink("contact");}} className={ "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "contact" ? " text-green-900 animation-active ": " text-black-500 hover:text-green-900 a")}>
              Contact
            </LinkScroll>
            </ul>
        </nav>
      </header>


      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 bg-white shadow-t">
        <ul className="flex w-full justify-between items-center text-black-500 py-3">
          {[
            { name: "Home", to: "home" },
            { name: "Services", to: "services" },
            { name: "About", to: "aboutus" },
            { name: "Testimonial", to: "testimonial" },
            { name: "Blog", to: "blog" },
            { name: "Contact", to: "contact" },
          ].map((item) => (
            <LinkScroll
              key={item.to}
              activeClass="active"
              to={item.to}
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => setActiveLink(item.to)}
              className={`flex flex-col items-center justify-center text-sm md:text-base px-3 py-2 w-full ${
                activeLink === item.to ? "text-green-900 font-semibold" : "text-black-500 hover:text-green-900"
              }`}
            >
              {item.name}
            </LinkScroll>
          ))}
        </ul>
      </nav>

    </>
  );
};

export default Header;
