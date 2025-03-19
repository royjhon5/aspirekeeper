'use client';

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import getScrollAnimation from '@/utils/getScrollAnimation';
import ScrollAnimationWrapper from './layouts/ScrollAnimationWrapper';
import { Briefcase, Camera, ClipboardList, Headset, FileText, Megaphone } from 'lucide-react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "General Admin Support",
    icon: <Briefcase size={40} className="text-[#0d4a3a]" />,
    description: ["Email and calendar management", "Document organization", "Data entry & research"],
    borderColor: "border-[#0d4a3a]",
    textColor: "text-[#0d4a3a]",
  },
  {
    title: "Social Media Assistance",
    icon: <Camera size={40} className="text-[#fcc811]" />,
    description: ["Content scheduling & posting", "Engagement & community management", "Caption writing & branding support"],
    borderColor: "border-[#fcc811]",
    textColor: "text-[#fcc811]",
  },
  {
    title: "Project & Task Management",
    icon: <ClipboardList size={40} className="text-[#0d4a3a]" />,
    description: ["Organizing tasks & deadlines", "Process automation", "Meeting notes & action item tracking"],
    borderColor: "border-[#0d4a3a]",
    textColor: "text-[#0d4a3a]",
  },
  {
    title: "Customer Support Assistance",
    icon: <Headset size={40} className="text-[#fcc811]" />,
    description: ["Responding to inquiries", "Managing support tickets", "Live chat & email support"],
    borderColor: "border-[#fcc811]",
    textColor: "text-[#fcc811]",
  },
  {
    title: "Research & Reporting",
    icon: <FileText size={40} className="text-[#0d4a3a]" />,
    description: ["Market research & competitor analysis", "Report creation", "Presentation preparation"],
    borderColor: "border-[#0d4a3a]",
    textColor: "text-[#0d4a3a]",
  },
  {
    title: "Additional Custom Support",
    icon: <Megaphone size={40} className="text-[#fcc811]" />,
    description: ["Need something specific? Let’s discuss your needs!"],
    borderColor: "border-[#fcc811]",
    textColor: "text-[#fcc811]",
  },
];

const ServiceList: React.FC = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="bg-gray-100 py-16" id="services">
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto text-center">
      <ScrollAnimationWrapper>
  <motion.h2 variants={scrollAnimation} className="text-3xl font-bold text-gray-900">
    Our Services
  </motion.h2>
  <motion.p 
    variants={scrollAnimation} 
    className="leading-normal mt-1 w-10/12 sm:w-7/12 lg:w-6/12 text-center mx-auto"
  >
    Supporting Your Success, One Task at a Time.
  </motion.p>
</ScrollAnimationWrapper>


        {/* Services List */}
        <ScrollAnimationWrapper className="grid md:grid-cols-2 gap-8 py-12">
          {services.map((service, index) => (
            <motion.div
              custom={{ duration: 2 + index }}
              key={index}
              variants={scrollAnimation}
              className={`bg-white shadow-lg p-6 flex gap-4 items-start border-t-4 ${service.borderColor} hover:scale-105 transition-transform duration-300`}
              whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
            >
              {service.icon}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                <ul className="mt-2 text-gray-600 list-disc pl-5">
                  {service.description.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
                <Button variant="link" className="cursor-pointer text-blue-500">
                  Read More <ArrowRight size={16} strokeWidth={1.25} />
                </Button>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default ServiceList;


