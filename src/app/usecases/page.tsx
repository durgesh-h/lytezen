import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react'


export const metadata = {
    title: 'Lytezen | Use Cases',
    description: 'DevOps Consultancy',
};

export default function UseCasesPage() {
    const useCases = [
        {
            title: 'Cloud Migration & Modernization',
            description: 'We help businesses migrate legacy systems to the cloud — with zero downtime and future-ready architecture.',
            icon: (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" />
                </svg>
            ),
        },
        {
            title: 'CI/CD Pipeline Automation',
            description: 'We build automated pipelines that enable faster releases, higher quality, and less risk.',
            icon: (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" />
                </svg>
            ),
        },
        {
            title: 'Cost Optimization & FinOps',
            description: 'We help teams identify wasted spend, optimize resources, and implement FinOps practices for smarter cloud usage.',
            icon: (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" />
                </svg>
            ),
        },
        {
            title: 'Kubernetes & Container Management',
            description: 'We design and manage Kubernetes environments so your team can focus on building — not managing clusters.',
            icon: (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" />
                </svg>
            ),
        },
    ];

    return (
        <>
            <Header />
            <section className="bg-white py-12f mt-20 mb-20 px-5 md:py-16 md:px-10">
                <div className="max-w-6xl mx-auto">
                    {/* Section Title and Intro */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2a1a3d] mb-4">
                            We help teams move faster, build smarter, and operate with confidence.
                        </h2>
                        <h3 className="text-xl md:text-2xl font-semibold text-[#4b2e6f] mt-6">
                            Challenges we solve
                        </h3>
                    </div>

                    {/* Use Cases Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                        {useCases.map((useCase, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transform transition duration-300 hover:-translate-y-2"
                            >
                                <div className="flex items-center justify-center w-14 h-14 bg-[#a9a1e1] rounded-full mb-4">
                                    {useCase.icon}
                                </div>
                                <h4 className="text-lg md:text-xl font-semibold text-[#2a1a3d] mb-2">
                                    {useCase.title}
                                </h4>
                                <p className="text-sm md:text-base text-[#4b2e6f] leading-relaxed">
                                    {useCase.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
