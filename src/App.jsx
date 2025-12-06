import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Events from './components/Events'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 antialiased">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Events />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App

