function About() {
  const highlights = [
    {
      kicker: 'Regulatory edge',
      title: 'Pro-business administration',
      displayTitle: (
        <>
          <span className="whitespace-nowrap">Pro-business</span>
          <br />
          administration
        </>
      ),
      description: 'Enjoy regulatory clarity and imposition advantages. Connect with crypto-friendly banks and businesses in a pro-innovation jurisdiction.'
    },
    {
      kicker: 'Altitude + stability',
      title: 'Safest Country & Highest Capital',
      displayTitle: 'Safety + altitude',
      description: 'The safest country and home to the highest capital in Europe, with a strong culture of sports and wellbeing.'
    },
    {
      kicker: 'Signal over noise',
      title: 'Intimate Access',
      displayTitle: (
        <>
          Intimate
          <br />
          access
        </>
      ),
      description: 'Skip the noise. Connect directly with core devs in an exclusive setting.'
    }
  ]

  return (
    <section id="about" className="relative py-10 lg:py-12">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] gap-10 lg:gap-12 items-start">
          <div className="space-y-5 lg:pt-6">
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-sm">Destination</span>
            <h2 className="text-5xl md:text-[3.5rem] xl:text-[4.25rem] font-black text-[color:var(--text)] uppercase tracking-tighter leading-[0.9]">Why<br />Andorra?</h2>
            <p className="text-lg md:text-[1.18rem] text-slate-800 max-w-xl font-light leading-relaxed">
              A unique convergence of technology, nature, and innovation. The perfect environment for clarity and connection away from the noise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 lg:-mt-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`relative overflow-hidden border border-white/60 bg-[rgba(238,246,255,0.72)] p-5 md:p-6 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.18)] transition-transform duration-500 hover:-translate-y-1 ${
                  index === 0 ? 'md:col-span-2' : 'h-full'
                }`}
                style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
              >
                <div className="absolute left-0 top-0 h-full w-[3px] bg-blue-500/85" />
                <div className="absolute right-4 top-3 text-4xl md:text-[4.25rem] font-black tracking-tighter text-blue-600/10">
                  0{index + 1}
                </div>
                <div className="relative flex h-full flex-col pr-10 md:pr-12">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-px w-8 bg-blue-500/70" />
                    <span className={`font-black uppercase tracking-[0.28em] text-blue-700 ${
                      index === 0 ? 'text-[11px]' : 'text-[10px]'
                    }`}>
                      {item.kicker}
                    </span>
                  </div>
                  <h4 className={`font-black text-[color:var(--text)] uppercase leading-[0.98] ${
                    index === 0 ? 'text-[1.95rem] md:text-[2.2rem] max-w-[15rem]' : 'text-[1.72rem] md:text-[2rem] max-w-[14rem]'
                  }`}>
                    {item.displayTitle}
                  </h4>
                  <p className={`mt-4 leading-relaxed text-slate-700 ${
                    index === 0 ? 'text-[0.98rem] max-w-[35rem]' : 'text-[0.98rem] md:text-[1rem] max-w-[16rem]'
                  }`}>
                    {item.title === 'Pro-business administration' ? (
                      <>
                        Enjoy regulatory clarity and{' '}
                        <span className="font-bold text-[color:var(--text)]">imposition advantages</span>. Connect with{' '}
                        <span className="font-bold text-[color:var(--text)]">crypto-friendly banks</span> and businesses in a
                        pro-innovation jurisdiction.
                      </>
                    ) : item.title === 'Safest Country & Highest Capital' ? (
                      <>
                        The <span className="font-bold text-[color:var(--text)]">safest country</span> and home to the{' '}
                        <span className="font-bold text-[color:var(--text)]">highest capital in Europe</span>, with a strong
                        culture of sports and wellbeing.
                      </>
                    ) : item.title === 'Intimate Access' ? (
                      <>
                        <span className="font-bold text-[color:var(--text)]">Skip the noise</span>. Connect directly with{' '}
                        <span className="font-bold text-[color:var(--text)]">core devs</span> in an exclusive setting.
                      </>
                    ) : (
                      item.description
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
