'use client';

import React, { useMemo } from 'react';
import ScrollAnimationWrapper from './layouts/ScrollAnimationWrapper';
import { motion } from 'framer-motion';
import getScrollAnimation from '@/utils/getScrollAnimation';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const ServiceList: React.FC = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const services = [
    {
      title: "General Admin Support",
      description: [
        "Email and calendar management",
        "Document organization",
        "Data entry & research"
      ],
      icon: "💼",
      borderColor: "border-[#0d4a3a]",
      textColor: "text-[#0d4a3a]",
    },
    {
      title: "Social Media Assistance",
      description: [
        "Content scheduling & posting",
        "Engagement & community management",
        "Caption writing & branding support"
      ],
      icon: "📷",
      borderColor: "border-[#fcc811]",
      textColor: "text-[#fcc811]",
    },
    {
      title: "Project & Task Management",
      description: [
        "Organizing tasks & deadlines",
        "Process automation",
        "Meeting notes & action item tracking"
      ],
      icon: "📃",
      borderColor: "border-[#0d4a3a]",
      textColor: "text-[#0d4a3a]",
    },
    {
      title: "Customer Support Assistance",
      description: [
        "Responding to inquiries",
        "Managing support tickets",
        "Live chat & email support"
      ],
      icon: "📞",
      borderColor: "border-[#fcc811]",
      textColor: "text-[#fcc811]",
    },
    {
      title: "Research & Reporting",
      description: [
        "Market research & competitor analysis",
        "Report creation",
        "Presentation preparation"
      ],
      icon: "📝",
      borderColor: "border-[#0d4a3a]",
      textColor: "text-[#0d4a3a]",
    },
    {
      title: "Additional Custom Support",
      description: [
        "Need something specific?",
        "Let’s discuss your needs!"
      ],
      icon: "🛠️",
      borderColor: "border-[#fcc811]",
      textColor: "text-[#fcc811]",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-2" id="services">
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-left justify-center">
        <ScrollAnimationWrapper>
          <motion.h3
            variants={scrollAnimation}
            className="text-2xl sm:text-2xl lg:text-3xl font-medium text-black-600 w-9/12 sm:w-4/12"
          >
            Our Services
          </motion.h3>
          <motion.p
            variants={scrollAnimation}
            className="leading-normal mt-1 w-10/12 sm:w-7/12 lg:w-6/12"
          >
            Supporting Your Success, One Task at a Time.
          </motion.p>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="grid md:grid-cols-2 gap-8 py-12">
          {services.map((service, index) => (
            <motion.div
              custom={{duration: 2 + index}}
              key={index}
              variants={scrollAnimation}
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.4,
                },
              }}
              className={`bg-white shadow-md p-6 flex gap-4 items-start border-t-4 ${service.borderColor}`}
            >
              <span className={`text-3xl ${service.textColor}`}>{service.icon}</span>
              <div className="text-left">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <ul className="list-disc pl-5 text-gray-600">
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

        <ScrollAnimationWrapper className="text-left">
          <motion.h3 variants={scrollAnimation} className="text-lg font-semibold">
            Let&apos;s tailor our services to meet your needs. Book a discovery call today!
          </motion.h3>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default ServiceList;
