function Features() {
  const pillars = [
    {
      title: 'Community',
      description: 'Inclusive meetups and peer-to-peer mentoring designed to foster deep technical connection in a relaxed alpine setting.',
      icon: <span className="material-symbols-outlined text-5xl">diversity_2</span>
    },
    {
      title: 'Hackathons',
      description: 'Collaborative buildathons where the brightest minds prototype cutting-edge dApps above the clouds.',
      icon: <span className="material-symbols-outlined text-5xl">terminal</span>
    },
    {
      title: 'Workshops',
      description: 'Hands-on labs on smart contracts, ZK-proofs, and DeFi architecture led by industry veterans.',
      icon: <span className="material-symbols-outlined text-5xl">local_library</span>
    }
  ]

  return (
    <section id="pillars" className="relative py-24 scroll-mt-24 border-t border-white/0">
      <div>
        <div className="flex flex-col mb-20">
          <h2 className="text-6xl md:text-8xl font-black text-[color:var(--text)] uppercase tracking-tighter mb-4 drop-shadow-sm">Our Pillars</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`ice-glass-card p-10 group hover:translate-y-[-8px] transition-all duration-500 ${
                index === 0 ? 'md:col-span-5' : ''
              } ${index === 1 ? 'md:col-span-5 md:mt-24' : ''} ${index === 2 ? 'md:col-start-4 md:col-span-6 md:-mt-12' : ''}`}
            >
              <div className="text-blue-600 mb-8">{pillar.icon}</div>
              <h3 className="text-3xl font-black text-[color:var(--text)] uppercase mb-6 tracking-tight">{pillar.title}</h3>
              <p className="text-slate-800 text-lg leading-relaxed font-light">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
