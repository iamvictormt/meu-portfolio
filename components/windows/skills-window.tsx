export default function SkillsWindow() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 92, color: 'bg-blue-500' },
        { name: 'Next.js', level: 90, color: 'bg-gray-800' },
        { name: 'TypeScript', level: 90, color: 'bg-yellow-400' },
        { name: 'Tailwind CSS', level: 88, color: 'bg-teal-500' },
        { name: 'Angular 2+', level: 95, color: 'bg-green-500' },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 88, color: 'bg-green-600' },
        { name: 'PostgreSQL', level: 85, color: 'bg-yellow-600' },
        { name: 'NestJS', level: 88, color: 'bg-blue-700' },
        { name: 'Spring Boot', level: 92, color: 'bg-green-700' },
        { name: 'Prisma ORM', level: 82, color: 'bg-purple-600' },
      ],
    },
    {
      category: 'DevOps & Tools',
      skills: [
        { name: 'Docker', level: 82, color: 'bg-blue-400' },
        { name: 'AWS', level: 80, color: 'bg-orange-500' },
        { name: 'Git', level: 94, color: 'bg-purple-400' },
        { name: 'Vercel', level: 90, color: 'bg-black' },
        { name: 'Postman', level: 95, color: 'bg-orange-400' },
      ],
    },
  ];

  return (
    <div className="space-y-4 sm:space-y-6 h-full overflow-y-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-800 tracking-wider mb-2">HABILIDADES</h2>
        <p className="text-sm sm:text-base text-gray-600">Minhas principais competências técnicas</p>
      </div>

      <div className="space-y-6 pb-4">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">
                {category.category === 'Frontend' && '🎨'}
                {category.category === 'Backend' && '⚙️'}
                {category.category === 'DevOps & Tools' && '🚀'}
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
  );
}
