"use client"

const About = () => {
  const educationDetails = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Thantahi Periyar Govt Arts & Science College",
      year: "2022-2024",
      details: "Specialized in Web Development and Machine Learning",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Thantahi Periyar Govt Arts & Science College",
      year: "2019-2022",
      details: "Graduated with Honors, GPA: 7.8/10.0",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Frontend Developer focused on building modern, responsive, and user-friendly web applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* LEFT COLUMN – ABOUT ME */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-8 md:p-10 border border-neutral-700 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 pb-4 border-b border-neutral-700">
                Who{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  I Am
                </span>
              </h3>

              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-base md:text-lg">
                  I am a passionate Frontend Developer with one year of hands-on experience in building
                  responsive and visually appealing web applications. I enjoy transforming design concepts
                  into functional user interfaces while maintaining clean, scalable, and maintainable code
                  using modern frontend technologies.
                </p>

                <p className="text-base md:text-lg">
                  I specialize in HTML, CSS, JavaScript, React, and Tailwind CSS, focusing on performance,
                  accessibility, and usability. I have experience working on real-world projects, improving
                  UI consistency, and ensuring cross-browser compatibility across different devices.
                </p>

                <p className="text-base md:text-lg">
                  I am highly motivated and eager to grow as a frontend professional. I enjoy solving UI
                  challenges, collaborating with teams, and learning new tools. My goal is to contribute to
                  impactful projects while continuously improving my frontend development skills.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN – EDUCATION & EXPERIENCE */}
          <div className="space-y-8">
            {/* EDUCATION */}
            <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-8 md:p-10 border border-neutral-700 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 pb-4 border-b border-neutral-700">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                  Education
                </span>
              </h3>

              <div className="space-y-8">
                {educationDetails.map((edu, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-blue-500/50">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                    <div className="ml-4 space-y-2">
                      <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-xs font-bold rounded-full border border-blue-700/50">
                        {edu.year}
                      </span>
                      <h4 className="text-lg md:text-xl font-bold text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-cyan-300 font-semibold">
                        {edu.institution}
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {edu.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* EXPERIENCE */}
            <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-8 md:p-10 border border-neutral-700 shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 pb-4 border-b border-neutral-700">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Experience
                </span>
              </h3>

              <div className="relative pl-6 border-l-2 border-purple-500/50">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-400"></div>

                <div className="ml-4 space-y-3">
                  <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-xs font-bold rounded-full border border-purple-700/50">
                    Jayam Web Solutions
                  </span>

                  <h4 className="text-lg md:text-xl font-bold text-white">
                    Frontend Developer
                  </h4>

                  <p className="text-purple-300 font-semibold">
                    1+ Years Experience as a Frontend Developer at Jayam Web Solutions
                  </p>
      
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </section >
  )
}

export default About
