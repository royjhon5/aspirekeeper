'use client';

import React, { useMemo } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import ScrollAnimationWrapper from '@/components/layouts/ScrollAnimationWrapper';
import getScrollAnimation from '@/utils/getScrollAnimation';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import ButtonPrimary from './misc/ButtonPrimary';

const AboutPage = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full justify-center' id="aboutus">
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <ScrollAnimationWrapper>
              <motion.div variants={scrollAnimation}>
                <div className="relative inline-block mb-2">
                  <span className="text-sm uppercase tracking-wider font-semibold text-gray-600">
                    About
                  </span>
                  <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#0d4a3a]"></span>
                </div>
                <h2 className="text-4xl font-bold mb-4 text-[#0d4a3a]">WHO WE ARE</h2>
                <h2 className="text-xl font-semibold text-[#fcc811] mb-2">Our Mission</h2>
                <p className="text-gray-700 mb-6">
                  Helping individuals and businesses reach their goals by freeing them from time-consuming tasks.
                  We believe that when you focus on what truly matters, success follows.
                </p>
                <ButtonPrimary>
                  Want to learn more? Let’s chat!
                </ButtonPrimary>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
          <ScrollAnimationWrapper>
          <motion.div variants={scrollAnimation} className="bg-[#fcc811] p-8 rounded shadow-md">
            <h2 className="text-xl font-semibold text-[#162144] mb-2">Our Vision</h2>
            <p className="text-gray-800">
              To empower dreamers and doers by keeping their aspirations organized and achievable.
              Aspire Keeper is committed to delivering seamless virtual assistance that allows our clients to work smarter, not harder.
            </p>
          </motion.div> 
          </ScrollAnimationWrapper>
    
        </div>
      </div> 

      <ScrollAnimationWrapper>
        <motion.h3
          variants={scrollAnimation}
          className="text-3xl font-bold text-[#0d4a3a] mb-8 text-center"
        >
          Meet the Team
        </motion.h3>
        <motion.div variants={scrollAnimation}>
        <Slider {...settings} className="flex items-stretch justify-items-stretch">
          {['Alice Johnson', 'Bob Smith', 'Carol Davis', 'David Lee'].map((name, index) => (
            <div key={index} className="px-3 flex items-stretch">
              <div className="border-2 border-black-500 hover:border-yellow-500 transition-all rounded-lg p-8 flex flex-col">
                <Image
                  src={`/images/team${index + 1}.jpg`}
                  alt={name}
                  width={0}
                  height={0}
                  className="mx-auto w-24 h-24 rounded-full object-cover mb-4 border-4 border-[#0d4a3a]"
                />
                <h3 className="text-lg font-semibold mb-1 text-[#fcc811]">{name}</h3>
                <p className="text-gray-600 text-sm">
                  {index === 0 ? 'CEO & Founder' : index === 1 ? 'COO' : index === 2 ? 'Lead Developer' : 'Marketing Manager'}
                </p>
              </div>
            </div>
          ))}
        </Slider>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default AboutPage;
