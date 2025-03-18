'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import getScrollAnimation from '@/utils/getScrollAnimation';
import ScrollAnimationWrapper from './layouts/ScrollAnimationWrapper';
import Image from 'next/image';
import heroImage from '../public/hero_section_images/hero2.svg';
import ButtonPrimary from './misc/ButtonPrimary';
import heroBg from '../public/hero_section_images/hero-bg-light.jpg';

const HeroSection: React.FC = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const stats = [
    { name: "VA's", number: "390" },
    { name: "Clients", number: "810" },
    { name: "States Covered", number: "35" },
    
  ];

  return (
    
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gray-100">
      {/* Background Image */}
      <Image src={heroBg} alt="Hero Background" layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full opacity-20" priority />
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl px-8 xl:px-16 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Side - Text Content */}
        <motion.div 
        className="text-center md:text-left mt-15"
        variants={scrollAnimation}
>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Reliable VA services that keep your <span className="text-yellow-500">Aspir</span>
            <span className="text-green-700">ations</span> on track
          </h1>
          <p className="mt-3 text-md text-gray-600">
            At Aspire Keeper Solutions, we take care of the tasks, details, and to-do lists, 
            so you can focus on what truly matters—achieving your aspirations.
          </p>
          <div className="mt-6">
            <ButtonPrimary>Book a Free Consultation</ButtonPrimary>
          </div>
        </motion.div>
        
        {/* Right Side - Image */}
        <motion.div className="flex justify-center md:justify-end mt-16" variants={scrollAnimation}>
          <Image 
          src={heroImage} 
          alt="Hero Illustration" 
          width={500} 
          height={500} 
          className="w-full max-w-md md:max-w-lg" 
          />
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-full max-w-3xl bg-white rounded-lg shadow-md px-6 py-7 flex flex-col sm:flex-row items-center justify-between items-center gap-4 z-10">
      {stats.map((stat, index) => (
        <motion.div key={index} className="text-center" variants={scrollAnimation}>
          <p className="text-2xl font-semibold text-gray-800">{stat.number}+</p>
          <p className="text-md text-gray-600">{stat.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
