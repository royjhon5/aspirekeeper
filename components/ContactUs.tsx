'use client'

import React, { useMemo } from 'react';
import ScrollAnimationWrapper from './layouts/ScrollAnimationWrapper';
import { motion } from 'framer-motion';
import getScrollAnimation from '@/utils/getScrollAnimation';
import ButtonPrimary from './misc/ButtonPrimary';

const ContactUs: React.FC = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className='bg-gradient-to-b from-white-300 to-white w-full py-14' id="contact">
      <div className='max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center'>
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-2xl lg:text-3xl font-medium text-black-600 w-9/12 sm:w-4/12 mx-auto text-[#0d4a3a]">
              Contact Us
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-8 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              Have questions or need assistance? We’re here to help!
            </motion.p>
          </ScrollAnimationWrapper>

          {/* Contact Form & Address Section */}
          <ScrollAnimationWrapper className="w-full flex flex-col md:flex-row gap-8 py-12">
            {/* Left Column - Contact Form */}
            <motion.div variants={scrollAnimation} className="w-full md:w-1/2 bg-white p-8 shadow-lg rounded-lg">
              <form className="flex flex-col space-y-4">
                <div>
                  <input type="text" className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" required />
                </div>
                <div>
                  <input type="email" className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" required />
                </div>
                <div>
                  <input type="text" className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Subject" required />
                </div>
                <div>
                  <textarea rows={4} className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Message" required></textarea>
                </div>
                <ButtonPrimary>
                  Send
                </ButtonPrimary>
              </form>
            </motion.div>

            {/* Right Column - Address & Map */}
            <motion.div variants={scrollAnimation} className="w-full md:w-1/2 flex flex-col">
              <div className="bg-white p-8 shadow-lg rounded-lg mb-6">
                <h4 className="text-lg font-semibold">Our Address</h4>
                <p className="text-gray-700 mt-2">
                  123 Business Street, Suite 101<br />
                  City, State, ZIP Code<br />
                  Phone: (123) 456-7890<br />
                  Email: support@example.com
                </p>
              </div>

              {/* Google Map */}
              <div className="rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-64 md:h-80"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345091286!2d144.9537363155047!3d-37.81627974202178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df59f7d8b%3A0x2b0f953a4e1f3d9d!2sSome%20Business%20Location!5e0!3m2!1sen!2sus!4v1630995675274!5m2!1sen!2sus"
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
