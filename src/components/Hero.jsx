function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-red-500 opacity-80"></div>
      <div className="relative z-10 px-6">
        <img 
          src="/assets/ETHAndorraLogo-removebg-preview.png" 
          alt="Logo" 
          className="mx-auto h-40 mb-6 animate__animated animate__fadeInDown"
        />
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate__animated animate__zoomIn">
          The Ethereum Community of Andorra
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 animate__animated animate__fadeInUp">
          In the heart of the Pyrenees, we are building the future of Web3
        </p>
        <a 
          href="#events" 
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition animate__animated animate__pulse animate__infinite animate__slower"
        >
          View Events
        </a>
      </div>
      {/* Animated accent shapes */}
      <div className="absolute bottom-0 left-10 w-48 h-48 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-white/10 rounded-full animate-ping"></div>
    </section>
  )
}

export default Hero

