function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-10 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/assets/ETHAndorraVideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-blue-100/70 backdrop-blur-[2px]" aria-hidden="true" />
      <div className="relative z-10 max-w-5xl mx-auto space-y-6">
        <img
          src="/assets/ETHAndorraLogo-removebg-preview.png"
          alt="ETH Andorra"
          className="mx-auto mt-10 mb-1 h-48 w-48 object-contain"
        />
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-[color:var(--text)] uppercase leading-[0.85] text-left md:text-center -mt-1">
          The <span className="text-glass-blue">Ethereum</span> <br />
          Community <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-500 to-blue-700/60">of Andorra</span>
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-slate-800 max-w-2xl mx-auto font-light tracking-wide bg-white/10 backdrop-blur-sm inline-block px-4 py-1">
          High altitude innovation in the heart of the Pyrenees
        </p>
        <div className="pt-4 pb-4 flex justify-center">
          <a
            href="#subscribe"
            className="ice-glass-card text-[color:var(--text)] px-12 py-3 font-black uppercase tracking-widest bg-white/8 hover:bg-white/16 transition-all border border-white/15 shadow-sm"
          >
            Subscribe to the Newsletter
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
