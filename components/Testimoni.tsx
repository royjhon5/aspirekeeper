'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import getScrollAnimation from '@/utils/getScrollAnimation';
import ScrollAnimationWrapper from './layouts/ScrollAnimationWrapper';
import Image from 'next/image';
import heroBg from '../public/hero_section_images/hero-bg-light.jpg';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, TechCorp',
    image: "/assets/people-1.png",
    quote: 'This service has transformed the way we work. Highly recommended!'
  },
  {
    name: 'Jane Smith',
    role: 'Marketing Director, BrandX',
    image: "/assets/people-2.png",
    quote: 'Exceptional support and seamless experience. A game changer!'
  },
  {
    name: 'Michael Lee',
    role: 'Founder, StartUpHub',
    image: '/assets/people-3.png',
    quote: 'Saved us so much time and helped us scale faster. Fantastic!'
  }
];

const TestimonialSection: React.FC = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <section className="relative w-full bg-gray-100 py-16">
      {/* Background Image */}
      <Image src={heroBg} alt="Hero Background" layout="fill" objectFit="cover" className="absolute inset-0 w-full opacity-20" priority />

      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <ScrollAnimationWrapper>
          <motion.div variants={scrollAnimation} className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black">Trusted by Thousands of Happy Customers</h3>
            <p className="text-lg text-gray-600 mt-4">Real stories from real customers who have seen great results.</p>
          </motion.div>
        </ScrollAnimationWrapper>

        {/* Testimonials Grid */}
        <ScrollAnimationWrapper>
          <motion.div variants={scrollAnimation} className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={scrollAnimation} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Image src={testimonial.image} alt={testimonial.name} width={80} height={80} className="rounded-full mx-auto mb-4" />
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                <h4 className="text-lg font-semibold mt-4">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </ScrollAnimationWrapper>
      </div>

      {/* CTA Section */}
      <div className="bg-[#fcc811] text-center py-12 mt-16 ">
        <h3 className="text-3xl font-bold text-black">Take back your time and focus on growth. Let us handle the rest.</h3>
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition">Book a Free Consultation</button>
      </div>
    </section>
  );
};

export default TestimonialSection;
