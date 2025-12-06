function About() {
  return (
    <section id="about" className="py-20 container mx-auto px-6">
      <div className="md:flex md:items-center md:space-x-12">
        <div>
          <h2 className="text-4xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg text-gray-700 mb-4">
            Andorra is a rapidly expanding Web3 hub, bringing developers, researchers, and enthusiasts together to learn, build, and launch Ethereum-powered projects in Andorra.
          </p>
          <a href="#features" className="text-blue-600 font-semibold hover:underline">
            Discover Our Pillars
          </a>
        </div>
      </div>
    </section>
  )
}

export default About

