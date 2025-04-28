import Image from 'next/image';
import React from 'react';
import second from '../../public/SC_Full.png'
const services = Array(9).fill({
  title: 'DevOps Assessment & Strategy',
  description: 'Analyze your current processes and build a roadmap for DevOps success.',
  icon: second, // Placeholder for the icon
});

const CoreServices= () => {
  return (
    <section className="bg-white py-12 px-5 md:py-16 md:px-10">
        
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2a1a3d] text-center mb-10 md:mb-14">
          Our Core Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transform transition duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#a9a1e1] to-[#7e69c0] rounded-full mb-4">
                <Image src={service.icon} alt="Service Icon" height={100} width={100} className="w-8 h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#2a1a3d] mb-2">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-[#4b2e6f] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;