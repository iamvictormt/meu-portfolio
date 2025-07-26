"use client"

export default function ProjectsWindow() {
  const projects = [
    {
      name: "E-commerce Platform",
      description: "Full-stack e-commerce with React, Node.js, and PostgreSQL",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      status: "Completed",
      color: "bg-green-500",
      logo: "/placeholder.svg?height=60&width=60",
      liveUrl: "https://ecommerce-demo.vercel.app",
      githubUrl: "https://github.com/victor-torres/ecommerce-platform",
    },
    {
      name: "Task Management App",
      description: "Real-time collaboration tool with WebSocket integration",
      tech: ["Next.js", "Socket.io", "MongoDB", "Tailwind"],
      status: "In Progress",
      color: "bg-blue-500",
      logo: "/placeholder.svg?height=60&width=60",
      liveUrl: "https://taskmanager-demo.vercel.app",
      githubUrl: "https://github.com/victor-torres/task-manager",
    },
    {
      name: "AI Chat Assistant",
      description: "Intelligent chatbot using OpenAI API and vector database",
      tech: ["Python", "FastAPI", "OpenAI", "Pinecone"],
      status: "Completed",
      color: "bg-purple-500",
      logo: "/placeholder.svg?height=60&width=60",
      liveUrl: "https://ai-chat-demo.vercel.app",
      githubUrl: "https://github.com/victor-torres/ai-chat-assistant",
    },
    {
      name: "Mobile Banking App",
      description: "Secure mobile banking solution with biometric auth",
      tech: ["React Native", "Firebase", "Plaid API"],
      status: "Planning",
      color: "bg-yellow-500",
      logo: "/placeholder.svg?height=60&width=60",
      liveUrl: null,
      githubUrl: "https://github.com/victor-torres/mobile-banking",
    },
    {
      name: "Weather Dashboard",
      description: "Real-time weather monitoring with interactive maps",
      tech: ["Vue.js", "D3.js", "Weather API", "Mapbox"],
      status: "Completed",
      color: "bg-cyan-500",
      logo: "/placeholder.svg?height=60&width=60",
      liveUrl: "https://weather-dashboard-demo.vercel.app",
      githubUrl: "https://github.com/victor-torres/weather-dashboard",
    },
    {
      name: "Social Media Analytics",
      description: "Analytics platform for social media performance tracking",
      tech: ["React", "Chart.js", "Node.js", "Redis"],
      status: "Completed",
      color: "bg-pink-500",
      logo: "/placeholder.svg?height=60&width=60",
      liveUrl: "https://social-analytics-demo.vercel.app",
      githubUrl: "https://github.com/victor-torres/social-analytics",
    },
  ]

  const handleLiveDemo = (url: string | null) => {
    if (url) {
      window.open(url, "_blank")
    }
  }

  const handleGithub = (url: string) => {
    window.open(url, "_blank")
  }

  return (
    <div className="space-y-4 sm:space-y-6 h-full overflow-y-auto">
      {/* Orange header bar */}
      <div className="bg-orange-400 h-6 sm:h-8 w-full -mx-3 sm:-mx-6 lg:-mx-8 -mt-3 sm:-mt-6 lg:-mt-8"></div>

      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 tracking-wider mb-2">PROJECTS</h2>
        <p className="text-sm sm:text-base text-gray-600">Alguns dos meus projetos recentes</p>
      </div>

      <div className="space-y-4 pb-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border-2 border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start space-x-4">
              {/* Project Logo */}
              <div className="flex-shrink-0">
                <img
                  src={project.logo || "/placeholder.svg"}
                  alt={`${project.name} logo`}
                  className="w-16 h-16 rounded-lg border-2 border-gray-200 object-cover bg-gray-50"
                />
              </div>

              {/* Project Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-800 leading-tight">{project.name}</h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium text-white ${project.color} ml-2 flex-shrink-0`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-3">
                  {project.liveUrl ? (
                    <button
                      onClick={() => handleLiveDemo(project.liveUrl)}
                      className="flex items-center space-x-1 px-3 py-1.5 bg-blue-600 text-white rounded text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      <span>🚀</span>
                      <span>Live Demo</span>
                    </button>
                  ) : (
                    <span className="flex items-center space-x-1 px-3 py-1.5 bg-gray-300 text-gray-500 rounded text-sm font-medium cursor-not-allowed">
                      <span>⏳</span>
                      <span>Em Desenvolvimento</span>
                    </span>
                  )}

                  <button
                    onClick={() => handleGithub(project.githubUrl)}
                    className="flex items-center space-x-1 px-3 py-1.5 bg-gray-800 text-white rounded text-sm font-medium hover:bg-gray-900 transition-colors"
                  >
                    <span>📁</span>
                    <span>GitHub</span>
                  </button>

                  <div className="flex items-center text-xs text-gray-500 ml-auto">
                    <span>⭐ {Math.floor(Math.random() * 50) + 10} stars</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          💡 Mais projetos disponíveis no meu{" "}
          <button
            onClick={() => window.open("https://github.com/victor-torres", "_blank")}
            className="text-blue-600 font-medium hover:underline cursor-pointer"
          >
            GitHub
          </button>
        </p>
      </div>
    </div>
  )
}
