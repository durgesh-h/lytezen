import React from 'react';
import Image from 'next/image';
import image from '../../public/SC_Full.png'
const DevOpsConsulting = () => {
  return (
    <section className="bg-white py-10 px-5 md:py-16 md:px-10 text-center">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
      <div className="w-full max-w-md md:max-w-[50%]">
        <Image
          src={image}
          height={100}
          width={100}
          alt="DevOps Consulting" 
          className="w-full h-auto rounded-xl shadow-lg transform transition duration-300 hover:scale-[1.03]"
        />
      </div>
      <div className="w-full max-w-md md:max-w-[50%] text-center md:text-left">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2a1a3d] mb-4 leading-tight">
          End-to-End DevOps Consulting & Implementation
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-[#4b2e6f] mb-6 leading-relaxed">
          We help businesses of all sizes adopt and optimize DevOps practices to deliver software faster, safer, and more efficiently.
        </p>
        <button 
          className="bg-gradient-to-r from-[#a9a1e1] to-[#7e69c0] text-[#2a1a3d] font-semibold text-base md:text-lg px-6 py-2 md:px-8 md:py-3 rounded-full shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          Learn More
        </button>
      </div>
    </div>
  </section>
  );
};

export default DevOpsConsulting;

