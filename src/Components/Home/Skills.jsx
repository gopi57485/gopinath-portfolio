import React from 'react'

const Skills = () => {
  const skillsData = [
    { 
      name: "HTML5", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" 
    },
    { 
      name: "CSS3", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" 
    },
    { 
      name: "JavaScript", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
    },
    { 
      name: "jQuery", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" 
    },
    { 
      name: "React", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
    },
    { 
      name: "PHP", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" 
    },
    { 
      name: "Laravel", 
      icon: "/laravel.png" 
    },
    { 
      name: "CodeIgniter", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg" 
    },
    { 
      name: "TypeScript", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" 
    },
    { 
      name: "Next.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" 
    },
    { 
      name: "Tailwind CSS", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" 
    },
    { 
      name: "Bootstrap", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" 
    },
    { 
      name: "WordPress", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" 
    },
    { 
      name: "Responsive Design", 
      icon: "/responsive.png" 
    },
    { 
      name: "Git", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
    },
    { 
      name: "GitHub", 
      icon: "/github.png" 
    },
    { 
      name: "MySQL", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
    },
   
  ]

  return (
    <section id="skills" className="py-20 md:py-28 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I've mastered for building exceptional web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 md:p-8 
                         bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 
                         rounded-xl border border-neutral-700/50
                         hover:border-cyan-500/50 hover:from-neutral-800 hover:to-neutral-850
                         hover:shadow-lg hover:shadow-cyan-500/20
                         transition-all duration-300 cursor-default group"
            >
              {/* Logo Image */}
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Skill Name */}
              <p className="text-white font-semibold text-center text-sm md:text-base group-hover:text-cyan-300 transition-colors">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default Skills