import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import React from 'react'
import image from '../../../public/SC_Full.png'

export const metadata = {
    title: 'Lytezen | About Us',
    description: 'DevOps Consultancy',
};

export default function AboutPage() {
    return (
        <>
        <Header/>
        <section className="relative mt-40 mb-20 bg-white py-12 px-5 md:py-16 md:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Title and Intro */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2a1a3d] mb-4">
              About Us
            </h2>
            <p className="text-base md:text-lg text-[#4b2e6f] max-w-2xl mx-auto">
              We are a team of DevOps experts helping businesses modernize infrastructure and accelerate software delivery.
            </p>
          </div>
  
          {/* Company Image */}
          <div className="mb-12">
            <Image
              src={image}
              height={100}
              width={100}
              alt="Company Image"
              className="w-full max-w-4xl mx-auto h-auto rounded-xl shadow-lg transform transition duration-300 hover:scale-[1.03]"
            />
          </div>
  
          {/* Detailed Description */}
          <div className="text-center md:text-left">
            <p className="text-base md:text-lg text-[#4b2e6f] leading-relaxed max-w-3xl mx-auto mb-6">
              At Lytezen, we are passionate about helping businesses bridge the gap between development and operations. With a team of experienced DevOps engineers, cloud architects, and automation experts, we specialize in building scalable, secure, and highly automated infrastructure solutions.
            </p>
            <p className="text-base md:text-lg text-[#4b2e6f] leading-relaxed max-w-3xl mx-auto mb-6">
              Our mission is to empower organizations to innovate faster, reduce operational overhead, and deliver software with confidence. Whether you’re a startup looking to establish cloud-native practices or an enterprise seeking to modernize legacy systems, we provide end-to-end DevOps consulting tailored to your goals.
            </p>
            <p className="text-base md:text-lg text-[#4b2e6f] leading-relaxed max-w-3xl mx-auto mb-6">
              From cloud infrastructure management to CI/CD pipeline automation, we combine industry best practices with modern tools to ensure your systems are resilient, efficient, and future-ready. We believe DevOps is not just about tools — it’s about culture, collaboration, and continuous improvement.
            </p>
            <p className="text-base md:text-lg text-[#4b2e6f] leading-relaxed max-w-3xl mx-auto">
              Partner with us and take the next step towards operational excellence.
            </p>
          </div>
        </div>
      </section>
      <Footer/>
      </>
    )
}
