'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import getScrollAnimation from '@/utils/getScrollAnimation';
import ScrollAnimationWrapper from './layouts/ScrollAnimationWrapper';
import { Briefcase, Camera, ClipboardList, Headset, FileText, Megaphone } from 'lucide-react';

const services = [
  {
    title: "General Admin Support",
    icon: <Briefcase size={40} className="text-[#0d4a3a]" />,
    items: [
      "Email and calendar management",
      "Document organization",
      "Data entry & research",
    ],
  },
  {
    title: "Social Media Assistance",
    icon: <Camera size={40} className="text-[#fcc811]" />,
    items: [
      "Content scheduling & posting",
      "Engagement & community management",
      "Caption writing & branding support",
    ],
  },
  {
    title: "Project & Task Management",
    icon: <ClipboardList size={40} className="text-[#0d4a3a]" />,
    items: [
      "Organizing tasks & deadlines",
      "Process automation",
      "Meeting notes & action item tracking",
    ],
  },
  {
    title: "Customer Support Assistance",
    icon: <Headset size={40} className="text-[#fcc811]" />,
    items: [
      "Responding to inquiries",
      "Managing support tickets",
      "Live chat & email support",
    ],
  },
  {
    title: "Research & Reporting",
    icon: <FileText size={40} className="text-[#0d4a3a]" />,
    items: [
      "Market research & competitor analysis",
      "Report creation",
      "Presentation preparation",
    ],
  },
  {
    title: "Additional Custom Support",
    icon: <Megaphone size={40} className="text-[#fcc811]" />,
    items: [
      "Need something specific? Let’s discuss your needs!",
    ],
  },
];

const ServicesPage: React.FC = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="bg-gray-100 py-16" id="services">
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto text-center">
        {/* Header */}
        <ScrollAnimationWrapper>
          <motion.div variants={scrollAnimation} className="text-center mb-5">
            {/* Services Title */}
            <h3 className="text-4xl font-bold text-gray-800 uppercase relative inline-block pb-2">SERVICES
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 border-b-4 border-[#0d4a3a]"></div>
              </h3>
            {/* Subtitle */}
             <p className="text-lg text-gray-600 mt-4">Supporting Your Success, One Task at a Time. </p>
          </motion.div>
        </ScrollAnimationWrapper>

        {/* Services List */}
        <ScrollAnimationWrapper className="grid md:grid-cols-2 gap-8 py-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={scrollAnimation}
              className="bg-white shadow-lg rounded-lg p-6 text-left flex gap-4 items-start border-l-4 border-[#0d4a3a] hover:scale-105 transition-transform duration-300"
            >
              {service.icon}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                <ul className="mt-2 text-gray-600 list-disc pl-5">
                  {service.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>

        {/* CTA */}
        <div className="mt-12 bg-[#fcc811] text-black py-10 px-6 rounded-lg">
          <h3 className="text-2xl font-semibold">Let's tailor our services to meet your needs.</h3>
          <p className="text-lg mt-2">Book a discovery call today!</p>
          
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
