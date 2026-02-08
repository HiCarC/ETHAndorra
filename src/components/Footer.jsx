function Footer() {
  return (
    <footer className="relative z-10 pt-32 pb-16 border-t border-white/30 ice-glass-card mt-[-40px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1 space-y-8">
            <div className="flex items-center gap-3">
              <img
                src="/assets/ETHAndorraLogo-removebg-preview.png"
                alt="ETH Andorra"
                className="h-14 w-14 object-contain"
              />
              <span className="font-black text-xl uppercase tracking-tighter text-[color:var(--text)]">ETH Andorra</span>
            </div>
            <div className="flex gap-8 text-2xl">
              <a
                className="text-slate-600 hover:text-blue-600 transition-colors"
                href="https://x.com/EthAndorra"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-x-twitter" aria-hidden="true"></i>
              </a>
              <a
                className="text-slate-600 hover:text-blue-600 transition-colors"
                href="https://www.instagram.com/eth_andorra/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="space-y-8">
            <h4 className="font-black text-[color:var(--text)] uppercase text-xs tracking-[0.3em]">Navigation</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-700">
              <li><a className="hover:text-blue-600 transition-colors" href="#pillars">Pillars</a></li>
              <li><a className="hover:text-blue-600 transition-colors" href="#events">Events</a></li>
              <li><a className="hover:text-blue-600 transition-colors" href="#about">About</a></li>
            </ul>
          </div>
          <div className="space-y-8">
            <h4 className="font-black text-[color:var(--text)] uppercase text-xs tracking-[0.3em]">Contact</h4>
            <a
              className="text-xs font-bold uppercase tracking-widest text-slate-700 hover:text-blue-600 transition-colors"
              href="mailto:info@ethandorra.com"
            >
              info@ethandorra.com
            </a>
          </div>
        </div>
        <div className="pt-8 border-t border-white/30 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">
          <p>© 2025 ETH Andorra. Built for the Ethereum community.</p>
          <div className="flex gap-8">
            <span>Designed in the Pyrenees</span>
            <span>1,023M Altitude</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
