import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-gradient-to-t from-neutral-950 to-neutral-900 border-t border-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Left side - Copyright */}
          <div className="text-gray-400 text-sm">
            <p>© {currentYear} All rights reserved.</p>
          </div>

          {/* Right side - Developed by */}
          <div className="text-gray-400 text-sm">
            <p>Developed by <span className="text-cyan-300 font-medium">Gopinath</span></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer