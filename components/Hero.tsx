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
    <div className="relative w-full h-screen">
      <Image
        src={heroImages}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        width={0}
        height={0}
        quality={100}
        priority 
        style={{ filter: "opacity(15%)" }} 
      />
      <div className='max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto' id="home">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className='flex flex-col justify-center items-start row-start-2 sm:row-start-1'>
            <h1 className="text-3xl lg:text-4xl xl:text-4xl font-medium text-black-600 leading-normal">
                Reliable VA services that keep your <strong className='text-yellow-400'>Aspir</strong><strong className='text-green-900'>ations</strong> on track
            </h1>
            <p className="text-black-500 mt-4 mb-6">
            At Aspire Keeper Solutions, we take care of the tasks, details, and to-do lists, so you can focus on what truly matters—achieving your aspirations. Whether you&apos;re a 
            business owner, entrepreneur, or busy professional, we provide virtual assistance to streamline your workload and maximize efficiency
            </p>
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
