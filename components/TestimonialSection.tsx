'use client'

import React, { useMemo } from 'react';
import { motion } from "framer-motion";
import getScrollAnimation from '@/utils/getScrollAnimation';
import ScrollAnimationWrapper from './layouts/ScrollAnimationWrapper';
import Testimonials from './Testimoni';
import heroBg from '../public/hero_section_images/hero-bg-light.jpg';
import Image from 'next/image';

const TestimonialSection: React.FC = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
return (
  
    <div className='bg-gradient-to-b from-white-300 to-white-500 w-full py-14'>
      <div className='max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center'>
        <div className='flex flex-col w-full'>
           
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimonials />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
 
  );
};

export default TestimonialSection;