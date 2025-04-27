import React from 'react'

const Header = () => {
  return (
    <header className="bg-[#2a1a3d] text-white p-4 flex justify-between items-center">
    <div className="text-2xl font-bold">Lytezen</div>
    <nav className="space-x-4">
      <a href="#" className="hover:text-gray-300">How It Works</a>
      <a href="#" className="hover:text-gray-300">About</a>
      <a href="#" className="hover:text-gray-300">Resources</a>
      <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700">Log In</button>
    </nav>
  </header>
  )
}

export default Header