import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react'


export const metadata = {
    title: 'Lytezen | Contact Us',
    description: 'DevOps Consultancy',
};

export default function ContactPage() {
    return (
        <>
            <Header />
            <section className="bg-[#e9ecef] mt-20  py-12 px-5 md:py-16 md:px-10">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2a1a3d] mb-4">
                            Let's build something great together.
                        </h2>
                    </div>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-[#4b2e6f] mb-2" htmlFor="firstName">
                                First name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a9a1e1] transition duration-200"
                                placeholder="Enter your first name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[#4b2e6f] mb-2" htmlFor="lastName">
                                Last name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a9a1e1] transition duration-200"
                                placeholder="Enter your last name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[#4b2e6f] mb-2" htmlFor="organization">
                                Organization
                            </label>
                            <input
                                type="text"
                                id="organization"
                                className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a9a1e1] transition duration-200"
                                placeholder="Enter your organization"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[#4b2e6f] mb-2" htmlFor="email">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a9a1e1] transition duration-200"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[#4b2e6f] mb-2" htmlFor="phone">
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a9a1e1] transition duration-200"
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[#4b2e6f] mb-2" htmlFor="building">
                                What are we building
                            </label>
                            <input
                                type="text"
                                id="building"
                                className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a9a1e1] transition duration-200"
                                placeholder="Describe what we're building"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-[#4b2e6f] mb-2" htmlFor="comments">
                                Comments
                            </label>
                            <textarea
                                id="comments"
                                className="w-full p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a9a1e1] transition duration-200 h-24 resize-none"
                                placeholder="Add your comments"
                            />
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-[#a9a1e1] text-[#2a1a3d] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#7e69c0] transition duration-200 hover:shadow-lg"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    )
}
