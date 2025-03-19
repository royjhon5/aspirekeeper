'use client';

import React, { useMemo } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import ScrollAnimationWrapper from '@/components/layouts/ScrollAnimationWrapper';
import getScrollAnimation from '@/utils/getScrollAnimation';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollAnimationWrapper>
          <motion.h1
            variants={scrollAnimation}
            className="text-4xl font-bold mb-6 text-[#0d4a3a] text-center"
          >
            Blog
          </motion.h1>
        </ScrollAnimationWrapper>

        {/* Featured Articles Slider */}
        <div className="mb-12">
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={4000}
          >
            {featuredArticles.map((article, index) => (
              <div key={index} className="p-6 rounded-lg shadow-md text-center">
                <h2 className="text-2xl font-semibold text-[#162144]">{article.title}</h2>
                <p className="text-[#162144] mt-2">{article.description}</p>
              </div>
            ))}
          </Slider>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((article, index) => (
            <motion.div
              key={index}
              variants={scrollAnimation}
              className="p-6 bg-white border rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-[#fcc811] mb-2">{article.title}</h3>
              <p className="text-gray-700 mb-4">{article.description}</p>
              <button className="px-4 py-2 bg-[#0d4a3a] text-white rounded-lg hover:bg-[#fcc811] transition">
                Read More
              </button>
            </motion.div>
          ))}
        </div>

        {/* Subscribe Section */}
        <div className="mt-16 text-center p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-[#162144] mb-2">Stay Updated</h2>
          <p className="text-gray-800 mb-4">Subscribe to receive the latest insights and business tips!</p>
          <button className="px-5 py-2 bg-[#0d4a3a] text-white rounded-lg hover:bg-[#162144] transition">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
