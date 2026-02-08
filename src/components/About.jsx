function About() {
  const highlights = [
    {
      title: 'Pro-business administration',
      description: 'Enjoy regulatory clarity and imposition advantages. Connect with crypto-friendly banks and businesses in a pro-innovation jurisdiction.'
    },
    {
      title: 'Safest Country & Highest Capital',
      description: 'The safest country and home to the highest capital in Europe, with a strong culture of sports and wellbeing.'
    },
    {
      title: 'Intimate Access',
      description: 'Skip the noise. Connect directly with core devs in an exclusive setting.'
    }
  ]

  const iconSvgs = [
    <span className="material-symbols-outlined text-4xl text-blue-600/60">account_balance</span>,
    <span className="material-symbols-outlined text-4xl text-blue-400/60">landscape</span>,
    <span className="material-symbols-outlined text-4xl text-blue-200/60">groups</span>
  ]

  return (
    <section id="about" className="relative py-24">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-sm">Destination</span>
            <h2 className="text-6xl md:text-8xl font-black text-[color:var(--text)] uppercase tracking-tighter leading-none">Why<br />Andorra?</h2>
            <p className="text-xl text-slate-800 max-w-xl font-light leading-relaxed">
              A unique convergence of technology, nature, and innovation. The perfect environment for clarity and connection away from the noise.
            </p>
          </div>
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`ice-glass-card p-8 border-l-4 flex gap-6 items-start transform hover:translate-x-4 transition-transform shadow-lg ${
                  index === 0 ? 'border-l-blue-600' : index === 1 ? 'border-l-blue-400' : 'border-l-blue-200'
                }`}
              >
                {iconSvgs[index]}
                <div>
                  <h4 className="text-xl font-bold text-[color:var(--text)] mb-2 uppercase">{item.title}</h4>
                  <p className="text-sm text-slate-700">
                    {item.title === 'Safest Country & Highest Capital' ? (
                      <>
                        The <span className="font-bold text-blue-700">safest country</span> and home to the{' '}
                        <span className="font-bold text-blue-700">highest capital in Europe</span>, with a strong
                        culture of sports and wellbeing.
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
