import Image from 'next/image';
import React from 'react';
import image from '../../public/SC_Full.png'

const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative bg-[#f5f5f7] py-12 px-5 md:py-16 md:px-10 overflow-hidden">
      {/* Wavy Background */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full hidden md:block"
          viewBox="0 0 540 220"
          preserveAspectRatio="none"
        >
          <path
            fill="#2a1a3d"
            fillOpacity="1"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,213.3C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2a1a3d] mb-4">
            Why Choose Us?
          </h2>
          <p className="text-base md:text-lg text-[#4b2e6f] max-w-2xl mx-auto">
            We provide tailored DevOps solutions to help your business thrive in a competitive landscape.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#a9a1e1] to-[#7e69c0] rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#2a1a3d] mb-2">Experienced Engineers</h3>
            <p className="text-sm text-[#4b2e6f]">
              Our team consists of seasoned DevOps engineers and architects.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#a9a1e1] to-[#7e69c0] rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#2a1a3d] mb-2">Customized Solutions</h3>
            <p className="text-sm text-[#4b2e6f]">
              No one-size-fits-all – we tailor solutions to your needs.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#a9a1e1] to-[#7e69c0] rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#2a1a3d] mb-2">Focus on Efficiency</h3>
            <p className="text-sm text-[#4b2e6f]">
              We prioritize automation, speed, and security.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-2">
          <div className="w-full  md:w-1/2">
          <Image
          src={image}
          height={100}
          width={100}
          alt="DevOps Consulting" 
          className="w-[400px] md:ml-20 h-auto rounded-xl shadow-lg transform transition duration-300 hover:scale-[1.03]"
        />
          </div>
          <div className="w-full md:w-1/2  mb-24 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4">
              We Know It’s Hard for Most Businesses to Implement DevOps Effectively
            </h2>
            <ul className="space-y-3 text-black text-sm md:text-base">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                We have developed a strategic DevOps system to help you easily attract ideal clients who are eager to work with you.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                We have worked with hundreds of independent businesses on their DevOps journey for over 15 years.
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                We have guided firms starting out to firms with over $3 billion in AUM, and have seen how niching benefits them.
              </li>
            </ul>
            <button
              className="mt-6 bg-gradient-to-r from-[#a9a1e1] to-[#7e69c0] text-[#2a1a3d] font-semibold text-base md:text-lg px-6 py-2 md:px-8 md:py-3 rounded-full shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;