import Image from 'next/image';
import React from 'react';
import image from '../../public/SC_Full.png'

const FreeBook = () => {
    return (
        <section className="relative bg-[#e9ecef] py-12 px-5 md:py-16 md:px-10 overflow-hidden">
            {/* Wavy Background */}
            <div className="absolute inset-0 z-0">
                <svg
                    className="w-full h-full"
                    viewBox="0 0 1440 100"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="none"
                        stroke="#a9a1e1"
                        strokeWidth="2"
                        d="M0,60C150,80,300,60,450,80C600,60,750,80,900,60C1050,80,1200,60,1350,80L1440,60V100H0Z"
                    />
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2a1a3d] mb-4">
                        Get a Free Copy of the Book!
                    </h2>
                    <p className="text-base md:text-lg text-[#4b2e6f] mb-6 max-w-md">
                        Uncomparable: The Financial Advisor’s Guide to Standing Out Through Niche Marketing
                    </p>
                    <button className="bg-[#a9a1e1] text-[#2a1a3d] font-semibold text-base md:text-lg px-6 py-2 md:px-8 md:py-3 rounded-full shadow-md transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                        Get Your Copy
                    </button>
                </div>
                <div className="w-full hidden md:block md:w-auto">
                    <Image
                        alt='df'
                        src={image}
                        height={100}
                        width={100}
                        className="w-48 md:w-64 lg:w-80 h-auto transform transition duration-300 hover:scale-[1.03]"
                    />
                </div>
            </div>
        </section>
    );
};

export default FreeBook;