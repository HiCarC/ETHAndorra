const EVENTS = [
  {
    id: 'ethglobal-cowork-andorra-mar-2026',
    title: 'ETHGlobal Cowork Andorra',
    dateLabel: 'March 5, 2026',
    movesToPastAt: '2026-03-06T00:00:00',
    embedUrl: 'https://luma.com/embed/event/evt-MDTjAZmxohqcVGT/simple',
    eventUrl: 'https://luma.com/ethglobal-cowork-andorra'
  },
  {
    id: 'eth-andorra-previous',
    title: 'ETH Andorra Community Event',
    dateLabel: 'Previous Event',
    movesToPastAt: '2025-01-01T00:00:00',
    embedUrl: 'https://luma.com/embed/event/evt-meSMNOqjumTVBvQ/simple'
  }
]

const EMBED_STYLE = { border: '1px solid #bfcbda88', borderRadius: '4px' }

function EventCard({ event }) {
  return (
    <article className="ice-glass-card overflow-hidden shadow-2xl border-white/60 p-6">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-lg font-black uppercase tracking-wide text-[color:var(--text)]">{event.title}</h3>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600">{event.dateLabel}</span>
      </div>
      <iframe
        src={event.embedUrl}
        title={event.title}
        width="100%"
        height="450"
        frameBorder="0"
        style={EMBED_STYLE}
        allow="fullscreen; payment"
        aria-hidden="false"
        tabIndex="0"
      />
    </article>
  )
}

function Events() {
  const now = new Date()
  const pastEvents = EVENTS
    .filter((event) => new Date(event.movesToPastAt) <= now)
    .sort((a, b) => new Date(b.movesToPastAt) - new Date(a.movesToPastAt))
  const futureEvents = EVENTS
    .filter((event) => new Date(event.movesToPastAt) > now)
    .sort((a, b) => new Date(a.movesToPastAt) - new Date(b.movesToPastAt))

  return (
    <section id="events" className="relative py-24 scroll-mt-24">
      <div>
        <h2 className="text-6xl md:text-8xl font-black text-center text-[color:var(--text)] uppercase tracking-tighter mb-24 drop-shadow-sm">Events</h2>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="mb-4 flex items-center gap-4 px-2">
              <span className="h-px w-12 bg-blue-600"></span>
              <span className="text-xs font-black text-blue-600 uppercase tracking-[0.3em]">Past</span>
            </div>
            <div className="grid gap-6">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="mb-4 flex items-center gap-4 px-2">
              <span className="h-px w-12 bg-blue-600"></span>
              <span className="text-xs font-black text-blue-600 uppercase tracking-[0.3em]">Future</span>
            </div>
            {futureEvents.length > 0 ? (
              <div className="grid gap-6">
                {futureEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="ice-glass-card shadow-2xl border-white/60 p-10 flex flex-col justify-between">
                <div>
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
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events
