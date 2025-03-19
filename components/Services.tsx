'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import getScrollAnimation from '@/utils/getScrollAnimation';
import ScrollAnimationWrapper from './layouts/ScrollAnimationWrapper';
import Image from 'next/image';
import ServiceImage from '../public/hero_section_images/teamwork.svg';
import CheckIcon from '../public/assets/icons/checklist.svg'

const services = [
  { name: "Virtual Assistant Support", icon: CheckIcon },
  { name: "Administrative Tasks", icon: 'FaTasks' },
  { name: "Social Media Management", icon: 'FaChartBar' },
  { name: "Calendar & Email Management", icon: 'FaCalendarCheck' },
  { name: "Research & Data Entry", icon: 'FaClipboardList' },
  { name: "Customer Support Assistance", icon: 'FaHeadset' }
];


const ServiceComponent: React.FC = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  

  return (
    <div className='max-w-screen-xl mt-8 mb-6 px-6 sm:px-8 lg:px-16 mx-auto'>
      {/* Service Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        
        {/* Left Side - Image */}
        <ScrollAnimationWrapper>
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image alt="Hero Section Image" src={ServiceImage} className="w-full h-auto max-w-md md:max-w-lg mx-auto" />
          </motion.div>
        </ScrollAnimationWrapper>

        {/* Right Side - Services List */}
        <ScrollAnimationWrapper>
          <motion.div className="flex flex-col justify-center w-full" variants={scrollAnimation}>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Reclaim your time and prioritize growth.
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Our expertise ensures seamless operations, so you can focus on what truly matters.
            </p>

            {/* Service Cards */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center p-4 bg-white text-center shadow-lg rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image alt="Star" src={CheckIcon} />
                  <p className="text-lg font-medium text-gray-800">{service.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ScrollAnimationWrapper>

      </div>
    </div>
  );
};

export default ServiceComponent;
