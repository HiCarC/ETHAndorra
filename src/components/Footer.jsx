function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <a href="#" className="flex items-center mb-4 md:mb-0">
          <img src="/assets/ETHAndorraLogo-removebg-preview.png" alt="Logo" className="h-8" />
          <span className="ml-2 text-white font-semibold">ETHAndorra</span>
        </a>
        <div className="space-x-6">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

