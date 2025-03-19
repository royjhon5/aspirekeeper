'use client'

import React, { useMemo } from 'react';
import ScrollAnimationWrapper from './layouts/ScrollAnimationWrapper';
import getScrollAnimation from '@/utils/getScrollAnimation';
import { motion } from 'framer-motion'
import ButtonPrimary from './misc/ButtonPrimary';

const SubscribeSection: React.FC = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div className='bg-gradient-to-b from-white-300 to-white-500 w-full py-14'>
      <div className='max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center'>
        <div className='flex flex-col w-full my-16'>
        <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{duration: 3}}>
              <div className="absolute rounded-xl py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white shadow-sm">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Stay Updated
                  </h5>
                  <p>Subscribe to receive the latest insights and business tips!</p>
                </div>
                <ButtonPrimary>Subscribe</ButtonPrimary>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
                ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;