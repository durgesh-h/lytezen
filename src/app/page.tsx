import React from 'react';
import Hero from '../components/Hero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DevOpsConsulting from '@/components/DevOpsConsulting';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header/>
      <main>
        <Hero />
        <DevOpsConsulting />
        {/* Add other sections here as needed */}
      </main>
      <Footer/>
    </div>
  );
}