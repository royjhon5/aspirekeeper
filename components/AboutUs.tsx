'use client';

import React, { useMemo } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import ScrollAnimationWrapper from '@/components/layouts/ScrollAnimationWrapper';
import getScrollAnimation from '@/utils/getScrollAnimation';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutPage = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Centered About Us Heading */}
        <motion.div variants={scrollAnimation} className="text-center mb-12">
          <h3 className="text-sm uppercase font-semibold tracking-wider text-gray-600">
            About Us
          </h3>
          <h1 className="text-5xl font-bold text-[#0d4a3a] mt-2">
            Who We Are
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div 
            variants={scrollAnimation} 
            className="bg-[#f9f9f9] p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-semibold text-[#0d4a3a] mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              "Helping individuals and businesses reach their goals by freeing them from time-consuming tasks.
              We believe that when you focus on what truly matters, success follows."
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div 
            variants={scrollAnimation} 
            className="bg-[#fcc811] p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl font-semibold text-[#162144] mb-4">Our Vision</h2>
            <p className="text-gray-900 leading-relaxed">
              "To empower dreamers and doers by keeping their aspirations organized and achievable.
              Aspire Keeper is committed to delivering seamless virtual assistance that allows our clients to work smarter, not harder."
            </p>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div variants={scrollAnimation} className="mt-12 text-center">
          <button className="px-6 py-3 text-lg font-medium bg-[#0d4a3a] text-white rounded-lg hover:bg-[#fcc811] transition duration-300">
            Want to learn more? Let’s chat!
          </button>
        </motion.div>

        {/* Meet the Team */}
        <ScrollAnimationWrapper>
          <motion.div variants={scrollAnimation} className="mt-20 text-center">
            <h3 className="text-sm uppercase font-semibold tracking-wider text-gray-600">
              Team
            </h3>
            <h1 className="text-4xl font-bold text-[#0d4a3a] mt-2">Meet the Team</h1>
          </motion.div>

          <Slider {...settings} className="mt-12">
            {['Alice Johnson', 'Bob Smith', 'Carol Davis', 'David Lee'].map((name, index) => (
              <div key={index} className="px-2">
                <div className="p-6 bg-white border rounded-2xl shadow-lg hover:shadow-xl transition text-center">
                  <img
                    src={`/images/team${index + 1}.jpg`}
                    alt={name}
                    className="mx-auto w-28 h-28 rounded-full object-cover mb-4 border-4 border-[#0d4a3a]"
                  />
                  <h3 className="text-lg font-semibold mb-1 text-[#fcc811]">{name}</h3>
                  <p className="text-gray-600 text-sm">
                    {index === 0 ? 'CEO & Founder' : index === 1 ? 'COO' : index === 2 ? 'Lead Developer' : 'Marketing Manager'}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default AboutPage;