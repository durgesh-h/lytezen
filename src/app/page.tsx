import React from 'react';
import Hero from '../components/Hero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DevOpsConsulting from '@/components/DevOpsConsulting';
import CoreServices from '@/components/CoreServices';
import WhyChooseUs from '@/components/WhyChooseUs';
import FreeBook from '@/components/FreeBook';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header/>
      <main>
        <Hero />
        <DevOpsConsulting />
        <CoreServices/>
        <WhyChooseUs/>
      <Footer/>

        {/* Add other sections here as needed */}
      </main>
    </div>
  );
}