export default function SkillsWindow() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 95, color: "bg-blue-500" },
        { name: "Next.js", level: 90, color: "bg-gray-800" },
        { name: "TypeScript", level: 88, color: "bg-blue-600" },
        { name: "Tailwind CSS", level: 92, color: "bg-teal-500" },
        { name: "Vue.js", level: 75, color: "bg-green-500" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 90, color: "bg-green-600" },
        { name: "Python", level: 85, color: "bg-yellow-500" },
        { name: "PostgreSQL", level: 88, color: "bg-blue-700" },
        { name: "MongoDB", level: 82, color: "bg-green-700" },
        { name: "GraphQL", level: 78, color: "bg-pink-500" },
      ],
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 85, color: "bg-blue-400" },
        { name: "AWS", level: 80, color: "bg-orange-500" },
        { name: "Git", level: 95, color: "bg-red-500" },
        { name: "Kubernetes", level: 70, color: "bg-blue-600" },
        { name: "CI/CD", level: 82, color: "bg-purple-500" },
      ],
    },
  ]

  return (
    <div className="space-y-4 sm:space-y-6 h-full overflow-y-auto">
      {/* Orange header bar */}
      <div className="bg-orange-400 h-6 sm:h-8 w-full -mx-3 sm:-mx-6 lg:-mx-8 -mt-3 sm:-mt-6 lg:-mt-8"></div>

      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 tracking-wider mb-2">SKILLS</h2>
        <p className="text-sm sm:text-base text-gray-600">Minhas principais competências técnicas</p>
      </div>

      <div className="space-y-6 pb-4">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">
                {category.category === "Frontend" && "🎨"}
                {category.category === "Backend" && "⚙️"}
                {category.category === "DevOps & Tools" && "🚀"}
              </span>
              {category.category}
            </h3>

            <div className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-center space-x-3">
                  <div className="w-20 text-sm font-medium text-gray-700 flex-shrink-0">{skill.name}</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${skill.color} transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="w-10 text-sm text-gray-600 text-right">{skill.level}%</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
