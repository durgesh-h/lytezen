import Image from 'next/image'
import React from 'react'
import image from '../../public/SC_Full.png'

const Footer = () => {
  return (
    <footer className="pt-12 text-center pb-12 bg-[#2a1a3d] text-white">
      <div className="flex justify-center space-x-4 mb-4">
        <a href="#" className="hover:text-[#a9a1e1]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" />
          </svg>
        </a>
        <a href="#" className="hover:text-[#a9a1e1]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z" />
          </svg>
        </a>
      </div>
      <p className="text-sm">
        LYTEZEN INC. | 1234 TECH PARK, SUITE 500, BANGALORE, INDIA | INFO@LYTEZEN.COM
      </p>
      <p className="text-sm">© 2025 Lytezen. All rights reserved. | Site by Sankalp Pimpalkar.</p>
      <p className="text-sm">
        <a href="#" className="hover:text-[#a9a1e1]">Privacy Policy</a> | <a href="#" className="hover:text-[#a9a1e1]">Accessibility</a>
      </p>
      <div className="mt-4">
        <Image
          alt='df'
          src={image}
          height={100}
          width={100} className="w-20 h-auto mx-auto" />
      </div>
    </footer>
  )
}

export default Footer