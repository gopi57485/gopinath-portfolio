import React from 'react'
import { ExternalLink, Github } from "lucide-react"

const projectsData = [
  {
    title: "Weather Application",
    description: "Real-time weather application providing location-based forecasts with a clean and intuitive user interface.",
    tags: ["React", "API Integration", "Tailwind CSS"],
    demo: "https://extraordinary-brioche-fa0821.netlify.app/",
    github: "#",
    image: "/projects/weather-app.avif",
  },
  {
    title: "YouTube Clone",
    description: "A responsive video streaming platform clone with modern UI and dynamic content rendering.",
    tags: ["React", "API Integration", "Bootstrap"],
    demo: "https://main--myclonetube.netlify.app/",
    github: "#",
    image: "/projects/youtube-clone.png",
  },
  {
    title: "Image Search App",
    description: "Image search application allowing users to explore high-quality images through keyword-based search.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    demo: "https://myimagesearchengine.netlify.app/",
    github: "#",
    image: "/projects/image-search.png",
  },
  {
    title: "Kiskinda Education Consultants",
    description: "Educational consultancy website showcasing services, programs, and responsive design components.",
    tags: ["React", "Bootstrap", "CSS", "Components"],
    demo: "https://kiskinda.com/",
    github: "#",
    image: "/projects/kiskinda.png",
  },
  {
    title: "Jayam SCM Consultants",
    description: "Corporate website built to highlight consulting services with structured layouts and optimized performance.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Laravel"],
    demo: "https://www.jayamscmconsultants.com/",
    github: "#",
    image: "/projects/jayamscm.png",
  },
  {
    title: "JBD Food",
    description: "Business website developed to present food products, services, and company information clearly.",
    tags: ["HTML", "CSS", "JavaScript", "Core PHP"],
    demo: "https://www.jbd.ind.in/",
    github: "#",
    image: "/projects/jbd.png",
  },

  // 🔹 Additional Projects
  {
    title: "Ecommerce – Christian Book Store",
    description: "Ecommerce platform designed for browsing, searching, and purchasing books with user-friendly navigation.",
    tags: ["Html", "Css", "Boostrap" , "Ajax","Laravel" , "jquery"],
    demo: "https://christianbooksworld.com/",
    github: "#",
    image: "/projects/ecommerce.png",
  },
  {
    title: "AgriFlow",
    description: "Agriculture-focused web application supporting data-driven workflows and modern responsive layouts.",
    tags: ["Html", "CSS", "Bootstrap","javascript","CodeIgnator"],
    demo: "https://www.agriflowinitiative.org/",
    github: "#",
    image: "/projects/agriflow.png",
  },
  {
    title: "OSupport",
    description: "Support service platform designed to manage client requests with clean UI and structured components.",
    tags: ["Html", "CSS", "Bootstrap","javascript","CodeIgnator"],
    demo: "https://osupport.co.in/",
    github: "#",
    image: "/projects/osupport.png",
  },
  {
    title: "Cogent Tech Solutions",
    description: "Corporate website showcasing technology services, solutions, and professional branding.",
    tags: ["Html", "CSS", "Bootstrap","javascript","CodeIgnator"],
    demo: "https://www.cogenttechsolutions.in/",
    github: "#",
    image: "/projects/cogent-tech.png",
  },
  {
    title: "Avirm",
    description: "Business website developed with a focus on modern layouts, accessibility, and responsive design.",
    tags: ["Html", "CSS", "Bootstrap","javascript","CodeIgnator"],
    demo: "https://www.avirm.in/",
    github: "#",
    image: "/projects/avirm.png",
  },
  // {
  //   title: "Sai Krupa Holidays",
  //   description: "Travel and tourism website displaying tour packages with engaging visuals and smooth navigation.",
  //   tags: ["Html", "CSS", "Bootstrap","javascript","CodeIgnator"],
  //   demo: "#",
  //   github: "#",
  //   image: "/projects/sai-krupa.png",
  // },
  {
    title: "Askeytech",
    description: "Technology services website built to present solutions, products, and company expertise.",
    tags: ["Html", "CSS", "Bootstrap","javascript","Laravel","Ajax","Jquery"],
    demo: "https://www.askeytech.com/",
    github: "#",
    image: "/projects/askeytech.png",
  },
  {
    title: "Learning Management Dashboard",
    description: "Dashboard interface for managing courses, users, and learning analytics efficiently.",
    tags: ["React", "Dashboard", "Charts" , "Components","Material UI"],
    demo: "http://jayamdesigners.co.in/lms-nov26/",
    github: "#",
    image: "/projects/lms.png",
  },
  {
    title: "Medical Dashboard",
    description: "Healthcare dashboard for visualizing medical data, reports, and user management.",
    tags: ["React", "Dashboard", "UI Components" ,"Api Integration" , "Bootstrap"],
    demo: "http://rssdi.dfri.in/user-login",
    github: "#",
    image: "/projects/dfri.png",
  },
  {
    title: "Green Flyers",
    description: "Promotional business website designed to highlight services with clean visuals and responsive layouts.",
    tags: ["React", "Dashboard", "UI Components" ,"Api Integration" , "Bootstrap","Charts"],
    demo: "http://jayamdesigners.co.in/green-flyers10/",
    github: "#",
    image: "/projects/green-flyers.png",
  },
];


const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my recent work and contributions to the development community
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 
                         rounded-2xl border border-neutral-700 hover:border-cyan-500/50
                         transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10
                         flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="h-48 md:h-56 overflow-hidden relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent"></div>
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 
                                   text-cyan-300 text-xs font-medium rounded-full border border-cyan-700/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-6 pt-4 border-t border-neutral-700">
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm font-medium text-white 
                             hover:text-cyan-300 transition-colors group/link"
                  >
                    <span className="flex items-center gap-2">
                      <ExternalLink size={16} className="group-hover/link:rotate-12 transition-transform" />
                      Live Demo
                    </span>
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm font-medium text-white 
                             hover:text-purple-300 transition-colors group/link"
                  >
                    <span className="flex items-center gap-2">
                      <Github size={16} className="group-hover/link:scale-110 transition-transform" />
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects