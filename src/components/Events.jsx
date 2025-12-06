function Events() {
  const events = [
    {
      id: 1,
      image: '/assets/10YEth300725.png',
      title: '10 Years of Ethereum Andorra',
      description: 'Join us for a chill gathering to commemorate a decade of Ethereum, a journey of innovation, decentralization, and community.',
      location: 'Roc Blanc Hotel & Spa, Plaça Coprínceps 5, Escaldes-Engordany, Andorra',
      link: 'https://lu.ma/ggesxz44',
      linkText: 'Register on Luma'
    }
  ]

  return (
    <section id="events" className="py-20 container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Past Events</h2>
      <div className="space-y-10 max-w-4xl mx-auto">
        {events.map((event) => (
          <div 
            key={event.id}
            className="relative bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2"
          >
            <img 
              src={event.image} 
              alt={event.title} 
              className="object-cover w-full h-52 md:h-auto"
            />
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <p className="text-gray-600 mb-4">
                <strong>Location:</strong> {event.location}
              </p>
              <a 
                href={event.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:underline"
              >
                {event.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Events

