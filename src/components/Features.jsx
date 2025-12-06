function Features() {
  const pillars = [
    {
      emoji: '🤝',
      title: 'Community',
      description: 'Inclusive meetups, peer-to-peer mentoring, and open discussions.'
    },
    {
      emoji: '🚀',
      title: 'Hackathons',
      description: 'Collaborative buildathons to prototype cutting-edge dApps.'
    },
    {
      emoji: '🎓',
      title: 'Workshops',
      description: 'Hands-on coding labs on smart contracts, DeFi, NFTs, and more.'
    }
  ]

  return (
    <section id="features" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Pillars</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-3xl shadow-lg transform hover:-translate-y-2 transition"
            >
              <div className="text-5xl mb-4">{pillar.emoji}</div>
              <h3 className="text-2xl font-semibold mb-2">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

