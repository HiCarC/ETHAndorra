import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/70 backdrop-blur-md z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <img src="/assets/ETHAndorraLogo-removebg-preview.png" alt="Logo" className="h-8 w-auto" />
          <span className="text-xl font-semibold text-blue-700">ETH Andorra</span>
        </a>
        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#features" className="hover:text-blue-600 transition">Pillars</a>
          <a href="#events" className="hover:text-blue-600 transition">Events</a>
          <a href="#subscribe" className="hover:text-blue-600 transition">Subscribe</a>
        </div>
        <button 
          id="menu-btn" 
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md">
          <a href="#about" className="block px-6 py-3 border-b hover:bg-gray-100" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#features" className="block px-6 py-3 border-b hover:bg-gray-100" onClick={() => setMenuOpen(false)}>Pillars</a>
          <a href="#events" className="block px-6 py-3 border-b hover:bg-gray-100" onClick={() => setMenuOpen(false)}>Events</a>
          <a href="#subscribe" className="block px-6 py-3 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>Subscribe</a>
        </div>
      )}
    </header>
  )
}

export default Navbar

