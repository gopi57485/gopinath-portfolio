"use client"

import { useState, useEffect } from "react"
import { ChevronRight, ArrowRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import profile from '/profile.jpeg'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/gopi57485", label: "GitHub", color: "hover:bg-white/20" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/gopinath-e-1311652a3", label: "LinkedIn", color: "hover:bg-blue-500/20" },
    { icon: <Mail className="w-5 h-5" />, href: "gopi57485@gmail.com", label: "Email", color: "hover:bg-purple-500/20" },
    { icon: <ExternalLink className="w-5 h-5" />, href: "#", label: "Portfolio", color: "hover:bg-cyan-500/20" },
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleViewProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Gopinath-Resume.pdf";
    link.click();
  };


  return (
    <section className=" pt-32 pb-20 px-4 md:px-8 lg:px-16 bg-neutral-950">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`space-y-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-cyan-400 font-medium text-sm uppercase tracking-widest">Welcome to my portfolio</p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">Gopinath</h1>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl text-neutral-300 font-semibold">Web Developer | Designer</h2>
                <p className="text-lg text-neutral-400 max-w-lg leading-relaxed">
                  Web developer with one year of React experience, building responsive, scalable web applications through real-world projects, focused on clean code and modern user-centered design.
                </p>


              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={handleViewProjects}
                  className="group px-8 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={handleDownloadCV}
                  className="px-8 py-3 border-2 border-neutral-700 text-neutral-300 font-semibold rounded-lg hover:bg-neutral-900/50 hover:border-neutral-600 transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Download CV</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>


              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-800">
                <div className="space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    20+
                  </div>
                  <div className="text-sm text-neutral-500 uppercase tracking-wide">Projects</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    1+
                  </div>
                  <div className="text-sm text-neutral-500 uppercase tracking-wide">Years Exp</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    98%
                  </div>
                  <div className="text-sm text-neutral-500 uppercase tracking-wide">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div
            className={`relative flex items-center justify-center transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Gradient Background Orb */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 rounded-full blur-3xl opacity-30 animate-pulse"></div>

              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-neutral-800 shadow-2xl shadow-blue-500/20">
                <img
                  src={profile}
                  alt="Alex Johnson"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Social Links */}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-neutral-900/80 backdrop-blur-md px-6 py-4 rounded-full border border-neutral-700/50 shadow-2xl">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`w-11 h-11 rounded-full flex items-center justify-center bg-neutral-800/50 text-neutral-300 ${link.color} transition-all duration-300 hover:scale-110 hover:text-white`}
                    title={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
