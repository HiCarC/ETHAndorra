import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Events from './components/Events'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen text-[color:var(--text)]">
      <div className="ice-background" aria-hidden="true"></div>
      <div className="diffused-overlay" aria-hidden="true"></div>
      <div className="swiss-grid-lines" aria-hidden="true">
        <div className="v-line left-[5%]"></div>
        <div className="v-line left-[15%] hidden lg:block"></div>
        <div className="v-line right-[5%]"></div>
        <div className="v-line right-[15%] hidden lg:block"></div>
      </div>

      <Navbar />
      <Hero />
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-48 pb-32">
        <Features />
        <About />
        <Events />
        <Subscribe />
      </main>
      <Footer />
    </div>
  )
}

export default App
