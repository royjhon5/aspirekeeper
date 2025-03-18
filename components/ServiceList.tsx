'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import getScrollAnimation from '@/utils/getScrollAnimation';

const ServiceList: React.FC = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const services = [
    {
      title: "General Admin Support",
      description: "Email and calendar management, document organization, data entry & research.",
      icon: "💼",
      borderColor: "border-[#0d4a3a]",
      textColor: "text-[#0d4a3a]",
    },
    {
      title: "Social Media Assistance",
      description: "Content scheduling & posting, engagement & community management, caption writing & branding support.",
      icon: "📷",
      borderColor: "border-[#fcc811]",
      textColor: "text-[#fcc811]",
    },
    {
      title: "Project & Task Management",
      description: "Organizing tasks & deadlines, process automation, meeting notes & action item tracking.",
      icon: "📃",
      borderColor: "border-[#0d4a3a]",
      textColor: "text-[#0d4a3a]",
    },
    {
      title: "Customer Support Assistance",
      description: "Responding to inquiries, managing support tickets, live chat & email support.",
      icon: "📞",
      borderColor: "border-[#fcc811]",
      textColor: "text-[#fcc811]",
    },
    {
      title: "Research & Reporting",
      description: "Market research & competitor analysis, report creation, presentation preparation.",
      icon: "📝",
      borderColor: "border-[#0d4a3a]",
      textColor: "text-[#0d4a3a]",
    },
    {
      title: "Additional Custom Support",
      description: "Need something specific? Let’s discuss your needs!",
      icon: "🛠️",
      borderColor: "border-[#fcc811]",
      textColor: "text-[#fcc811]",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14" id="services">
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <ScrollAnimationWrapper>
          <motion.h3
            variants={scrollAnimation}
            className="text-2xl sm:text-2xl lg:text-3xl font-medium text-black-600 w-9/12 sm:w-4/12 mx-auto"
          >
            Our Services
          </motion.h3>
          <motion.p
            variants={scrollAnimation}
            className="leading-normal mx-auto mb-8 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
          >
            Supporting Your Success, One Task at a Time.
          </motion.p>
        </ScrollAnimationWrapper>

        {/* Services List */}
        <ScrollAnimationWrapper className="grid md:grid-cols-2 gap-8 py-12">
          {services.map((service, index) => (
            <motion.div
              custom={{duration: 2 + index}}
              key={index}
              variants={scrollAnimation}
              className={`bg-white shadow-lg rounded-2xl p-6 flex gap-4 items-start border-t-4 ${service.borderColor} transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <span className={`text-3xl ${service.textColor}`}>{service.icon}</span>
              <div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>

        <div className="mt-10 text-center">
          <p className="text-lg font-semibold">
            Let&apos;s tailor our services to meet your needs. Book a discovery call today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
