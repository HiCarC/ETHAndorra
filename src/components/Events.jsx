function Events() {
  return (
    <section id="events" className="relative py-24 scroll-mt-24">
      <div>
        <h2 className="text-6xl md:text-8xl font-black text-center text-[color:var(--text)] uppercase tracking-tighter mb-24 drop-shadow-sm">Events</h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="ice-glass-card overflow-hidden shadow-2xl border-white/60 p-6">
            <div className="mb-4 flex items-center gap-4">
              <span className="h-px w-12 bg-blue-600"></span>
              <span className="text-xs font-black text-blue-600 uppercase tracking-[0.3em]">Past</span>
            </div>
            <iframe
              src="https://luma.com/embed/event/evt-meSMNOqjumTVBvQ/simple"
              title="Past Event"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: '1px solid #bfcbda88', borderRadius: '4px' }}
              allow="fullscreen; payment"
              aria-hidden="false"
              tabIndex="0"
            />
          </div>
          <div className="ice-glass-card shadow-2xl border-white/60 p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-12 bg-blue-600"></span>
                <span className="text-xs font-black text-blue-600 uppercase tracking-[0.3em]">Future</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-[color:var(--text)] uppercase leading-tight">No future events planned</h3>
              <p className="mt-4 text-slate-800 text-lg font-light leading-relaxed">
                Register to the newsletter to be the first to know when the next events are announced.
              </p>
            </div>
            <a
              href="#subscribe"
              className="mt-8 inline-flex w-fit bg-blue-600 text-white px-8 py-3 font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg"
            >
              Get Updates
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events
