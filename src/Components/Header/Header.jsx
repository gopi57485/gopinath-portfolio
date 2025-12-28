"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800/50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow duration-300">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-lg font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-cyan-300 hover:to-purple-300 transition-all duration-300">
              Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-neutral-300 hover:text-white font-medium text-md transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-0.5 left-4 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-[calc(100%-32px)] transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Right Section - Buttons */}
          <div className="flex items-center space-x-4">
            {/* Desktop CTA */}
            <button className="hidden md:inline-flex px-6 py-2.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 text-sm">
              Get In Touch
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-neutral-200" /> : <Menu className="w-6 h-6 text-neutral-200" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-neutral-800/50 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-neutral-300 hover:text-white hover:bg-neutral-900/50 font-medium rounded-lg transition-all duration-300"
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full px-6 py-3 mt-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                Get In Touch
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
