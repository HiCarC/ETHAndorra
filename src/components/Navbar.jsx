import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative z-50">
      <nav className="fixed w-full z-50 glass-nav">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/assets/ETHAndorraLogo-removebg-preview.png"
                alt="ETH Andorra"
                className="h-14 w-14 object-contain"
              />
              <span className="text-xl font-black uppercase tracking-tighter text-[color:var(--text)]">ETH Andorra</span>
            </div>
            <div className="hidden md:flex items-center space-x-10">
              <a className="text-xs font-bold uppercase tracking-widest text-slate-700 hover:text-[color:var(--primary)] transition-colors" href="#pillars">Pillars</a>
              <a className="text-xs font-bold uppercase tracking-widest text-slate-700 hover:text-[color:var(--primary)] transition-colors" href="#about">About</a>
              <a className="text-xs font-bold uppercase tracking-widest text-slate-700 hover:text-[color:var(--primary)] transition-colors" href="#events">Events</a>
              <a className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-none text-xs font-black uppercase tracking-widest transition-all shadow-lg" href="#subscribe">
                Join Newsletter
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="text-[color:var(--text)]"
                type="button"
                aria-label="Open menu"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span className="material-symbols-outlined text-3xl">menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div className="fixed top-20 left-0 right-0 z-40 md:hidden">
          <div className="mx-auto w-[min(1200px,92%)]">
            <div className="glass-nav rounded-2xl px-6 py-4 space-y-3 text-xs font-bold uppercase tracking-[0.3em] text-slate-700">
              <a className="block" href="#pillars" onClick={() => setMenuOpen(false)}>Pillars</a>
              <a className="block" href="#about" onClick={() => setMenuOpen(false)}>About</a>
              <a className="block" href="#events" onClick={() => setMenuOpen(false)}>Events</a>
              <a className="block" href="#subscribe" onClick={() => setMenuOpen(false)}>Join Newsletter</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
