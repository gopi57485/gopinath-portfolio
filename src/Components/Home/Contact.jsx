"use client"

import React, { useState } from "react"
import { Mail, Linkedin, Github, Send, Phone } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:gopi57485@gmail.com",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-r from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/30",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/gopinath-e-1311652a3/",
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-gradient-to-r from-blue-600/10 to-blue-800/10",
      borderColor: "border-blue-600/30",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/gopi57485",
      color: "from-gray-700 to-gray-900",
      bgColor: "bg-gradient-to-r from-gray-700/10 to-gray-900/10",
      borderColor: "border-gray-700/30",
    },
    {
      icon: Phone,
      label: "Mobile",
      href: "tel:+918925493871", // replace with your real number
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-gradient-to-r from-green-500/10 to-emerald-600/10",
      borderColor: "border-green-500/30",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-8 md:p-10 border border-neutral-700">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Send a Message
              </span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg 
                           text-white placeholder:text-gray-500 focus:outline-none 
                           focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30
                           transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg 
                           text-white placeholder:text-gray-500 focus:outline-none 
                           focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30
                           transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello, I'm interested in working with you..."
                  rows={6}
                  className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg 
                           text-white placeholder:text-gray-500 focus:outline-none 
                           focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30
                           transition-all duration-300 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className={`w-full px-6 py-4 rounded-xl font-semibold transition-all duration-300 
                         flex items-center justify-center gap-2 ${submitted
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                    : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white hover:shadow-lg hover:shadow-cyan-500/25"
                  }`}
              >
                {submitted ? (
                  <>
                    <span className="text-white">Message Sent!</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} className="animate-pulse" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-8 md:p-10 border border-neutral-700">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Contact Information
                </span>
              </h3>

              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out using any of the methods below.
              </p>

              {/* Social Links */}
              <div className="space-y-4 mb-8">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={index}
                      href={link.href}
                      className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 
                               group hover:scale-[1.02] ${link.bgColor} ${link.borderColor}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center 
                                    bg-gradient-to-r ${link.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold group-hover:text-cyan-300 transition-colors">
                          {link.label}
                        </h4>
                        <p className="text-gray-400 text-sm mt-1">
                          {link.label === "Email"
                            ? "gopi57485@gmail.com"
                            : link.label === "LinkedIn"
                              ? "linkedin.com/in/gopi"
                              : link.label === "GitHub"
                                ? "github.com/gopi"
                                : link.label === "Mobile"
                                  ? "+91 89254 93871" // replace with your real number
                                  : ""}
                        </p>

                      </div>
                      <svg className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact