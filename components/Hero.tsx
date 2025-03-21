'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import getScrollAnimation from '@/utils/getScrollAnimation';
import Image from 'next/image';
import heroImage from '../public/hero_section_images/hero2.svg';
import ButtonPrimary from './misc/ButtonPrimary';
import HeroImage from '../public/hero_section_images/hero-bg-light.jpg'
import ScrollAnimationWrapper from './layouts/ScrollAnimationWrapper';

const HeroSection: React.FC = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const stats = [
    { name: "VA's", number: "390" },
    { name: "Clients", number: "810" },
    { name: "States Covered", number: "35" },
    
  ];

  return (
    <div>
      <Image
        src={HeroImage}
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
          variants={scrollAnimation}>
          <div className='flex flex-col justify-center items-start row-start-2 sm:row-start-1'>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                Reliable VA services that keep your <strong className='text-yellow-400'>Aspir</strong><strong className='text-green-900'>ations</strong> on track
            </h1>
            <p className="text-black-500 mt-4 mb-6">
            At Aspire Keeper Solutions, we take care of the tasks, details, and to-do lists, so you can focus on what truly matters—achieving your aspirations. Whether you&apos;re a 
            business owner, entrepreneur, or busy professional, we provide virtual assistance to streamline your workload and maximize efficiency
            </p>
            <ButtonPrimary>Book a Free Consultation</ButtonPrimary>
          </div>
          <div className="flex w-full">
          <motion.div className="h-full w-full" variants={scrollAnimation}>
            <Image 
            src={heroImage} 
            alt="Hero Illustration" 
            width={500} 
            height={500} 
            className="w-full max-w-md md:max-w-lg" 
            />
          </motion.div>
        </div>  
        </motion.div>
        </ScrollAnimationWrapper>  
          <div className="relative w-full flex">
          <ScrollAnimationWrapper
            className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white z-10">
            {stats.map((listUsers, index) => (
              <motion.div
                className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
                key={index}
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
              >
                <div className="flex mx-auto w-40 sm:w-auto">
                  <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xl text-black-600 font-bold">
                      {listUsers.number}+
                    </p>
                    <p className="text-lg text-black-500">{listUsers.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
        </ScrollAnimationWrapper>
        </div>
      </div>
      
    </div>
  );
};

export default HeroSection;
