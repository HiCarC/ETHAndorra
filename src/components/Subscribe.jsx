import { useEffect } from 'react'

function Subscribe() {
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://subscribe-forms.beehiiv.com/embed.js"]')
    if (existingScript) return
    const script = document.createElement('script')
    script.src = 'https://subscribe-forms.beehiiv.com/embed.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <section id="subscribe" className="relative py-24 scroll-mt-32">
      <div>
        <div className="ice-glass-card p-16 md:p-32 relative overflow-hidden text-center border-white/60">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/10 to-transparent"></div>
          <div className="relative z-10 max-w-3xl mx-auto space-y-12">
            <h2 className="text-5xl md:text-7xl font-black text-[color:var(--text)] uppercase tracking-tighter">Stay in the loop</h2>
            <p className="text-xl md:text-2xl text-slate-800 font-light">
              Get the latest updates on meetups, hackathons, and alpine summits delivered straight to your inbox.
            </p>
            <div className="ice-glass-card border-white/20 shadow-inner overflow-hidden flex justify-center">
              <iframe
                src="https://subscribe-forms.beehiiv.com/ee5f2f56-7e2f-489e-8db0-6067acd8ee7d"
                className="beehiiv-embed"
                data-test-id="beehiiv-embed"
                frameBorder="0"
                scrolling="no"
                style={{ width: '400px', height: '48px', margin: '0', borderRadius: '0px', backgroundColor: 'transparent', boxShadow: '0 0 #0000', maxWidth: '100%' }}
                title="Beehiiv Subscribe"
              />
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-600 font-bold">
              Zero spam. Decentralized updates only.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
