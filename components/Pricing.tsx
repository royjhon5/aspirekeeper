'use client'

import React, { useMemo } from 'react';
import { motion } from "framer-motion";
import getScrollAnimation from '@/utils/getScrollAnimation';
import ScrollAnimationWrapper from './layouts/ScrollAnimationWrapper';

const PricingComponent: React.FC = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div className='bg-gradient-to-b from-white-300 to-white-500 w-full py-14' id="pricing">
      <div className='max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center'>
        <div className='flex flex-col w-full'>
            <ScrollAnimationWrapper>
                <motion.h3
                variants={scrollAnimation}
                className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
                >
                Choose Your Plan
                </motion.h3>
                <motion.p
                variants={scrollAnimation}
                className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
                >
                Let&apos;s choose the package that is best for you and explore it happily
                and cheerfully.
                </motion.p>
            </ScrollAnimationWrapper>
            
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;