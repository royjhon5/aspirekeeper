'use client'

import getScrollAnimation from '@/utils/getScrollAnimation';
import React, { useMemo } from 'react';
import ScrollAnimationWrapper from './layouts/ScrollAnimationWrapper';
import {motion} from 'framer-motion';
import ServiceImage from '../public/hero_section_images/teamwork.svg'
import Image from 'next/image';

const ServiceComponent: React.FC = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const services = [  
    "Virtual Assistant Support",
    "Administrative Tasks",
    "Social Media Management",
    "Calendar & Email Management",
    "Research & Data Entry",
    "Customer Support Assistance"
  ]
  return (
    <div className='max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto'>
      <div className='grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12'>
        <ScrollAnimationWrapper className="flex w-full justify-end">
            <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
                <Image alt="Hero Section Image" src={ServiceImage} />
            </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
            <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
                <h3 className="text-2xl lg:text-3xl font-medium text-black-600">
                 Reclaim your time and prioritize growth. 
                </h3>
                <p className="my-2 text-black-500">
                Our expertise ensures seamless operations, so you can focus on what truly matters.
                </p>
                <ul className="text-black-500 self-start list-inside ml-8">
                    {services.map((service, index) => (
                    <motion.li
                        className="relative circle-check custom-list"
                        custom={{duration: 2 + index}}
                        variants={scrollAnimation}
                        key={service}
                        whileHover={{
                        scale : 1.1,
                        transition: {
                        duration: .2
                        }
                        }}>
                        {service}
                    </motion.li>
                    )
                    )}
                </ul>
            </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default ServiceComponent;