'use client';

import React, { useMemo } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import ScrollAnimationWrapper from '@/components/layouts/ScrollAnimationWrapper';
import getScrollAnimation from '@/utils/getScrollAnimation';
import ButtonPrimary from './misc/ButtonPrimary';

const BlogList = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const featuredArticles = [
    {
      title: 'How to Delegate Like a Pro',
      description:
        'Master the art of delegation and boost your productivity by assigning tasks efficiently.',
    },
    {
      title: 'Staying Organized While Growing Your Business',
      description:
        'Learn strategies to structure your business while scaling up.',
    },
  ];

  const blogPosts = [
    {
      title: 'Maximizing Virtual Assistant Support',
      description: 'Discover the best tools and techniques to optimize your VA.',
    },
    {
      title: 'Time Management Hacks for Entrepreneurs',
      description: 'Boost efficiency and achieve your business goals faster.',
    },
    {
      title: 'Productivity Tools You Need in 2025',
      description: 'A list of must-have tools to streamline your workflow.',
    },
  ];

  return (
    <div className="py-16 bg-white" id="blog">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollAnimationWrapper>
          <motion.h1
            variants={scrollAnimation}
            className="text-4xl font-bold text-[#0d4a3a] text-center"
          >
            Blog
          </motion.h1>
        </ScrollAnimationWrapper>

        {/* Featured Articles Slider */}
        <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation} className="">
          <Slider
            dots={false}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={4000}
          >
            {featuredArticles.map((article, index) => (
              <div key={index} className="p-6 rounded-lg text-center">
                <h2 className="text-2xl font-semibold text-[#162144]">{article.title}</h2>
                <p className="text-[#162144] mt-2">{article.description}</p>
              </div>
            ))}
          </Slider>
        </motion.div>
        </ScrollAnimationWrapper>
        {/* Blog Posts Grid */}
        <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation} className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((article, index) => (
            <motion.div
              key={index}
              variants={scrollAnimation}
              className="p-6 bg-white border rounded-lg shadow-md hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#fcc811] mb-2">{article.title}</h3>
              <p className="text-gray-700 mb-4">{article.description}</p>
              <ButtonPrimary>
                Read More
              </ButtonPrimary>
            </motion.div>
          ))}
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default BlogList;
