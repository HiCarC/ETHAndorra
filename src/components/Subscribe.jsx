import { useState } from 'react'

function Subscribe() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log('Subscribing:', email)
    setEmail('')
  }

  return (
    <section id="subscribe" className="bg-gradient-to-r from-blue-600 to-red-500 py-20 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="mb-6">Get the latest updates on meetups, hackathons, and workshops.</p>
        <form 
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4"
        >
          <input 
            type="email" 
            placeholder="Your email" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-3 rounded-full focus:outline-none text-gray-900" 
          />
          <button 
            type="submit" 
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-md transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default Subscribe

